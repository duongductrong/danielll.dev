import { useEffect, useState } from "react"

interface MemoryInfo {
  used: number
  total: number
  percentage: number
}

declare global {
  interface Performance {
    memory?: {
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number
    }
  }
}

export function useMemoryMonitor() {
  const [memory, setMemory] = useState<MemoryInfo | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !performance.memory) return

    function update() {
      if (!performance.memory) return
      const used = Math.round(performance.memory.usedJSHeapSize / 1048576)
      const total = Math.round(performance.memory.totalJSHeapSize / 1048576)
      setMemory({
        used,
        total,
        percentage: total > 0 ? Math.round((used / total) * 100) : 0,
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return memory
}
