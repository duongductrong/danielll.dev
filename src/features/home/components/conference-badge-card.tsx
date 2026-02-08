import { memo, useEffect, useRef } from 'react'
import type { MotionValue } from 'motion/react'
import type { SVGProps } from 'react'

type ConferenceBadgeCardProps = SVGProps<SVGSVGElement> & {
  name?: string
  role?: string
  date?: string
  location?: string
  venue?: string
  venueAddress?: string
  /** Visible strap height above the card in px (default 65) */
  strapLength?: number
  /** Normalized mouse X position (0–1) for light gradient tracking */
  lightX?: MotionValue<number>
  /** Normalized mouse Y position (0–1) for light gradient tracking */
  lightY?: MotionValue<number>
}

export const ConferenceBadgeCard = memo(
  ({
    name = 'Trong\nDuong',
    role = 'SOFTWARE ENGINEER',
    date = '08/FEB/26',
    location = 'HO CHI MINH CITY',
    venue = 'THAO DIEN',
    venueAddress = 'DISTRICT 2',
    strapLength = 65,
    lightX,
    lightY,
    ...props
  }: ConferenceBadgeCardProps) => {
    const [firstName, lastName] = name.split('\n')
    const cardTop = 35
    const cardHeight = 540
    const cardWidth = 380
    const viewBox = `0 -${strapLength} ${cardWidth} ${cardTop + cardHeight + strapLength}`

    // Mouse-following gradient light — batched via rAF to avoid per-change DOM thrashing
    const lightGradientRef = useRef<SVGRadialGradientElement>(null)

    useEffect(() => {
      if (!lightX || !lightY) return

      let pendingX: number | null = null
      let pendingY: number | null = null
      let rafId: number | null = null

      function flush() {
        rafId = null
        const el = lightGradientRef.current
        if (!el) return
        if (pendingX != null) el.setAttribute('cx', `${pendingX * 100}%`)
        if (pendingY != null) el.setAttribute('cy', `${pendingY * 100}%`)
        pendingX = null
        pendingY = null
      }

      function scheduleFlush() {
        if (rafId == null) rafId = requestAnimationFrame(flush)
      }

      const unsubX = lightX.on('change', (v) => {
        pendingX = v
        scheduleFlush()
      })
      const unsubY = lightY.on('change', (v) => {
        pendingY = v
        scheduleFlush()
      })

      return () => {
        unsubX()
        unsubY()
        if (rafId != null) cancelAnimationFrame(rafId)
      }
    }, [lightX, lightY])

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill="none"
        role="img"
        aria-label={`Conference badge for ${firstName} ${lastName}`}
        style={{ overflow: 'visible' }}
        {...props}
      >
        <defs>
          <clipPath id="card-clip">
            <rect x="0" y="0" width="380" height="540" rx="16" ry="16" />
          </clipPath>

          <linearGradient id="metal-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#666" />
            <stop offset="25%" stopColor="#b0b0b0" />
            <stop offset="50%" stopColor="#8a8a8a" />
            <stop offset="75%" stopColor="#c0c0c0" />
            <stop offset="100%" stopColor="#777" />
          </linearGradient>

          <linearGradient id="metal-dark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#444" />
            <stop offset="50%" stopColor="#777" />
            <stop offset="100%" stopColor="#555" />
          </linearGradient>

          {/* Edge bevel — top-left highlight, bottom-right shadow for card thickness */}
          <linearGradient id="edge-highlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.08" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="edge-shadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="edge-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="edge-right" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="black" stopOpacity="0.15" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </linearGradient>

          {/* Mouse-following colored light gradient */}
          <radialGradient
            ref={lightGradientRef}
            id="mouse-light"
            cx="50%"
            cy="50%"
            r="45%"
          >
            <stop offset="0%" stopColor="#b8b0d8" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#8fa3c4" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Inner vignette for depth */}
          <radialGradient id="card-vignette" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.3" />
          </radialGradient>

          {/* Depth border — directional light from top-left */}
          <linearGradient id="border-depth" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#555" />
            <stop offset="30%" stopColor="#3a3a3a" />
            <stop offset="70%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>

          {/* Inner inset highlight — top/left lit edge */}
          <linearGradient id="border-inset" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.12" />
            <stop offset="40%" stopColor="white" stopOpacity="0.04" />
            <stop offset="60%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </linearGradient>

          {/* Card shadow handled by parent box-shadow — no SVG filter needed */}
        </defs>

        {/* ===== LANYARD STRAP ===== */}
        {/* Back layer — offset left & tilted so it peeks out visibly behind front */}
        <g className="lanyard-strap-back">
          <path
            d="M 145,-600 L 215,-600 L 213,-62 L 161,-62 Z"
            fill="#101010"
            transform="rotate(-3, 190, -62)"
          />
          {/* Back layer stitching */}
          <line
            x1="149"
            y1="-600"
            x2="164"
            y2="-62"
            stroke="#1c1c1c"
            strokeWidth="0.8"
            transform="rotate(-3, 190, -62)"
          />
          <line
            x1="211"
            y1="-600"
            x2="210"
            y2="-62"
            stroke="#1c1c1c"
            strokeWidth="0.8"
            transform="rotate(-3, 190, -62)"
          />
        </g>

        {/* Front layer — primary strap, slight tilt opposite direction */}
        <g className="lanyard-strap">
          <path
            d="M 155,-600 L 225,-600 L 218,-62 L 162,-62 Z"
            fill="#1a1a1a"
            transform="rotate(1, 190, -62)"
          />
          {/* Fabric weave texture */}
          <line
            x1="170"
            y1="-600"
            x2="174"
            y2="-62"
            stroke="#1f1f1f"
            strokeWidth="0.5"
            opacity="0.5"
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="200"
            y1="-600"
            x2="201"
            y2="-62"
            stroke="#1f1f1f"
            strokeWidth="0.5"
            opacity="0.4"
            transform="rotate(1, 190, -62)"
          />
          {/* Edge stitching */}
          <line
            x1="159"
            y1="-600"
            x2="165"
            y2="-62"
            stroke="#2a2a2a"
            strokeWidth="1"
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="221"
            y1="-600"
            x2="215"
            y2="-62"
            stroke="#2a2a2a"
            strokeWidth="1"
            transform="rotate(1, 190, -62)"
          />
          {/* Left edge light catch */}
          <line
            x1="158"
            y1="-600"
            x2="164"
            y2="-62"
            stroke="#333"
            strokeWidth="0.5"
            opacity="0.25"
            transform="rotate(1, 190, -62)"
          />
        </g>

        {/* Connector — wraps both layers seamlessly into the clip */}
        <g className="lanyard-connector">
          {/* Shadow between layers at convergence point */}
          <path
            d="M 155,-67 L 225,-67 L 222,-60 L 158,-60 Z"
            fill="black"
            opacity="0.3"
          />
          {/* Fabric fold wrapping around clip bar */}
          <path
            d="M 158,-64 C 158,-60 160,-56 162,-55 L 218,-55 C 220,-56 222,-60 222,-64 Z"
            fill="#1a1a1a"
          />
          {/* Fold highlight */}
          <line
            x1="159"
            y1="-64"
            x2="221"
            y2="-64"
            stroke="#2c2c2c"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* Crease shadow at clip junction */}
          <line
            x1="162"
            y1="-56"
            x2="218"
            y2="-56"
            stroke="black"
            strokeWidth="0.8"
            opacity="0.25"
          />
        </g>

        {/* ===== METAL CLIP HARDWARE ===== */}
        <g className="lanyard-clip">
          <rect
            x="162"
            y="-55"
            width="56"
            height="16"
            rx="2"
            fill="url(#metal-dark)"
          />
          <rect
            x="165"
            y="-53"
            width="50"
            height="12"
            rx="1.5"
            fill="#666"
            opacity="0.5"
          />
          <circle
            cx="175"
            cy="-47"
            r="2"
            fill="#333"
            stroke="#555"
            strokeWidth="0.5"
          />
          <circle
            cx="205"
            cy="-47"
            r="2"
            fill="#333"
            stroke="#555"
            strokeWidth="0.5"
          />

          <ellipse
            cx="190"
            cy="-27"
            rx="14"
            ry="14"
            fill="none"
            stroke="url(#metal-gradient)"
            strokeWidth="5"
          />
          <ellipse
            cx="190"
            cy="-27"
            rx="11"
            ry="11"
            fill="none"
            stroke="#aaa"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <rect
            x="184"
            y="-42"
            width="12"
            height="8"
            rx="2"
            fill="#666"
            stroke="#555"
            strokeWidth="0.5"
          />

          <g>
            <path
              d="M 180,-12
               C 180,-15 182,-17 185,-17
               L 195,-17
               C 198,-17 200,-15 200,-12
               L 200,10
               C 200,15 198,18 195,18
               L 193,18 L 193,22 L 187,22 L 187,18
               L 185,18
               C 182,18 180,15 180,10
               Z"
              fill="url(#metal-gradient)"
              stroke="#555"
              strokeWidth="0.5"
            />
            <path
              d="M 184,-9 L 184,8 C 184,12 185,14 188,14 L 192,14 C 195,14 196,12 196,8 L 196,-9 C 196,-11 195,-12 192,-12 L 188,-12 C 185,-12 184,-11 184,-9 Z"
              fill="#999"
              opacity="0.2"
            />

            <path
              d="M 200,-5 L 207,-5 C 210,-5 212,-3 212,0 L 212,10 C 212,13 210,15 207,15 L 200,15"
              fill="none"
              stroke="url(#metal-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="212"
              cy="5"
              r="3"
              fill="#aaa"
              stroke="#666"
              strokeWidth="0.5"
            />
            <line
              x1="200"
              y1="-2"
              x2="200"
              y2="13"
              stroke="#333"
              strokeWidth="0.5"
            />
          </g>

          <path
            d="M 185,22 C 185,26 187,30 190,30 C 193,30 195,26 195,22"
            fill="none"
            stroke="url(#metal-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        <line
          x1="190"
          y1="30"
          x2="190"
          y2="45"
          stroke="#888"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* ===== CARD ===== */}
        {/* Outer border — dark base stroke simulating card thickness/edge */}
        <rect
          x="0"
          y={cardTop}
          width="380"
          height="540"
          rx="16"
          ry="16"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="3"
        />

        {/* Main depth border — gradient lit from top-left */}
        <rect
          x="0"
          y={cardTop}
          width="380"
          height="540"
          rx="16"
          ry="16"
          fill="none"
          stroke="url(#border-depth)"
          strokeWidth="1.5"
        />

        <g transform={`translate(0, ${cardTop})`} clipPath="url(#card-clip)">
          <rect width="380" height="540" fill="#141414" rx="16" ry="16" />

          {/* Edge bevel: top highlight + bottom shadow */}
          <rect
            width="380"
            height="540"
            rx="16"
            ry="16"
            fill="url(#edge-highlight)"
          />
          <rect
            width="380"
            height="540"
            rx="16"
            ry="16"
            fill="url(#edge-shadow)"
          />
          <rect
            width="380"
            height="540"
            rx="16"
            ry="16"
            fill="url(#card-vignette)"
          />

          {/* Mouse-following colored light overlay */}
          {lightX && lightY && (
            <rect
              width="380"
              height="540"
              rx="16"
              ry="16"
              fill="url(#mouse-light)"
            />
          )}

          {/* Lanyard punch hole */}
          <circle
            cx="190"
            cy="10"
            r="7"
            fill="#0a0a0a"
            stroke="#222"
            strokeWidth="1.5"
          />
          <circle cx="190" cy="10" r="5" fill="#070707" />
          <circle
            cx="190"
            cy="10"
            r="5.5"
            fill="none"
            stroke="#444"
            strokeWidth="0.8"
            opacity="0.45"
          />

          {/* Top row: date and location */}
          <text
            x="32"
            y="52"
            fill="white"
            fontSize="10"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.08em"
            opacity="0.7"
          >
            {date}
          </text>
          <text
            x="348"
            y="52"
            fill="white"
            fontSize="10"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.08em"
            textAnchor="end"
            opacity="0.7"
          >
            {location}
          </text>

          {/* === Center Logo === */}
          <image
            href="/logo.png"
            x="115"
            y="155"
            width="150"
            height="150"
            opacity="0.25"
          />

          {/* Attendee name */}
          <text
            x="32"
            y="390"
            fill="white"
            fontSize="36"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            {firstName}
          </text>
          <text
            x="32"
            y="430"
            fill="white"
            fontSize="36"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            {lastName}
          </text>

          {/* Role label */}
          <text
            x="32"
            y="460"
            fill="white"
            fontSize="10"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.12em"
            opacity="0.6"
          >
            {role}
          </text>

          {/* Venue info */}
          <text
            x="32"
            y="502"
            fill="white"
            fontSize="10"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.08em"
            opacity="0.5"
          >
            {venue}
          </text>
          <text
            x="32"
            y="516"
            fill="white"
            fontSize="10"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.08em"
            opacity="0.5"
          >
            {venueAddress}
          </text>
        </g>

        {/* Inner inset highlight — simulates beveled edge catching light */}
        <rect
          x="0"
          y={cardTop}
          width="380"
          height="540"
          rx="16"
          ry="16"
          fill="none"
          stroke="url(#border-inset)"
          strokeWidth="1"
        />
      </svg>
    )
  },
)
