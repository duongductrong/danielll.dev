import { useEffect, useState } from "react"

interface WebVitalsInfo {
  lcp: number | null
  cls: number | null
  inp: number | null
}

export function useWebVitalsMonitor() {
  const [vitals, setVitals] = useState<WebVitalsInfo>({
    lcp: null,
    cls: null,
    inp: null,
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    let mounted = true

    async function init() {
      try {
        const { onLCP, onCLS, onINP } = await import("web-vitals")

        if (!mounted) return

        onLCP((metric) => {
          if (mounted) setVitals((prev) => ({ ...prev, lcp: Math.round(metric.value) }))
        })

        onCLS((metric) => {
          if (mounted)
            setVitals((prev) => ({ ...prev, cls: Math.round(metric.value * 1000) / 1000 }))
        })

        onINP((metric) => {
          if (mounted) setVitals((prev) => ({ ...prev, inp: Math.round(metric.value) }))
        })
      } catch {
        // web-vitals not available
      }
    }

    init()
    return () => {
      mounted = false
    }
  }, [])

  return vitals
}
