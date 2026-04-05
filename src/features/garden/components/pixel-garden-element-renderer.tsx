import { memo, useMemo } from "react";
import { useGardenElementAnimation } from "../hooks/use-garden-element-animation";
import { GARDEN_ELEMENTS } from "../utils/pixel-garden-elements";
import type { GardenElementType } from "../utils/pixel-garden-elements";
import type { PixelFrame } from "../../home/utils/sprite-types";

type PixelGardenElementRendererProps = {
  element: GardenElementType;
  scale?: number;
  className?: string;
};

/**
 * Renders a pixel-art garden element (flower, bush, etc.) using SVG rects.
 * Supports simple frame-based animation for elements like butterflies.
 */
function PixelGardenElementRendererImpl({
  element,
  scale = 3,
  className,
}: PixelGardenElementRendererProps) {
  const config = GARDEN_ELEMENTS[element];
  if (config.frames.length <= 1) {
    return (
      <StaticGardenElementRenderer
        element={element}
        scale={scale}
        className={className}
      />
    );
  }

  return (
    <AnimatedGardenElementRenderer
      element={element}
      scale={scale}
      className={className}
    />
  );
}

type GardenElementRendererCoreProps = {
  element: GardenElementType;
  scale: number;
  className?: string;
  frame: PixelFrame;
};

function GardenElementRendererCore({
  element,
  scale,
  className,
  frame,
}: GardenElementRendererCoreProps) {
  const config = GARDEN_ELEMENTS[element];
  const { palette, gridWidth, gridHeight } = config;
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
  }, [frame, gridHeight, gridWidth, palette, scale]);

  return (
    <div className={className} style={{ imageRendering: "pixelated" }}>
      <svg
        viewBox={`0 0 ${pxWidth} ${pxHeight}`}
        width={pxWidth}
        height={pxHeight}
        role="img"
        aria-label={`Pixel art ${element}`}
        style={{ display: "block" }}
      >
        {rects}
      </svg>
    </div>
  );
}

type VariantRendererProps = {
  element: GardenElementType;
  scale: number;
  className?: string;
};

const StaticGardenElementRenderer = memo(({
  element,
  scale,
  className,
}: VariantRendererProps) => {
  const frame = GARDEN_ELEMENTS[element].frames[0] ?? [];

  return (
    <GardenElementRendererCore
      element={element}
      scale={scale}
      className={className}
      frame={frame}
    />
  );
});

const AnimatedGardenElementRenderer = memo(({
  element,
  scale,
  className,
}: VariantRendererProps) => {
  const frame = useGardenElementAnimation(GARDEN_ELEMENTS[element]);

  return (
    <GardenElementRendererCore
      element={element}
      scale={scale}
      className={className}
      frame={frame}
    />
  );
});

export const PixelGardenElementRenderer = memo(
  PixelGardenElementRendererImpl,
  (prev, next) =>
    prev.element === next.element &&
    prev.scale === next.scale &&
    prev.className === next.className,
);
