# Phase 02: Performance Monitor Panel + Integration

## Overview
- **Priority**: High
- **Status**: Pending
- **Estimated files**: 2 (1 new component, 1 modified)

## Implementation Steps

### 1. `performance-monitor-panel.tsx`
- Compose all 4 hooks into a single panel component
- Display metrics in a clean grid layout using TailwindCSS
- Color-code values: green (good), yellow (warning), red (critical)
  - FPS: green >=55, yellow >=30, red <30
  - Memory: green <50%, yellow <80%, red >=80%
  - Long Tasks: green 0, yellow 1-2, red >=3
  - LCP: green <2.5s, yellow <4s, red >=4s
  - CLS: green <0.1, yellow <0.25, red >=0.25
  - INP: green <200ms, yellow <500ms, red >=500ms
- Show "N/A" for unavailable metrics (non-Chrome)

### 2. Integrate into `__root.tsx`
- Add performance panel as TanStack Devtools plugin
- Plugin config: `{ name: 'Performance', render: <PerformanceMonitorPanel /> }`

## Success Criteria
- Panel renders correctly inside TanStack Devtools
- All metrics update in real-time (1s interval)
- No errors in non-Chrome browsers
- Zero production bundle impact (TanStack Devtools already dev-only)

## Related Files
- `src/features/dev/components/performance-monitor-panel.tsx` (new)
- `src/routes/__root.tsx` (modify)
