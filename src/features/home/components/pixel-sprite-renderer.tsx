import { useCallback, useEffect, useRef } from "react";
import {
  GRID_HEIGHT,
  GRID_WIDTH,
  PALETTE,
} from "../utils/pixel-claude-sprite-data";
import { useSpriteAnimation } from "../hooks/use-sprite-animation";
import type { AnimationName } from "../hooks/use-sprite-animation";

type PixelSpriteRendererProps = {
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
 * Applies `crispEdges` and `pixelated` rendering for sharp pixels.
 */
export function PixelSpriteRenderer({
  animation = "idle",
  scale = 8,
  autoPlay = true,
  speed = 1,
  className,
}: PixelSpriteRendererProps) {
  const blinkTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const scheduleRandomBlink = useCallback(
    (playFn: (name: AnimationName) => void) => {
      const delay = 3000 + Math.random() * 5000; // 3-8s
      blinkTimerRef.current = setTimeout(() => {
        playFn("blink");
      }, delay);
    },
    [],
  );

  const { frame, play, currentAnim } = useSpriteAnimation({
    initial: animation,
    speed,
    autoPlay,
    onComplete: (finished) => {
      // After any non-looping animation, return to idle
      if (finished !== "idle") {
        play("idle");
      }
    },
  });

  // Schedule random blinks while idling
  useEffect(() => {
    if (currentAnim === "idle") {
      scheduleRandomBlink(play);
    }
    return () => clearTimeout(blinkTimerRef.current);
  }, [currentAnim, play, scheduleRandomBlink]);

  const pxWidth = GRID_WIDTH * scale;
  const pxHeight = GRID_HEIGHT * scale;

  // Build rect elements from current frame
  const rects: Array<React.JSX.Element> = [];
  for (let y = 0; y < GRID_HEIGHT; y++) {
    for (let x = 0; x < GRID_WIDTH; x++) {
      const value = frame[y]?.[x] ?? 0;
      if (value === 0) continue;
      const fill = PALETTE[value] ?? PALETTE[1];
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x * scale}
          y={y * scale}
          width={scale}
          height={scale}
          fill={fill}
          shapeRendering="crispEdges"
        />,
      );
    }
  }

  return (
    <div
      className={className}
      style={{ imageRendering: "pixelated" }}
    >
      <svg
        viewBox={`0 0 ${pxWidth} ${pxHeight}`}
        width={pxWidth}
        height={pxHeight}
        role="img"
        aria-label="Pixel art Claude Code mascot"
        style={{ display: "block" }}
      >
        {rects}
      </svg>
    </div>
  );
}
