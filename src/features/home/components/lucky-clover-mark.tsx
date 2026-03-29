export function LuckyCloverMark() {
  return (
    <svg
      viewBox="0 0 120 150"
      className="h-[84px] w-[84px]"
      role="img"
      aria-label="Lucky clover mark"
    >
      <defs>
        <radialGradient id="hc-top-g" cx="40%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#6ECF72" />
          <stop offset="50%" stopColor="#49A84F" />
          <stop offset="100%" stopColor="#327A3A" />
        </radialGradient>
        <radialGradient id="hc-right-g" cx="65%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#6DD370" />
          <stop offset="50%" stopColor="#46A44C" />
          <stop offset="100%" stopColor="#2F7536" />
        </radialGradient>
        <radialGradient id="hc-bottom-g" cx="50%" cy="55%" r="75%">
          <stop offset="0%" stopColor="#5CC460" />
          <stop offset="50%" stopColor="#3F9A45" />
          <stop offset="100%" stopColor="#2A6E32" />
        </radialGradient>
        <radialGradient id="hc-left-g" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#6ECF72" />
          <stop offset="50%" stopColor="#49A84F" />
          <stop offset="100%" stopColor="#327A3A" />
        </radialGradient>
        <linearGradient id="hc-stem-g" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#327A3A" />
          <stop offset="50%" stopColor="#4A9E52" />
          <stop offset="100%" stopColor="#6BB870" />
        </linearGradient>
        <radialGradient id="hc-hi-tl" cx="30%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#B8F5BC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#B8F5BC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hc-hi-tr" cx="70%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#B8F5BC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B8F5BC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hc-center-sh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E5C28" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#1E5C28" stopOpacity="0" />
        </radialGradient>
        <filter id="hc-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="1.8"
            floodColor="#1a4d24"
            floodOpacity="0.22"
          />
        </filter>
      </defs>

      <g transform="rotate(12 60 62)" filter="url(#hc-shadow)">
        <path
          d="M60 60 C58 46, 44 24, 38 24 C30 24, 24 34, 26 42 C28 50, 36 58, 60 60 Z"
          fill="url(#hc-top-g)"
        />
        <path
          d="M60 60 C62 46, 76 24, 82 24 C90 24, 96 34, 94 42 C92 50, 84 58, 60 60 Z"
          fill="url(#hc-top-g)"
        />
        <path
          d="M60 60 C60 50, 60 36, 60 26"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        <ellipse cx="52" cy="38" rx="8" ry="10" fill="url(#hc-hi-tl)" />
        <ellipse cx="68" cy="38" rx="8" ry="10" fill="url(#hc-hi-tr)" />

        <path
          d="M60 60 C74 58, 96 44, 96 38 C96 30, 86 24, 78 26 C70 28, 62 36, 60 60 Z"
          fill="url(#hc-right-g)"
        />
        <path
          d="M60 60 C74 62, 96 76, 96 82 C96 90, 86 96, 78 94 C70 92, 62 84, 60 60 Z"
          fill="url(#hc-right-g)"
        />
        <path
          d="M60 60 C70 60, 84 60, 94 60"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />

        <path
          d="M60 60 C62 74, 76 96, 82 96 C90 96, 96 86, 94 78 C92 70, 84 62, 60 60 Z"
          fill="url(#hc-bottom-g)"
        />
        <path
          d="M60 60 C58 74, 44 96, 38 96 C30 96, 24 86, 26 78 C28 70, 36 62, 60 60 Z"
          fill="url(#hc-bottom-g)"
        />
        <path
          d="M60 60 C60 70, 60 84, 60 94"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />

        <path
          d="M60 60 C46 62, 24 76, 24 82 C24 90, 34 96, 42 94 C50 92, 58 84, 60 60 Z"
          fill="url(#hc-left-g)"
        />
        <path
          d="M60 60 C46 58, 24 44, 24 38 C24 30, 34 24, 42 26 C50 28, 58 36, 60 60 Z"
          fill="url(#hc-left-g)"
        />
        <path
          d="M60 60 C50 60, 36 60, 26 60"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />

        <circle cx="60" cy="60" r="6" fill="url(#hc-center-sh)" />
        <circle cx="60" cy="60" r="3.5" fill="#2D8A3E" />
        <circle cx="58.8" cy="58.2" r="1.6" fill="#B8F0BE" fillOpacity="0.5" />

        <path
          d="M60 66 C62 82, 58 104, 50 130"
          fill="none"
          stroke="url(#hc-stem-g)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M61 67 C62.5 82, 59 103, 51.5 128"
          fill="none"
          stroke="#A8E8AD"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
