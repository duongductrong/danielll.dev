import { useId } from "react";
import { cn } from "@/lib/utils";

type BlockTone = "moss" | "sand" | "basalt";

type ModularBlockTileProps = {
  tone?: BlockTone;
  size?: number;
  className?: string;
};

const BLOCK_TONES: Record<
  BlockTone,
  {
    topStart: string;
    topEnd: string;
    midStart: string;
    midEnd: string;
    base: string;
    speck: string;
    outline: string;
    shadow: string;
  }
> = {
  moss: {
    topStart: "#A6D86A",
    topEnd: "#7EB34D",
    midStart: "#5D7F3D",
    midEnd: "#465E2F",
    base: "#2F3D2B",
    speck: "#9CCF61",
    outline: "#2C4B2A",
    shadow: "#0D120B",
  },
  sand: {
    topStart: "#E9C784",
    topEnd: "#D5A968",
    midStart: "#A17845",
    midEnd: "#7A5B35",
    base: "#4E3B24",
    speck: "#E6C285",
    outline: "#6D4F2D",
    shadow: "#1E1610",
  },
  basalt: {
    topStart: "#8B939F",
    topEnd: "#6D7480",
    midStart: "#454C57",
    midEnd: "#363C47",
    base: "#1F242D",
    speck: "#8A93A0",
    outline: "#2A303A",
    shadow: "#07090C",
  },
};

export function ModularBlockTile({
  tone = "moss",
  size = 120,
  className,
}: ModularBlockTileProps) {
  const palette = BLOCK_TONES[tone];
  const idBase = useId().replace(/:/g, "");
  const topGradientId = `${idBase}-top`;
  const sideGradientId = `${idBase}-side`;

  return (
    <svg
      viewBox="0 0 128 110"
      role="img"
      aria-label={`${tone} modular block`}
      style={{ width: size, height: Math.round(size * 0.86) }}
      className={cn("overflow-visible", className)}
    >
      <defs>
        <linearGradient id={topGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.topStart} />
          <stop offset="100%" stopColor={palette.topEnd} />
        </linearGradient>
        <linearGradient id={sideGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.midStart} />
          <stop offset="100%" stopColor={palette.midEnd} />
        </linearGradient>
      </defs>

      <ellipse
        cx="64"
        cy="98"
        rx="43"
        ry="9"
        fill={palette.shadow}
        opacity="0.38"
      />
      <path
        d="M24 32c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17v26c0 9.4-7.6 17-17 17H41c-9.4 0-17-7.6-17-17V32z"
        fill={`url(#${sideGradientId})`}
      />
      <path
        d="M24 61c0 9.4 7.6 17 17 17h46c9.4 0 17-7.6 17-17v13c0 9.4-7.6 17-17 17H41c-9.4 0-17-7.6-17-17V61z"
        fill={palette.base}
      />
      <path
        d="M24 21c0-9.4 7.6-17 17-17h46c9.4 0 17 7.6 17 17v11c0 9.4-7.6 17-17 17H41c-9.4 0-17-7.6-17-17V21z"
        fill={`url(#${topGradientId})`}
        stroke={palette.outline}
        strokeWidth="1.5"
      />
      <path
        d="M33 18c2.6-4.2 7.2-6.8 12.5-6.8h37.2c5.2 0 9.8 2.6 12.4 6.8"
        fill="none"
        stroke="#F3F9DB"
        strokeOpacity="0.3"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill={palette.speck} opacity="0.37">
        <ellipse cx="49" cy="31" rx="8" ry="4.5" />
        <ellipse cx="76" cy="25" rx="6.5" ry="3.6" />
        <ellipse cx="66" cy="39" rx="9.3" ry="5.2" />
        <ellipse cx="86" cy="35" rx="4.7" ry="2.8" />
      </g>
    </svg>
  );
}
