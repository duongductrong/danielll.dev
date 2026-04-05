/**
 * Pixel-art garden environment elements.
 * Same PixelFrame grid system as character sprites.
 */

import type { PixelFrame } from "../../home/utils/sprite-types";

// ── Types ──────────────────────────────────────────────────────────

export type GardenElementType =
  | "sunflower"
  | "daisy"
  | "grass-tuft"
  | "bush"
  | "butterfly"
  | "rock"
  | "mushroom";

export type GardenElementConfig = {
  palette: Record<number, string>;
  gridWidth: number;
  gridHeight: number;
  frames: Array<PixelFrame>;
  frameDuration: number;
  loop: boolean;
};

// ── Sunflower (10 × 16) ───────────────────────────────────────────

const SUNFLOWER_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#FFD700", // petal yellow
  2: "#8B4513", // center brown
  3: "#4A7C3F", // stem green
  4: "#6AAF50", // leaf green
};

const SF_BASE: PixelFrame = [
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 2, 2, 1, 1, 1, 0],
  [0, 1, 1, 2, 2, 2, 2, 1, 1, 0],
  [1, 1, 1, 2, 2, 2, 2, 1, 1, 1],
  [1, 1, 1, 2, 2, 2, 2, 1, 1, 1],
  [0, 1, 1, 1, 2, 2, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
  [0, 0, 4, 4, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 3, 4, 4, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
];

function buildSunflowerSway(): Array<PixelFrame> {
  const f2 = SF_BASE.map((r) => [...r]);
  // Slight lean — shift top rows right by 1
  for (let i = 0; i < 3; i++) {
    f2[i] = [0, ...f2[i].slice(0, -1)];
  }
  return [SF_BASE, SF_BASE, f2, f2, SF_BASE, SF_BASE];
}

export const SUNFLOWER_CONFIG: GardenElementConfig = {
  palette: SUNFLOWER_PALETTE,
  gridWidth: 10,
  gridHeight: 16,
  frames: buildSunflowerSway(),
  frameDuration: 400,
  loop: true,
};

// ── Daisy (8 × 10) ────────────────────────────────────────────────

const DAISY_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#FFFFFF", // white petals
  2: "#FFD700", // yellow center
  3: "#4A7C3F", // stem
  4: "#6AAF50", // leaf
};

const DAISY_BASE: PixelFrame = [
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 2, 2, 1, 1, 0],
  [0, 1, 1, 2, 2, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
  [0, 0, 4, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 4, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
];

export const DAISY_CONFIG: GardenElementConfig = {
  palette: DAISY_PALETTE,
  gridWidth: 8,
  gridHeight: 10,
  frames: [DAISY_BASE],
  frameDuration: 1000,
  loop: false,
};

// ── Grass tuft (6 × 4) ────────────────────────────────────────────

const GRASS_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#6AAF50", // light green
  2: "#4A7C3F", // dark green
};

const GRASS_BASE: PixelFrame = [
  [0, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 2, 0],
  [1, 2, 1, 1, 2, 1],
  [0, 2, 2, 2, 2, 0],
];

export const GRASS_TUFT_CONFIG: GardenElementConfig = {
  palette: GRASS_PALETTE,
  gridWidth: 6,
  gridHeight: 4,
  frames: [GRASS_BASE],
  frameDuration: 1000,
  loop: false,
};

// ── Bush (12 × 8) ─────────────────────────────────────────────────

const BUSH_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#4A7C3F", // dark green
  2: "#6AAF50", // mid green
  3: "#8BC563", // light green highlight
};

