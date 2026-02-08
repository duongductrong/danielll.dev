# Performance Monitor Devtools

> Add a dev-only performance monitoring panel showing FPS, JS Heap memory, Long Tasks, and Web Vitals — integrated into existing TanStack Devtools.

## Context

- **Stack**: TanStack Start + React 19 + Vite 7 + TailwindCSS v4
- **Existing devtools**: React Scan (CDN), TanStack Devtools with Router plugin
- **Key constraint**: Browser JS cannot access system CPU/RAM directly — we use proxy metrics (FPS for CPU load, JS Heap for memory)
- **`web-vitals` already installed** but unused

## Phases

| # | Phase | Status | File |
|---|-------|--------|------|
| 1 | Performance monitoring hooks | Pending | [phase-01-hooks.md](./phase-01-hooks.md) |
| 2 | Performance monitor panel + TanStack Devtools integration | Pending | [phase-02-panel-integration.md](./phase-02-panel-integration.md) |

## Architecture

```
src/features/dev/
├── components/
│   └── performance-monitor-panel.tsx   # UI panel (TanStack Devtools plugin)
└── hooks/
    ├── use-fps-monitor.ts              # FPS via requestAnimationFrame
    ├── use-memory-monitor.ts           # JS Heap via performance.memory
    ├── use-long-tasks-monitor.ts       # Long Tasks API observer
    └── use-web-vitals-monitor.ts       # LCP, CLS, INP via web-vitals
```

## Metrics Displayed

| Metric | Source | Description |
|--------|--------|-------------|
| FPS | `requestAnimationFrame` | Frames per second (CPU load proxy) |
| JS Heap | `performance.memory` | Used/total JS heap in MB (Chrome only) |
| Long Tasks | `PerformanceObserver` | Tasks >50ms blocking UI thread |
| LCP | `web-vitals` | Largest Contentful Paint |
| CLS | `web-vitals` | Cumulative Layout Shift |
| INP | `web-vitals` | Interaction to Next Paint |

## Decisions

- Integrate as TanStack Devtools plugin (not standalone overlay) — cleaner UX, unified devtools
- Dev-only — zero production bundle impact
- 1s update interval to minimize monitoring overhead
- No external dependencies beyond existing `web-vitals`
