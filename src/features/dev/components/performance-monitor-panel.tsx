import { useState } from "react"
import { useFPSMonitor } from "../hooks/use-fps-monitor"
import { useMemoryMonitor } from "../hooks/use-memory-monitor"
import { useLongTasksMonitor } from "../hooks/use-long-tasks-monitor"
import { useWebVitalsMonitor } from "../hooks/use-web-vitals-monitor"

type Level = "good" | "warning" | "critical"

function getColor(level: Level) {
  switch (level) {
    case "good":
      return "text-green-400"
    case "warning":
      return "text-yellow-400"
    case "critical":
      return "text-red-400"
  }
}

function getDot(level: Level) {
  switch (level) {
    case "good":
      return "bg-green-400"
    case "warning":
      return "bg-yellow-400"
    case "critical":
      return "bg-red-400"
  }
}

function MetricCard({
  label,
  value,
  unit,
  level,
}: {
  label: string
  value: string | number
  unit?: string
  level: Level
}) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-2">
      <span className="text-[11px] font-medium uppercase tracking-wider text-white/50">
        {label}
      </span>
      <div className="flex items-baseline gap-1">
        <span className={`text-lg font-bold tabular-nums ${getColor(level)}`}>{value}</span>
        {unit && <span className="text-[11px] text-white/40">{unit}</span>}
      </div>
    </div>
  )
}

function fpsLevel(fps: number): Level {
  if (fps >= 55) return "good"
  if (fps >= 30) return "warning"
  return "critical"
}

function memoryLevel(percentage: number): Level {
  if (percentage < 50) return "good"
  if (percentage < 80) return "warning"
  return "critical"
}

function longTasksLevel(count: number): Level {
  if (count === 0) return "good"
  if (count <= 2) return "warning"
  return "critical"
}

function lcpLevel(ms: number): Level {
  if (ms < 2500) return "good"
  if (ms < 4000) return "warning"
  return "critical"
}

function clsLevel(value: number): Level {
  if (value < 0.1) return "good"
  if (value < 0.25) return "warning"
  return "critical"
}

function inpLevel(ms: number): Level {
  if (ms < 200) return "good"
  if (ms < 500) return "warning"
  return "critical"
}

function overallHealth(fps: number, memPct: number | null, longTaskCount: number): Level {
  const levels = [fpsLevel(fps), longTasksLevel(longTaskCount)]
  if (memPct !== null) levels.push(memoryLevel(memPct))
  if (levels.includes("critical")) return "critical"
  if (levels.includes("warning")) return "warning"
  return "good"
}

export function PerformanceMonitorPanel() {
  const [expanded, setExpanded] = useState(false)
  const fps = useFPSMonitor()
  const memory = useMemoryMonitor()
  const longTasks = useLongTasksMonitor()
  const vitals = useWebVitalsMonitor()

  const health = overallHealth(fps, memory?.percentage ?? null, longTasks.count)

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="fixed bottom-4 left-4 z-[9999] flex items-center gap-2 rounded-full border border-white/10 bg-black/90 px-3 py-1.5 font-mono text-xs text-white/80 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        <span className={`inline-block size-2 rounded-full ${getDot(health)}`} />
        <span className="tabular-nums">{fps}</span>
        <span className="text-white/40">FPS</span>
        {memory && (
          <>
            <span className="text-white/20">|</span>
            <span className="tabular-nums">{memory.used}</span>
            <span className="text-white/40">MB</span>
          </>
        )}
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] w-[420px] rounded-xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className={`inline-block size-2 rounded-full ${getDot(health)}`} />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Performance
          </span>
        </div>
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="rounded p-1 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 8L7 4L11 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div>
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
            Runtime
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <MetricCard label="FPS" value={fps} level={fpsLevel(fps)} />
            <MetricCard
              label="JS Heap"
              value={memory ? `${memory.used}/${memory.total}` : "N/A"}
              unit={memory ? "MB" : undefined}
              level={memory ? memoryLevel(memory.percentage) : "good"}
            />
            <MetricCard
              label="Long Tasks"
              value={longTasks.count}
              unit={longTasks.lastDuration ? `last: ${longTasks.lastDuration}ms` : "5s window"}
              level={longTasksLevel(longTasks.count)}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
            Core Web Vitals
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <MetricCard
              label="LCP"
              value={vitals.lcp !== null ? vitals.lcp : "..."}
              unit="ms"
              level={vitals.lcp !== null ? lcpLevel(vitals.lcp) : "good"}
            />
            <MetricCard
              label="CLS"
              value={vitals.cls !== null ? vitals.cls : "..."}
              level={vitals.cls !== null ? clsLevel(vitals.cls) : "good"}
            />
            <MetricCard
              label="INP"
              value={vitals.inp !== null ? vitals.inp : "..."}
              unit="ms"
              level={vitals.inp !== null ? inpLevel(vitals.inp) : "good"}
            />
          </div>
        </div>

        <p className="text-[10px] text-white/25">
          Memory: Chromium only. Web Vitals populate after interaction.
        </p>
      </div>
    </div>
  )
}
