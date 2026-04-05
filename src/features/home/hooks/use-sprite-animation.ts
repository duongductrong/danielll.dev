import { useCallback, useEffect, useRef, useState } from "react";
import type { PixelFrame, SpriteAnimation } from "../utils/sprite-types";

export type AnimationName = "idle" | "blink" | "walk" | "wave" | "jump";

type UseSpriteAnimationOptions = {
  /** Animation lookup table — provided by the sprite config. */
  animations: Record<string, SpriteAnimation>;
  /** Starting animation. @default "idle" */
  initial?: AnimationName;
  /** Playback speed multiplier. @default 1 */
  speed?: number;
  /** Auto-play on mount. @default true */
  autoPlay?: boolean;
  /** Respect prefers-reduced-motion. @default true */
  respectReducedMotion?: boolean;
  /** Callback when a non-looping animation ends. */
  onComplete?: (name: AnimationName) => void;
};

export function useSpriteAnimation(opts: UseSpriteAnimationOptions) {
  const {
    animations,
    initial = "idle",
    speed = 1,
    autoPlay = true,
    respectReducedMotion = true,
    onComplete,
  } = opts;

  const [currentAnim, setCurrentAnim] = useState<AnimationName>(initial);
  const [frameIndex, setFrameIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);

  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const animRef = useRef<SpriteAnimation>(animations[initial]);
  const queueRef = useRef<AnimationName | null>(null);

  // Reduced-motion check
  const prefersReduced =
    respectReducedMotion &&
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Resolve current frame data
  const frame: PixelFrame =
    animRef.current.frames[frameIndex] ?? animRef.current.frames[0];

  // Switch to a different animation
  const play = useCallback(
    (name: AnimationName) => {
      const anim = animations[name];
      animRef.current = anim;
      setCurrentAnim(name);
      setFrameIndex(0);
      setPlaying(true);
    },
    [animations],
  );

  // Queue an animation to play after current one finishes
  const queueNext = useCallback((name: AnimationName) => {
    queueRef.current = name;
  }, []);

  const stop = useCallback(() => setPlaying(false), []);

  // Frame tick
  useEffect(() => {
    if (!playing || prefersReduced) return;

    const anim = animRef.current;
    const interval = anim.frameDuration / speed;

    timerRef.current = setInterval(() => {
      setFrameIndex((prev) => {
        const next = prev + 1;
        if (next >= anim.frames.length) {
          if (anim.loop) return 0;
          clearInterval(timerRef.current);
          setPlaying(false);
          onComplete?.(currentAnim);
          if (queueRef.current) {
            const q = queueRef.current;
            queueRef.current = null;
            setTimeout(() => play(q), 0);
          }
          return prev;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [playing, speed, currentAnim, prefersReduced, onComplete, play]);

  // Pause when tab hidden (Page Visibility API)
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
      } else if (playing) {
        setPlaying(false);
        setTimeout(() => setPlaying(true), 0);
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [playing]);

  return { frame, frameIndex, currentAnim, playing, play, stop, queueNext };
}
