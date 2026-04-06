/**
 * Declarative config for all objects placed in the garden.
 * Add entries here to populate the garden — no component code changes needed.
 */

import type { AnimationName } from "../../home/hooks/use-sprite-animation";
import type { SpriteVariant } from "../../home/components/pixel-sprite-renderer";
import type { GardenElementType } from "./pixel-garden-elements";

export type GardenObjectType = "sprite" | "plant" | "decoration" | "ambient";

export type GardenObject = {
  id: string;
  type: GardenObjectType;
  /** Percentage from left edge (0–100). */
  x: number;
  /** Percentage from top edge (0–100). */
  y: number;
  zIndex?: number;
  scale?: number;
  /** For sprite objects */
  variant?: SpriteVariant;
  animation?: AnimationName;
  /** For garden element objects */
  element?: GardenElementType;
  /** Optional CSS transform offset for fine-tuning. */
  offsetY?: number;
};

/**
 * Current garden world layout — v3 (final tuning).
 * Ground plane ≈ y=62. Characters at y=70-72 so they sit naturally on grass.
 * Foreground elements at y=80+ with higher zIndex to overlap characters.
 */
export const GARDEN_OBJECTS: Array<GardenObject> = [
  // ── Background bushes (far back, small) ───────────────────
  { id: "bush-far-1", type: "decoration", x: 2, y: 57, zIndex: 1, scale: 3, element: "bush" },
  { id: "bush-far-2", type: "decoration", x: 94, y: 55, zIndex: 1, scale: 3.5, element: "bush" },
  { id: "bush-far-3", type: "decoration", x: 50, y: 54, zIndex: 1, scale: 2.5, element: "bush" },

  // ── Sunflowers (tall landmark plants on sides) ────────────
  { id: "sunflower-1", type: "plant", x: 5, y: 48, zIndex: 2, scale: 3.5, element: "sunflower" },
  { id: "sunflower-2", type: "plant", x: 15, y: 50, zIndex: 2, scale: 3, element: "sunflower" },
  { id: "sunflower-3", type: "plant", x: 90, y: 46, zIndex: 2, scale: 4, element: "sunflower" },
  { id: "sunflower-4", type: "plant", x: 80, y: 52, zIndex: 2, scale: 2.5, element: "sunflower" },

  // ── Mid-ground daisies (near characters) ──────────────────
  { id: "daisy-1", type: "plant", x: 24, y: 68, zIndex: 3, scale: 3, element: "daisy" },
  { id: "daisy-2", type: "plant", x: 74, y: 66, zIndex: 3, scale: 3, element: "daisy" },
  { id: "daisy-3", type: "plant", x: 35, y: 72, zIndex: 3, scale: 2.5, element: "daisy" },

  // ── Ground details (mid) ──────────────────────────────────
  { id: "rock-1", type: "decoration", x: 68, y: 76, zIndex: 3, scale: 2.5, element: "rock" },
  { id: "mushroom-1", type: "decoration", x: 28, y: 75, zIndex: 3, scale: 2.5, element: "mushroom" },
  { id: "mushroom-2", type: "decoration", x: 92, y: 73, zIndex: 3, scale: 2, element: "mushroom" },

  // ── Characters (centered, grounded at y≈70-72) ────────────
  { id: "sword-dino", type: "sprite", x: 31, y: 72, zIndex: 4, scale: 3.2, variant: "sword-dino", animation: "idle", offsetY: 13 },
  { id: "codex", type: "sprite", x: 42, y: 70, zIndex: 4, scale: 4, variant: "codex", animation: "idle" },
  { id: "claude", type: "sprite", x: 53, y: 69, zIndex: 4, scale: 3.5, variant: "claude", animation: "idle" },
  { id: "cat", type: "sprite", x: 64, y: 72, zIndex: 4, scale: 3.5, variant: "cat", animation: "idle" },

  // ── Foreground elements (IN FRONT of characters, high zIndex) ─
  { id: "daisy-fg-1", type: "plant", x: 45, y: 82, zIndex: 6, scale: 2, element: "daisy" },
  { id: "daisy-fg-2", type: "plant", x: 58, y: 84, zIndex: 6, scale: 2.5, element: "daisy" },
  { id: "grass-fg-1", type: "decoration", x: 12, y: 80, zIndex: 6, scale: 2.5, element: "grass-tuft" },
  { id: "grass-fg-2", type: "decoration", x: 38, y: 84, zIndex: 6, scale: 2, element: "grass-tuft" },
  { id: "grass-fg-3", type: "decoration", x: 72, y: 82, zIndex: 6, scale: 2.5, element: "grass-tuft" },
  { id: "grass-fg-4", type: "decoration", x: 88, y: 86, zIndex: 6, scale: 2, element: "grass-tuft" },
  { id: "rock-fg", type: "decoration", x: 20, y: 84, zIndex: 6, scale: 2, element: "rock" },

  // ── Background grass tufts (behind characters) ────────────
  { id: "grass-bg-1", type: "decoration", x: 8, y: 70, zIndex: 2, scale: 2, element: "grass-tuft" },
  { id: "grass-bg-2", type: "decoration", x: 48, y: 64, zIndex: 2, scale: 2, element: "grass-tuft" },
  { id: "grass-bg-3", type: "decoration", x: 82, y: 66, zIndex: 2, scale: 1.5, element: "grass-tuft" },
  { id: "grass-bg-4", type: "decoration", x: 60, y: 62, zIndex: 2, scale: 1.5, element: "grass-tuft" },

  // ── Butterflies (ambient, floating in sky) ────────────────
  { id: "butterfly-1", type: "ambient", x: 28, y: 20, zIndex: 7, scale: 2.5, element: "butterfly" },
  { id: "butterfly-2", type: "ambient", x: 72, y: 14, zIndex: 7, scale: 2, element: "butterfly" },
];
