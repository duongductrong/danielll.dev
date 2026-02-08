import { useEffect, useRef } from 'react'
import type { MotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

type CardShadowCanvasProps = {
  /** Card rotateX motion value (degrees) — controls vertical shadow shift */
  rotateX: MotionValue<number>
  /** Card rotateY motion value (degrees) — controls horizontal shadow shift */
  rotateY: MotionValue<number>
  className?: string
}

const TILT_MAX = 12
const MAX_OFFSET_X = 0.075 // fraction of canvas width
const MAX_OFFSET_Y = 0.1 // fraction of canvas height
const SCALE_RANGE = 0.15

export function CardShadowCanvas({
  rotateX,
  rotateY,
  className,
}: CardShadowCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    function draw() {
      if (!ctx || !canvas) return
      const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2)
      const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2)

      ctx.clearRect(0, 0, w, h)

      const rx = rotateX.get()
      const ry = rotateY.get()

      const nx = Math.max(-1, Math.min(1, rx / TILT_MAX))
      const ny = Math.max(-1, Math.min(1, ry / TILT_MAX))

      const offsetX = ny * MAX_OFFSET_X * w
      const offsetY = -nx * MAX_OFFSET_Y * h

      const tiltMagnitude = Math.sqrt(nx * nx + ny * ny)
      const scaleX = 1 + Math.abs(ny) * SCALE_RANGE
      const scaleY = 1 - tiltMagnitude * SCALE_RANGE * 0.5

      const opacity = 0.7 - tiltMagnitude * 0.2

      const cx = w / 2 + offsetX
      const cy = h / 2 + offsetY

      // Shadow radii proportional to canvas size
      const baseRx = w * 0.38
      const baseRy = h * 0.28
      const finalRx = baseRx * scaleX
      const finalRy = baseRy * scaleY

      // Layer 1: Wide diffuse outer glow — visible on black bg
      ctx.save()
      ctx.translate(cx, cy)
      ctx.scale(1, finalRy / finalRx)
      const outerR = finalRx * 1.4
      const outerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, outerR)
      outerGrad.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.06})`)
      outerGrad.addColorStop(0.3, `rgba(255, 255, 255, ${opacity * 0.03})`)
      outerGrad.addColorStop(0.6, `rgba(255, 255, 255, ${opacity * 0.01})`)
      outerGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = outerGrad
      ctx.beginPath()
      ctx.arc(0, 0, outerR, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Layer 2: Core shadow — subtle warm/neutral glow
      ctx.save()
      ctx.translate(cx, cy)
      ctx.scale(1, finalRy / finalRx)
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, finalRx)
      coreGrad.addColorStop(0, `rgba(200, 200, 210, ${opacity * 0.09})`)
      coreGrad.addColorStop(0.35, `rgba(180, 180, 195, ${opacity * 0.05})`)
      coreGrad.addColorStop(0.7, `rgba(160, 160, 175, ${opacity * 0.02})`)
      coreGrad.addColorStop(1, 'rgba(160, 160, 175, 0)')
      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(0, 0, finalRx, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Layer 3: Contact core — tight bright center for ground contact illusion
      ctx.save()
      ctx.translate(cx, cy)
      const contactRx = finalRx * 0.45
      const contactRy = finalRy * 0.4
      ctx.scale(1, contactRy / contactRx)
      const contactGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, contactRx)
      contactGrad.addColorStop(0, `rgba(220, 220, 230, ${opacity * 0.1})`)
      contactGrad.addColorStop(0.5, `rgba(200, 200, 210, ${opacity * 0.04})`)
      contactGrad.addColorStop(1, 'rgba(200, 200, 210, 0)')
      ctx.fillStyle = contactGrad
      ctx.beginPath()
      ctx.arc(0, 0, contactRx, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [rotateX, rotateY])

  return (
    <canvas
      ref={canvasRef}
      className={cn(className, 'w-full h-[330px] pointer-events-none absolute')}
    />
  )
}
