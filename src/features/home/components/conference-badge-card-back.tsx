import { memo } from 'react'
import type { SVGProps } from 'react'

type ConferenceBadgeCardBackProps = SVGProps<SVGSVGElement> & {
  name?: string
  role?: string
  /** Visible strap height above the card in px (default 65) */
  strapLength?: number
}

export const ConferenceBadgeCardBack = memo(
  ({
    name = 'Trong\nDuong',
    role = 'SOFTWARE ENGINEER',
    strapLength = 65,
    ...props
  }: ConferenceBadgeCardBackProps) => {
    const [firstName, lastName] = name.split('\n')
    const cardTop = 35
    const cardHeight = 540
    const cardWidth = 380
    const viewBox = `0 -${strapLength} ${cardWidth} ${cardTop + cardHeight + strapLength}`

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill="none"
        role="img"
        aria-label={`Conference badge back for ${firstName} ${lastName}`}
        style={{ overflow: 'visible' }}
        {...props}
      >
        <defs>
          <clipPath id="card-clip-back">
            <rect x="0" y="0" width="380" height="540" rx="16" ry="16" />
          </clipPath>

          <linearGradient id="metal-gradient-back" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#666" />
            <stop offset="25%" stopColor="#b0b0b0" />
            <stop offset="50%" stopColor="#8a8a8a" />
            <stop offset="75%" stopColor="#c0c0c0" />
            <stop offset="100%" stopColor="#777" />
          </linearGradient>

          <linearGradient id="metal-dark-back" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#444" />
            <stop offset="50%" stopColor="#777" />
            <stop offset="100%" stopColor="#555" />
          </linearGradient>

          <linearGradient id="border-depth-back" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#555" />
            <stop offset="30%" stopColor="#3a3a3a" />
            <stop offset="70%" style={{ stopColor: 'var(--badge-card-surface, #1a1a1a)' }} />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>

          <linearGradient id="border-inset-back" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.12" />
            <stop offset="40%" stopColor="white" stopOpacity="0.04" />
            <stop offset="60%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="card-vignette-back" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.3" />
          </radialGradient>

          {/* Subtle pattern for back texture */}
          <pattern
            id="back-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect width="20" height="20" fill="none" />
            <circle cx="10" cy="10" r="0.5" style={{ fill: 'var(--badge-card-border-inner, #222)' }} opacity="0.5" />
          </pattern>
        </defs>

        {/* ===== LANYARD STRAP (mirrored) ===== */}
        <g
          className="lanyard-strap-back"
          transform="scale(-1, 1)"
          style={{ transformOrigin: '190px 0' }}
        >
          <path
            d="M 145,-600 L 215,-600 L 213,-62 L 161,-62 Z"
            style={{ fill: 'var(--badge-card-strap-back, #101010)' }}
            transform="rotate(-3, 190, -62)"
          />
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

        <g
          className="lanyard-strap"
          transform="scale(-1, 1)"
          style={{ transformOrigin: '190px 0' }}
        >
          <path
            d="M 155,-600 L 225,-600 L 218,-62 L 162,-62 Z"
            style={{ fill: 'var(--badge-card-strap, #1a1a1a)' }}
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="170"
            y1="-600"
            x2="174"
            y2="-62"
            style={{ stroke: 'var(--badge-card-strap-detail, #1f1f1f)' }}
            strokeWidth="0.5"
            opacity="0.5"
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="200"
            y1="-600"
            x2="201"
            y2="-62"
            style={{ stroke: 'var(--badge-card-strap-detail, #1f1f1f)' }}
            strokeWidth="0.5"
            opacity="0.4"
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="159"
            y1="-600"
            x2="165"
            y2="-62"
            style={{ stroke: 'var(--badge-card-strap-stitch, #2a2a2a)' }}
            strokeWidth="1"
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="221"
            y1="-600"
            x2="215"
            y2="-62"
            style={{ stroke: 'var(--badge-card-strap-stitch, #2a2a2a)' }}
            strokeWidth="1"
            transform="rotate(1, 190, -62)"
          />
          <line
            x1="158"
            y1="-600"
            x2="164"
            y2="-62"
            style={{ stroke: 'var(--badge-card-strap-highlight, #333)' }}
            strokeWidth="0.5"
            opacity="0.25"
            transform="rotate(1, 190, -62)"
          />
        </g>

        {/* Connector */}
        <g className="lanyard-connector">
          <path
            d="M 155,-67 L 225,-67 L 222,-60 L 158,-60 Z"
            fill="black"
            opacity="0.3"
          />
          <path
            d="M 158,-64 C 158,-60 160,-56 162,-55 L 218,-55 C 220,-56 222,-60 222,-64 Z"
            style={{ fill: 'var(--badge-card-strap, #1a1a1a)' }}
          />
          <line
            x1="159"
            y1="-64"
            x2="221"
            y2="-64"
            style={{ stroke: 'var(--badge-card-strap-fold, #2c2c2c)' }}
            strokeWidth="1"
            opacity="0.5"
          />
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
            fill="url(#metal-dark-back)"
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
            stroke="url(#metal-gradient-back)"
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
              d="M 180,-12 C 180,-15 182,-17 185,-17 L 195,-17 C 198,-17 200,-15 200,-12 L 200,10 C 200,15 198,18 195,18 L 193,18 L 193,22 L 187,22 L 187,18 L 185,18 C 182,18 180,15 180,10 Z"
              fill="url(#metal-gradient-back)"
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
              stroke="url(#metal-gradient-back)"
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
            stroke="url(#metal-gradient-back)"
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

        {/* ===== CARD BACK ===== */}
        <rect
          x="0"
          y={cardTop}
          width="380"
          height="540"
          rx="16"
          ry="16"
          fill="none"
          style={{ stroke: 'var(--badge-card-border-outer, #0a0a0a)' }}
          strokeWidth="3"
        />
        <rect
          x="0"
          y={cardTop}
          width="380"
          height="540"
          rx="16"
          ry="16"
          fill="none"
          stroke="url(#border-depth-back)"
          strokeWidth="1.5"
        />

        <g
          transform={`translate(0, ${cardTop})`}
          clipPath="url(#card-clip-back)"
        >
          <rect width="380" height="540" style={{ fill: 'var(--badge-card-bg-alt, #111)' }} rx="16" ry="16" />

          {/* Subtle dot pattern texture */}
          <rect width="380" height="540" fill="url(#back-grid)" opacity="0.6" />

          {/* Vignette */}
          <rect
            width="380"
            height="540"
            rx="16"
            ry="16"
            fill="url(#card-vignette-back)"
          />

          {/* Lanyard punch hole */}
          <circle
            cx="190"
            cy="10"
            r="7"
            style={{ fill: 'var(--badge-card-border-outer, #0a0a0a)', stroke: 'var(--badge-card-border-inner, #222)' }}
            strokeWidth="1.5"
          />
          <circle cx="190" cy="10" r="5" style={{ fill: 'var(--badge-card-hole, #070707)' }} />
          <circle
            cx="190"
            cy="10"
            r="5.5"
            fill="none"
            style={{ stroke: 'var(--badge-card-hole-ring, #444)' }}
            strokeWidth="0.8"
            opacity="0.45"
          />

          {/* Centered logo watermark */}
          <image
            href="/logo.png"
            x="115"
            y="140"
            width="150"
            height="150"
            opacity="0.08"
          />

          {/* QR code placeholder area */}
          <rect
            x="127"
            y="310"
            width="126"
            height="126"
            rx="8"
            style={{ fill: 'var(--badge-card-surface, #1a1a1a)', stroke: 'var(--badge-card-border-inner, #222)' }}
            strokeWidth="1"
          />
          <rect
            x="137"
            y="320"
            width="106"
            height="106"
            rx="4"
            style={{ fill: 'var(--badge-card-surface-dim, #0e0e0e)' }}
          />

          {/* QR grid pattern */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const isActive = (row + col) % 3 !== 0 || (row * col) % 5 === 0
              return isActive ? (
                <rect
                  key={`qr-${row}-${col}`}
                  x={142 + col * 12}
                  y={325 + row * 12}
                  width="10"
                  height="10"
                  rx="1"
                  style={{ fill: 'var(--badge-card-text-muted, #2a2a2a)' }}
                  opacity={0.6 + Math.sin(row * col) * 0.3}
                />
              ) : null
            }),
          )}

          {/* Scan text */}
          <text
            x="190"
            y="464"
            style={{ fill: 'var(--badge-card-text, white)' }}
            fontSize="9"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.15em"
            textAnchor="middle"
            opacity="0.4"
          >
            SCAN TO CONNECT
          </text>

          {/* Name mirrored on back */}
          <text
            x="190"
            y="508"
            style={{ fill: 'var(--badge-card-text, white)' }}
            fontSize="12"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="600"
            textAnchor="middle"
            opacity="0.3"
            letterSpacing="0.08em"
          >
            {`${firstName} ${lastName}`.toUpperCase()}
          </text>

          {/* Role */}
          <text
            x="190"
            y="524"
            style={{ fill: 'var(--badge-card-text, white)' }}
            fontSize="9"
            fontFamily="'Inter Variable', monospace"
            letterSpacing="0.1em"
            textAnchor="middle"
            opacity="0.2"
          >
            {role}
          </text>
        </g>

        {/* Inner inset highlight */}
        <rect
          x="0"
          y={cardTop}
          width="380"
          height="540"
          rx="16"
          ry="16"
          fill="none"
          stroke="url(#border-inset-back)"
          strokeWidth="1"
        />
      </svg>
    )
  },
)
