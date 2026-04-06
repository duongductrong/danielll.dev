import { memo, useEffect, useMemo, useRef } from "react";
import { PixelSpriteRenderer } from "../../home/components/pixel-sprite-renderer";
import {
  CANVAS_COLS,
  CANVAS_ROWS,
  PIXEL_SIZE,
  TERRAIN_PALETTE,
  buildTerrainGrid,
} from "../utils/pixel-terrain-data";
import { AmbientGardenElement } from "./ambient-garden-element";
import { PixelGardenElementRenderer } from "./pixel-garden-element-renderer";
import type { GardenObject } from "../utils/garden-world-config";

type PixelGardenCanvasProps = {
  objects: Array<GardenObject>;
};

/**
 * The main garden world canvas.
 * Background terrain is rasterized once on canvas to minimize DOM cost.
 * Hill edges use staircase stepping, not CSS border-radius.
 * Objects have pixel shadows to anchor them visually to the terrain.
 */
export function PixelGardenCanvas({ objects }: PixelGardenCanvasProps) {
  return (
    <div
      className="relative mx-auto w-full overflow-hidden"
      style={{
        imageRendering: "pixelated",
        aspectRatio: `${CANVAS_COLS} / ${CANVAS_ROWS}`,
      }}
    >
      {/* Terrain layer rendered once on a single canvas node */}
      <TerrainCanvas />

      {/* Garden objects positioned over the terrain */}
      <div
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      >
        {objects.map((obj) => (
          <GardenObjectRenderer key={obj.id} obj={obj} />
        ))}
      </div>
    </div>
  );
}

// ── Pixel terrain canvas ────────────────────────────────────────

const TerrainCanvas = memo(() => {
  const pxW = CANVAS_COLS * PIXEL_SIZE;
  const pxH = CANVAS_ROWS * PIXEL_SIZE;
  const grid = useMemo(() => buildTerrainGrid(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    ctx.clearRect(0, 0, pxW, pxH);
    for (let r = 0; r < CANVAS_ROWS; r++) {
      for (let c = 0; c < CANVAS_COLS; c++) {
        const v = grid[r][c];
        const color = TERRAIN_PALETTE[v];
        if (!color) continue;
        ctx.fillStyle = color;
        ctx.fillRect(c * PIXEL_SIZE, r * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      }
    }
  }, [grid, pxH, pxW]);

  return (
    <canvas
      ref={canvasRef}
      width={pxW}
      height={pxH}
      aria-hidden="true"
      className="block h-auto w-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
});

// ── Pixel shadow ────────────────────────────────────────────────

/**
 * A blocky, pixel-art shadow rendered as a small SVG beneath the object.
 * This visually anchors the object to the ground.
 * Size adapts to the object's scale.
 */
const PixelShadow = memo(
  ({
    scale,
    variant,
  }: {
    scale: number;
    variant: "sprite" | "plant" | "decoration";
  }) => {
    // Shadow dimensions based on object type
    const widthBlocks = variant === "sprite" ? 6 : variant === "plant" ? 3 : 4;
    const heightBlocks = variant === "sprite" ? 2 : 1;

    const ps = Math.max(2, Math.round(scale * 1.2)); // pixel size for shadow blocks
    const w = widthBlocks * ps;
    const h = heightBlocks * ps;

    const rects = useMemo(() => {
      const els: Array<React.JSX.Element> = [];
      for (let r = 0; r < heightBlocks; r++) {
        for (let c = 0; c < widthBlocks; c++) {
          // Roughen edges — skip some corner blocks
          const isCorner =
            (r === 0 || r === heightBlocks - 1) &&
            (c === 0 || c === widthBlocks - 1);
          if (isCorner && heightBlocks > 1) continue;

          els.push(
            <rect
              key={`${c}-${r}`}
              x={c * ps}
              y={r * ps}
              width={ps}
              height={ps}
              fill="rgba(30, 50, 20, 0.25)"
              shapeRendering="crispEdges"
            />,
          );
        }
      }
      return els;
    }, [heightBlocks, ps, widthBlocks]);

    return (
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        style={{
          display: "block",
          margin: "0 auto",
          imageRendering: "pixelated",
          transform: `translateY(-${Math.round(h * 0.3)}px)`,
        }}
      >
        {rects}
      </svg>
    );
  },
);

// ── Object dispatcher ───────────────────────────────────────────

const GardenObjectRenderer = memo(({ obj }: { obj: GardenObject }) => {
  const transform = obj.offsetY
    ? `translate(-50%, calc(-100% + ${obj.offsetY}px))`
    : "translate(-50%, -100%)";

  const style: React.CSSProperties = {
    position: "absolute",
    left: `${obj.x}%`,
    top: `${obj.y}%`,
    zIndex: obj.zIndex ?? 2,
    transform,
    pointerEvents: "none",
  };

  if (obj.type === "sprite" && obj.variant) {
    return (
      <div style={style}>
        <PixelSpriteRenderer
          variant={obj.variant}
          animation={obj.animation ?? "idle"}
          scale={obj.scale ?? 3}
        />
        <PixelShadow scale={obj.scale ?? 3} variant="sprite" />
      </div>
    );
  }

  if (obj.type === "ambient" && obj.element) {
    // No shadow for flying objects
    return (
      <div style={style}>
        <AmbientGardenElement
          idSeed={obj.id}
          element={obj.element}
          scale={obj.scale ?? 2}
        />
      </div>
    );
  }

  if (obj.element) {
    const shadowVariant = obj.type === "plant" ? "plant" : "decoration";
    return (
      <div style={style}>
        <PixelGardenElementRenderer
          element={obj.element}
          scale={obj.scale ?? 2}
        />
        <PixelShadow scale={obj.scale ?? 2} variant={shadowVariant} />
      </div>
    );
  }

  return null;
});
