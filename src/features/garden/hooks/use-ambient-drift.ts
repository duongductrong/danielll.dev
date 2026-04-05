import { useMemo } from "react";
import type { CSSProperties } from "react";

type AmbientDriftOptions = {
  amplitude?: number;
  speed?: number;
  seed?: string;
};

type AmbientDriftResult = {
  className: string;
  style: CSSProperties;
};

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Ambient drift driven by CSS keyframes (GPU-friendly, no per-frame React updates).
 */
export function useAmbientDrift({
  amplitude = 12,
  speed = 0.0008,
  seed = "garden",
}: AmbientDriftOptions = {}): AmbientDriftResult {
  return useMemo(() => {
    const seedValue = hashSeed(seed);
    const jitter = (seedValue % 9) - 4;
    const horizontal = amplitude + jitter * 0.5;
    const vertical = amplitude * 0.5 + jitter * 0.2;
    const periodMs = Math.max(2800, Math.round((Math.PI * 2) / speed));
    const durationMs = periodMs + (seedValue % 1400);
    const delayMs = -(seedValue % durationMs);

    return {
      className: "garden-ambient-drift",
      style: {
        "--garden-drift-x": `${horizontal}px`,
        "--garden-drift-y": `${vertical}px`,
        "--garden-drift-duration": `${durationMs}ms`,
        "--garden-drift-delay": `${delayMs}ms`,
      } as CSSProperties,
    };
  }, [amplitude, speed, seed]);
}
