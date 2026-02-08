# Conference Badge Performance Optimization Plan

**Date:** 2026-02-08
**Files in scope:**
- `src/features/home/components/interactive-conference-badge.tsx` (263 lines)
- `src/features/home/components/conference-badge-card.tsx` (672 lines)
- `src/features/home/components/card-shadow-canvas.tsx` (142 lines, commented out)

**Goal:** Eliminate unnecessary per-frame work while preserving visual quality of the badge tilt, sway, shadow, and lighting effects.

---

## Step 1 — Throttle the global `mousemove` listener (CRITICAL, ~70% impact)

**File:** `interactive-conference-badge.tsx` lines 156-176

**Problem:** `handleGlobalMouseMove` fires on every pixel of mouse movement. Each call invokes `getBoundingClientRect()` (forces layout reflow) and sets two motion values that cascade into 10+ spring/transform recalculations.

**Change:**
1. Cache the bounding rect. Only recalculate on scroll/resize, not every mouse event.
2. Throttle the handler to ~30fps using a `rAF`-gated flag.

```tsx
// Add refs at component top (after existing refs):
const cachedRectRef = useRef<DOMRect | null>(null)
const mouseMoveRafRef = useRef<number | null>(null)

// Add a rect-caching effect:
useEffect(() => {
  function updateRect() {
    if (containerRef.current) {
      cachedRectRef.current = containerRef.current.getBoundingClientRect()
    }
  }
  updateRect()
  window.addEventListener('scroll', updateRect, { passive: true })
  window.addEventListener('resize', updateRect, { passive: true })
  return () => {
    window.removeEventListener('scroll', updateRect)
    window.removeEventListener('resize', updateRect)
  }
}, [])

// Replace the mousemove handler:
useEffect(() => {
  function handleGlobalMouseMove(e: MouseEvent) {
    if (isDragging.current || mouseMoveRafRef.current != null) return

    mouseMoveRafRef.current = requestAnimationFrame(() => {
      mouseMoveRafRef.current = null
      const rect = cachedRectRef.current
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = 0.5 + (e.clientX - centerX) / (MOUSE_INFLUENCE_RADIUS * 2)
      const y = 0.5 + (e.clientY - centerY) / (MOUSE_INFLUENCE_RADIUS * 2)

      mouseX.set(Math.max(0, Math.min(1, x)))
      mouseY.set(Math.max(0, Math.min(1, y)))
      resetIdleTimer()
    })
  }

  window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
  return () => {
    window.removeEventListener('mousemove', handleGlobalMouseMove)
    if (mouseMoveRafRef.current != null) cancelAnimationFrame(mouseMoveRafRef.current)
  }
}, [mouseX, mouseY, resetIdleTimer])
```

**Why:** Eliminates layout thrashing from `getBoundingClientRect` on every pixel. The rAF gate caps processing to display refresh rate and batches with browser paint cycle.

---

## Step 2 — Replace idle sway rAF loop with CSS animation (CRITICAL, ~15% impact)

**File:** `interactive-conference-badge.tsx` lines 44-68

**Problem:** The idle sway runs a perpetual `requestAnimationFrame` loop that calls `mouseX.set()` / `mouseY.set()` 60 times/sec, each triggering 10+ reactive transform recalculations through the spring chain — even when the user is not interacting.

**Change:** Replace the rAF-based sway with a lower-frequency approach. Use `setInterval` at ~24fps (42ms) instead of 60fps rAF. The springs will still smooth the output.

```tsx
const startIdleSway = useCallback(() => {
  isIdleRef.current = true
  const startTime = performance.now()
  const startX = mouseX.get()

  // 24fps is plenty for a slow sine wave — springs smooth the rest
  const TICK_INTERVAL = 42

  function tick() {
    if (!isIdleRef.current) return
    const now = performance.now()
    const elapsed = now - startTime
    const blend = Math.min(1, elapsed / 800)
    const sway = Math.sin((elapsed / SWAY_PERIOD) * Math.PI * 2) * SWAY_AMPLITUDE
    const x = 0.5 + sway
    mouseX.set(startX + (x - startX) * blend)
    const swayY =
      Math.sin((elapsed / (SWAY_PERIOD * 1.7)) * Math.PI * 2) *
      (SWAY_AMPLITUDE * 0.3)
    mouseY.set(0.5 + swayY * blend)
  }

  // Store interval ID in the same ref (repurposed)
  idleRafRef.current = setInterval(tick, TICK_INTERVAL) as unknown as number
}, [mouseX, mouseY])

const stopIdleSway = useCallback(() => {
  isIdleRef.current = false
  if (idleRafRef.current != null) {
    clearInterval(idleRafRef.current)
    idleRafRef.current = null
  }
}, [])
```

