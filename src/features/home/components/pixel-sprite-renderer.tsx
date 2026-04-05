import { useCallback, useEffect, useMemo, useRef } from "react";
import { CLAUDE_CONFIG } from "../utils/pixel-claude-sprite-data";
import { CODEX_CONFIG } from "../utils/pixel-codex-sprite-data";
import { useSpriteAnimation } from "../hooks/use-sprite-animation";
import type { AnimationName } from "../hooks/use-sprite-animation";
import type { SpriteConfig } from "../utils/sprite-types";

const CONFIGS: Record<string, SpriteConfig> = {
  claude: CLAUDE_CONFIG,
  codex: CODEX_CONFIG,
};

export type SpriteVariant = "claude" | "codex";

type PixelSpriteRendererProps = {
  /** Sprite variant. @default "codex" */
  variant?: SpriteVariant;
  /** Initial animation. @default "idle" */
  animation?: AnimationName;
  /** Pixel-size multiplier. @default 8 */
  scale?: number;
  /** Auto-play animation on mount. @default true */
  autoPlay?: boolean;
  /** Playback speed multiplier. @default 1 */
  speed?: number;
  /** Extra CSS classes on wrapper. */
  className?: string;
};

/**
 * Renders a pixel-art sprite using an SVG grid of <rect> elements.
 * Supports two variants: "claude" (orange, 16×12) and "codex" (purple, 11×8).
 */
export function PixelSpriteRenderer({
  variant = "codex",
  animation = "idle",
  scale = 8,
  autoPlay = true,
  speed = 1,
  className,
}: PixelSpriteRendererProps) {
  const config = CONFIGS[variant];
  const { palette, gridWidth, gridHeight, animations } = config;

  const blinkTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const scheduleRandomBlink = useCallback(
    (playFn: (name: AnimationName) => void) => {
      const delay = 3000 + Math.random() * 5000;
      blinkTimerRef.current = setTimeout(() => playFn("blink"), delay);
    },
    [],
  );

  const { frame, play, currentAnim } = useSpriteAnimation({
    animations,
    initial: animation,
    speed,
    autoPlay,
    onComplete: (finished) => {
      if (finished !== "idle") play("idle");
    },
  });

  // Schedule random blinks while idling
  useEffect(() => {
    if (currentAnim === "idle") scheduleRandomBlink(play);
    return () => clearTimeout(blinkTimerRef.current);
  }, [currentAnim, play, scheduleRandomBlink]);

  const pxWidth = gridWidth * scale;
  const pxHeight = gridHeight * scale;

  const rects = useMemo(() => {
    const els: Array<React.JSX.Element> = [];
    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        const v = frame[y]?.[x] ?? 0;
        if (v === 0) continue;
        els.push(
          <rect
            key={`${x}-${y}`}
            x={x * scale}
            y={y * scale}
            width={scale}
            height={scale}
            fill={palette[v] ?? palette[1]}
            shapeRendering="crispEdges"
          />,
        );
      }
    }
    return els;
  }, [frame, gridWidth, gridHeight, scale, palette]);

  return (
    <div className={className} style={{ imageRendering: "pixelated" }}>
      <svg
        viewBox={`0 0 ${pxWidth} ${pxHeight}`}
        width={pxWidth}
        height={pxHeight}
        role="img"
        aria-label={`Pixel art ${variant} mascot`}
        style={{ display: "block" }}
      >
        {rects}
      </svg>
    </div>
  );
}
