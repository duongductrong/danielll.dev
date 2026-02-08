import { useEffect, useRef, useState } from "react"

interface LongTasksInfo {
  count: number
  lastDuration: number | null
}

export function useLongTasksMonitor() {
  const [info, setInfo] = useState<LongTasksInfo>({ count: 0, lastDuration: null })
  const tasksRef = useRef<number[]>([])

  useEffect(() => {
    if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") return

    let observer: PerformanceObserver | null = null
    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const now = performance.now()

        for (let i = 0; i < entries.length; i++) {
          tasksRef.current.push(now)
        }

        // Keep only tasks from last 5 seconds
        tasksRef.current = tasksRef.current.filter((t) => now - t < 5000)

        const lastEntry = entries[entries.length - 1]
        setInfo({
          count: tasksRef.current.length,
          lastDuration: lastEntry ? Math.round(lastEntry.duration) : null,
        })
      })

      observer.observe({ entryTypes: ["longtask"] })
    } catch {
      // Long Tasks API not supported
      return
    }

    // Decay count over time when no new long tasks
    const decay = setInterval(() => {
      const now = performance.now()
      tasksRef.current = tasksRef.current.filter((t) => now - t < 5000)
      setInfo((prev) => ({
        ...prev,
        count: tasksRef.current.length,
      }))
    }, 1000)

    return () => {
      observer?.disconnect()
      clearInterval(decay)
    }
  }, [])

  return info
}