const BUSH_BASE: PixelFrame = [
  [0, 0, 0, 0, 2, 3, 3, 2, 0, 0, 0, 0],
  [0, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 0],
  [0, 0, 2, 2, 3, 2, 2, 3, 2, 2, 0, 0],
  [0, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 0],
  [2, 2, 3, 2, 2, 1, 1, 2, 2, 3, 2, 2],
  [2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2],
  [0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
];

export const BUSH_CONFIG: GardenElementConfig = {
  palette: BUSH_PALETTE,
  gridWidth: 12,
  gridHeight: 8,
  frames: [BUSH_BASE],
  frameDuration: 1000,
  loop: false,
};

// ── Butterfly (8 × 6, flapping) ───────────────────────────────────

const BUTTERFLY_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#87CEEB", // wing light blue
  2: "#4A90D9", // wing darker blue
  3: "#1A1A2E", // body dark
};

const BF_OPEN: PixelFrame = [
  [1, 2, 0, 0, 0, 0, 2, 1],
  [2, 1, 2, 0, 0, 2, 1, 2],
  [1, 2, 1, 3, 3, 1, 2, 1],
  [0, 1, 2, 3, 3, 2, 1, 0],
  [0, 0, 1, 3, 3, 1, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
];

const BF_MID: PixelFrame = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 0, 0, 1, 2, 0],
  [0, 1, 2, 3, 3, 2, 1, 0],
  [0, 0, 1, 3, 3, 1, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
];

const BF_CLOSED: PixelFrame = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 3, 3, 2, 0, 0],
  [0, 0, 1, 3, 3, 1, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
];

export const BUTTERFLY_CONFIG: GardenElementConfig = {
  palette: BUTTERFLY_PALETTE,
  gridWidth: 8,
  gridHeight: 6,
  frames: [BF_OPEN, BF_OPEN, BF_MID, BF_CLOSED, BF_MID, BF_OPEN],
  frameDuration: 150,
  loop: true,
};

// ── Rock (8 × 5) ──────────────────────────────────────────────────

const ROCK_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#9E9E9E", // mid gray
  2: "#BDBDBD", // light gray highlight
  3: "#757575", // dark gray shadow
};

const ROCK_BASE: PixelFrame = [
  [0, 0, 0, 2, 2, 0, 0, 0],
  [0, 0, 2, 2, 1, 1, 0, 0],
  [0, 2, 1, 1, 1, 1, 3, 0],
  [2, 1, 1, 1, 3, 3, 3, 3],
  [0, 3, 3, 3, 3, 3, 3, 0],
];

export const ROCK_CONFIG: GardenElementConfig = {
  palette: ROCK_PALETTE,
  gridWidth: 8,
  gridHeight: 5,
  frames: [ROCK_BASE],
  frameDuration: 1000,
  loop: false,
};

// ── Mushroom (6 × 7) ──────────────────────────────────────────────

const MUSHROOM_PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#E74C3C", // red cap
  2: "#FFFFFF", // white spots & stem
  3: "#C0392B", // dark red shadow
};

const MUSHROOM_BASE: PixelFrame = [
  [0, 0, 1, 1, 0, 0],
  [0, 1, 2, 1, 1, 0],
  [1, 1, 1, 2, 1, 1],
  [1, 3, 1, 1, 3, 1],
  [0, 0, 2, 2, 0, 0],
  [0, 0, 2, 2, 0, 0],
  [0, 2, 2, 2, 2, 0],
];

export const MUSHROOM_CONFIG: GardenElementConfig = {
  palette: MUSHROOM_PALETTE,
  gridWidth: 6,
  gridHeight: 7,
  frames: [MUSHROOM_BASE],
  frameDuration: 1000,
  loop: false,
};

// ── Lookup ─────────────────────────────────────────────────────────

export const GARDEN_ELEMENTS: Record<GardenElementType, GardenElementConfig> = {
  sunflower: SUNFLOWER_CONFIG,
  daisy: DAISY_CONFIG,
  "grass-tuft": GRASS_TUFT_CONFIG,
  bush: BUSH_CONFIG,
  butterfly: BUTTERFLY_CONFIG,
  rock: ROCK_CONFIG,
  mushroom: MUSHROOM_CONFIG,
};
