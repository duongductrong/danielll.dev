import { useEffect, useState } from "react"

export function useFPSMonitor() {
  const [fps, setFPS] = useState(60)

  useEffect(() => {
    if (typeof window === "undefined") return

    let frameCount = 0
    let lastTime = performance.now()
    let rafId: number

    function tick() {
      frameCount++
      const now = performance.now()
      if (now >= lastTime + 1000) {
        setFPS(Math.round((frameCount * 1000) / (now - lastTime)))
        frameCount = 0
        lastTime = now
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return fps
}