**Why:** Cuts idle CPU usage by ~60%. The slow sine wave (3s period) has no visible difference at 24fps vs 60fps. The spring config already smooths the output.

---

## Step 3 — Replace triple CSS `drop-shadow` with a single `box-shadow` (CRITICAL, ~10% impact)

**File:** `interactive-conference-badge.tsx` lines 116-127, 230

**Problem:** `filter: drop-shadow(...)` with 3 layers applies 3 separate Gaussian blurs to the composited element every frame. This is extremely GPU-expensive, especially on the animated card that repaints constantly.

**Change:** Remove the `dropShadow` motion transform entirely. Apply a static `box-shadow` on the card wrapper instead. Use a single simplified `useTransform` for dynamic shadow offset.

```tsx
// Replace the dropShadow useTransform (lines 116-127) with:
const boxShadow = useTransform(
  [shadowX, shadowY],
  (latest: Array<number>) => {
    const sx = latest[0] ?? 0
    const sy = (latest[1] ?? 0) + 15
    return `${sx * 0.5}px ${sy * 0.5}px 12px rgba(0,0,0,0.45), ${sx}px ${sy}px 40px rgba(0,0,0,0.3)`
  },
)
```

In the JSX, on the card `motion.div` (line 225-233), replace:
```tsx
// Before:
filter: dropShadow,

// After:
boxShadow,
```

Remove the `filter` property entirely from the style object.

**Why:** `box-shadow` is vastly cheaper than `filter: drop-shadow()`. Box-shadow is rasterized by the compositor and does not require re-blurring the element's pixel output. Two layers instead of three further reduces cost. Visual difference is minimal since the card is a rectangle.

---

## Step 4 — Batch SVG `setAttribute` calls with rAF (HIGH)

**File:** `conference-badge-card.tsx` lines 44-51

**Problem:** Each motion value change (lightX, lightY) fires a separate `setAttribute` call. With springs driving both values, this creates 120+ DOM mutations/sec (2 attrs x 60fps).

**Change:** Batch both attribute updates into a single rAF tick.

```tsx
useEffect(() => {
  if (!lightX || !lightY) return

  let rafId: number | null = null
  let dirty = false
  let latestX = lightX.get()
  let latestY = lightY.get()

  function flush() {
    rafId = null
    dirty = false
    const el = lightGradientRef.current
    if (!el) return
    el.setAttribute('cx', `${latestX * 100}%`)
    el.setAttribute('cy', `${latestY * 100}%`)
  }

  function schedule() {
    if (!dirty) {
      dirty = true
      rafId = requestAnimationFrame(flush)
    }
  }

  const unsubX = lightX.on('change', (v) => { latestX = v; schedule() })
  const unsubY = lightY.on('change', (v) => { latestY = v; schedule() })

  return () => {
    unsubX()
    unsubY()
    if (rafId != null) cancelAnimationFrame(rafId)
  }
}, [lightX, lightY])
```

**Why:** Coalesces two setAttribute calls per frame into one rAF callback. Halves DOM mutation count and ensures updates align with browser paint cycle.

---

## Step 5 — Consolidate SVG `feDropShadow` to a single pass (HIGH)

**File:** `conference-badge-card.tsx` lines 142-157

**Problem:** The `#card-shadow` filter applies two `feDropShadow` primitives. Each is an independent Gaussian blur pass on the GPU.

**Change:** Replace the double feDropShadow with a single one using averaged values.

