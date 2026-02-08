# Phase 01: Performance Monitoring Hooks

## Overview
- **Priority**: High
- **Status**: Pending
- **Estimated files**: 4

## Implementation Steps

### 1. `use-fps-monitor.ts`
- Use `requestAnimationFrame` loop to count frames per second
- Update state every 1000ms
- Return current FPS number
- Cleanup via `cancelAnimationFrame` on unmount

### 2. `use-memory-monitor.ts`
- Read `performance.memory.usedJSHeapSize` and `totalJSHeapSize` (Chrome only)
- Convert bytes to MB
- Poll every 1000ms via `setInterval`
- Return `{ used: number, total: number, percentage: number } | null`
- Return null if API unavailable (non-Chrome browsers)

### 3. `use-long-tasks-monitor.ts`
- Create `PerformanceObserver` for `longtask` entry type
- Track count of long tasks in rolling 5s window
- Return `{ count: number, lastDuration: number | null }`
- Graceful fallback if API unavailable

### 4. `use-web-vitals-monitor.ts`
- Use existing `web-vitals` package callbacks: `onLCP`, `onCLS`, `onINP`
- Store latest values in state
- Return `{ lcp: number | null, cls: number | null, inp: number | null }`

## Success Criteria
- All hooks work independently
- No runtime errors in non-Chrome browsers (graceful fallback)
- Minimal overhead (< 1ms per update cycle)

## Related Files
- `src/features/dev/hooks/` (new directory)
- `package.json` (web-vitals already installed)
