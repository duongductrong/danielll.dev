import { useEffect, useRef, useState } from "react";
import type { PixelFrame } from "../../home/utils/sprite-types";
import type { GardenElementConfig } from "../utils/pixel-garden-elements";

/**
 * Lightweight frame-loop hook for garden elements.
 * Simpler than useSpriteAnimation — just cycles frames if loop=true.
 */
export function useGardenElementAnimation(
  config: GardenElementConfig,
): PixelFrame {
  const { frames, frameDuration, loop } = config;
  const [index, setIndex] = useState(0);
  const [isPageVisible, setIsPageVisible] = useState(() =>
    typeof document === "undefined" ? true : !document.hidden,
  );
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shouldAnimate =
    !prefersReducedMotion && frames.length > 1 && isPageVisible;

  useEffect(() => {
    if (!shouldAnimate) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= frames.length) {
          if (loop) return 0;
          clearInterval(timerRef.current);
          return prev;
        }
        return next;
      });
    }, frameDuration);

    return () => clearInterval(timerRef.current);
  }, [frameDuration, loop, shouldAnimate, frames.length]);

  // Pause on hidden tab and resume when visible again.
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
        setIsPageVisible(false);
      } else {
        setIsPageVisible(true);
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  if (prefersReducedMotion) return frames[0];
  return frames[index] ?? frames[0];
}