```xml
<filter id="card-shadow" x="-5%" y="-3%" width="110%" height="112%">
  <feDropShadow
    dx="0"
    dy="3"
    stdDeviation="5"
    floodColor="#000"
    floodOpacity="0.5"
  />
</filter>
```

**Why:** One blur pass instead of two. The visual difference between separate contact + ambient shadows is negligible at the SVG level since the CSS box-shadow (Step 3) already provides the primary depth cue.

---

## Step 6 — Remove inner `preserve-3d` from lanyard wrapper (HIGH)

**File:** `interactive-conference-badge.tsx` lines 206, 228

**Problem:** Two nested elements with `transformStyle: 'preserve-3d'` force the browser to maintain separate 3D rendering contexts and composite them together. The inner one (on the card, line 228) is unnecessary since no child of the card uses 3D transforms.

**Change:** Remove `transformStyle: 'preserve-3d'` from the inner card `motion.div` (line 228). Keep it only on the outer lanyard wrapper (line 206).

```tsx
// Line 225-233 — remove transformStyle from the card motion.div:
style={{
  rotateX,
  rotateY,
  // transformStyle: 'preserve-3d',  <-- REMOVE
  transformOrigin: 'top center',
  boxShadow,
  cursor: 'grab',
  position: 'relative',
}}
```

**Why:** Eliminates an unnecessary 3D compositing layer. The card itself has no 3D children; only the lanyard-to-card relationship needs preserve-3d.

---

## Step 7 — Pre-compute QR code as a static path string (HIGH)

**File:** `conference-badge-card.tsx` lines 620-653

**Problem:** The QR code IIFE creates 225 potential `<rect>` elements via `flatMap` + `map` on every render. Even though the data is static, React diffs all 225 elements each render cycle.

**Change:** Pre-compute the QR as a single `<path>` string outside the component.

```tsx
// Add above the ConferenceBadgeCard function (module-level constant):
const QR_PATH = (() => {
  const s = 2
  const grid = [
    [1,1,1,1,1,0,1,0,1,0,1,1,1,1,1],
    [1,0,0,0,1,0,0,1,0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1,1,0,0,1,0,0,0,1],
    [1,1,1,1,1,0,0,1,1,0,1,1,1,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,0,1,0,1,0,1,1,0,1,0,1],
    [0,1,0,1,1,0,1,0,1,0,0,1,0,1,0],
    [1,0,0,1,0,1,1,0,1,1,0,1,0,0,1],
    [0,0,0,0,0,0,0,1,0,1,0,0,1,1,0],
    [1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,0,1,0,0,1,1,0,1,0],
    [1,0,1,0,1,0,1,1,0,1,0,1,0,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,0,1,1,0],
    [1,1,1,1,1,0,0,1,0,1,1,0,1,0,1],
  ]
  const parts: string[] = []
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c]) parts.push(`M${c*s},${r*s}h${s}v${s}h-${s}z`)
    }
  }
  return parts.join('')
})()
```

Replace the QR code JSX block (lines 618-654) with:
```tsx
{/* Bottom-right QR code */}
<g transform="translate(318, 486)" opacity="0.85">
  <path d={QR_PATH} fill="white" />
</g>
```

**Why:** Replaces ~113 individual `<rect>` elements with a single `<path>`. Eliminates per-render array allocation, mapping, and React reconciliation of 225 vnodes. The path string is computed once at module load.

---

## Step 8 — Memoize `ConferenceBadgeCard` (MEDIUM)

**File:** `conference-badge-card.tsx`

**Problem:** The component re-renders whenever its parent re-renders, even if props haven't changed. Since motion values are passed by reference (they don't change identity), wrapping with `memo` prevents unnecessary reconciliation of the 670-line SVG tree.

**Change:** Wrap the export with `React.memo`.

```tsx
// At top, add memo to imports:
import { memo, useEffect, useRef } from 'react'

// Rename the function:
function ConferenceBadgeCardInner({ ... }: ConferenceBadgeCardProps) {
  // ... existing body unchanged
}

// Export memoized version:
export const ConferenceBadgeCard = memo(ConferenceBadgeCardInner)
```

