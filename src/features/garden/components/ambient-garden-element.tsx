import { useAmbientDrift } from "../hooks/use-ambient-drift";
import { PixelGardenElementRenderer } from "./pixel-garden-element-renderer";
import type { GardenElementType } from "../utils/pixel-garden-elements";

type AmbientGardenElementProps = {
  idSeed: string;
  element: GardenElementType;
  scale: number;
};

/**
 * Wraps a garden element with ambient drift animation (butterflies, etc.).
 */
export function AmbientGardenElement({
  idSeed,
  element,
  scale,
}: AmbientGardenElementProps) {
  const { className, style } = useAmbientDrift({
    amplitude: 14,
    speed: 0.0006,
    seed: idSeed,
  });

  return (
    <div className={className} style={style}>
      <PixelGardenElementRenderer element={element} scale={scale} />
    </div>
  );
}