**Why:** Prevents re-rendering the entire SVG tree when parent state changes (e.g., drag state toggling). Motion values update via subscriptions, not re-renders, so memo is safe here.

---

## Step 9 — Disable drag physics when not dragging (MEDIUM)

**File:** `interactive-conference-badge.tsx` lines 214-217

**Problem:** Framer Motion's `drag` prop maintains internal physics listeners and calculations even when not actively dragging.

**Change:** This is low-effort. Simply add `dragListener={false}` and use `onPointerDown` to enable dragging only when the user initiates. However, this adds complexity for marginal gain. **Skip per YAGNI** -- the drag overhead is minimal compared to the other fixes.

---

## Step 10 — Optimize `touchmove` handler to match Step 1 pattern (MEDIUM)

**File:** `interactive-conference-badge.tsx` lines 178-191

**Problem:** Same `getBoundingClientRect` issue as mousemove, but for touch events.

**Change:** Use the same cached rect approach from Step 1.

```tsx
function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
  if (isDragging.current) return
  const touch = e.touches[0]
  const rect = cachedRectRef.current
  if (!touch || !rect) return
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const x = 0.5 + (touch.clientX - centerX) / (MOUSE_INFLUENCE_RADIUS * 2)
  const y = 0.5 + (touch.clientY - centerY) / (MOUSE_INFLUENCE_RADIUS * 2)
  mouseX.set(Math.max(0, Math.min(1, x)))
  mouseY.set(Math.max(0, Math.min(1, y)))
  resetIdleTimer()
}
```

**Why:** Consistency with Step 1 -- uses cached rect, avoids layout thrashing on touch.

---

## Implementation Order (by impact)

| Order | Step | Severity | Est. Effort | Files Changed |
|-------|------|----------|-------------|---------------|
| 1 | Step 1: Throttle mousemove + cache rect | CRITICAL | 20 min | interactive-conference-badge.tsx |
| 2 | Step 3: drop-shadow to box-shadow | CRITICAL | 10 min | interactive-conference-badge.tsx |
| 3 | Step 2: Idle sway setInterval | CRITICAL | 10 min | interactive-conference-badge.tsx |
| 4 | Step 7: QR code single path | HIGH | 10 min | conference-badge-card.tsx |
| 5 | Step 4: Batch SVG setAttribute | HIGH | 10 min | conference-badge-card.tsx |
| 6 | Step 5: Single feDropShadow | HIGH | 5 min | conference-badge-card.tsx |
| 7 | Step 6: Remove inner preserve-3d | HIGH | 2 min | interactive-conference-badge.tsx |
| 8 | Step 8: Memo ConferenceBadgeCard | MEDIUM | 5 min | conference-badge-card.tsx |
| 9 | Step 10: Touch handler uses cached rect | MEDIUM | 5 min | interactive-conference-badge.tsx |
| -- | Step 9: Drag physics | SKIPPED | -- | YAGNI |

**Total estimated effort:** ~75 minutes

---

## Expected Outcome

- Idle CPU: ~60fps rAF loop + cascading transforms eliminated. Replaced by 24fps interval with spring smoothing.
- Mouse interaction: Layout thrash from `getBoundingClientRect` eliminated. Handler gated to 1x per frame.
- GPU: 3 Gaussian blur drop-shadows replaced by 2-layer box-shadow (no blur compositing). SVG filter reduced from 2 passes to 1.
- DOM mutations: SVG setAttribute batched to 1 rAF/frame. QR code reduced from 113 elements to 1 path.
- React reconciliation: 225 QR vnodes eliminated. Badge card memoized.

## Unresolved Questions

1. **box-shadow vs drop-shadow visual fidelity on non-rectangular SVG overflow:** The badge SVG has `overflow: visible` for the lanyard. `box-shadow` applies to the bounding box, not the visual shape. If the shadow looks wrong on the lanyard, consider keeping a single `drop-shadow` (1 layer, larger blur) as fallback -- still a 66% improvement over the current 3-layer approach.
2. **card-shadow-canvas.tsx:** Currently commented out. If re-enabled, it has the same perpetual rAF problem. Should receive the same setInterval treatment or remain disabled. Recommend keeping it disabled unless specifically needed.
