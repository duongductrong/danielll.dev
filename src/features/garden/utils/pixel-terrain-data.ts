/**
 * Pixel terrain grid for the garden background.
 * Every cell maps to a color index in TERRAIN_PALETTE.
 *
 * Grid: 120 cols × 68 rows (each cell = PIXEL_SIZE px in the SVG).
 * The hill edge is a stepped staircase — no smooth curves.
 *
 * Includes:
 *   - Stepped hill profile (parabolic arch)
 *   - Baked-in terrain details (tiny flowers, pebbles, dirt path)
 *   - Pixel clouds in sky
 *   - Depth-based ground shading with natural variance
 */

// ── Constants ──────────────────────────────────────────────────

export const CANVAS_COLS = 120;
export const CANVAS_ROWS = 68;
export const PIXEL_SIZE = 6;

// ── Palette ────────────────────────────────────────────────────

export const TERRAIN_PALETTE: Record<number, string> = {
  // Sky
  10: "#7EC8E3", // sky top
  11: "#8FD0E6", // sky upper-mid
  12: "#A8D8EA", // sky mid
  13: "#C2E4F0", // sky lower-mid
  14: "#D4EDDA", // sky-grass transition
  // Cloud
  15: "#E8F4F8", // cloud bright
  16: "#D0E8F0", // cloud shadow
  // Hill edge
  20: "#8BC563", // lightest grass (hill crest)
  21: "#7DB860", // mid-light grass
  22: "#6AAF50", // mid grass
  // Ground
  30: "#6AAF50", // ground light
  31: "#5B9A45", // ground mid
  32: "#4A7C3F", // ground dark
  33: "#3D6B35", // ground darker
  34: "#356030", // ground darkest
  // Ground texture accents
  40: "#8BC563", // bright grass highlight
  41: "#4A7C3F", // shadow patch
  42: "#5B9A45", // mid accent
  // Dirt path / clearing
  50: "#C4A86B", // dirt light
  51: "#B09858", // dirt mid
  52: "#9A8548", // dirt dark
  53: "#8A7840", // dirt shadow
  // Tiny embedded details
  60: "#FFFFFF", // white petal (daisy center)
  61: "#FFD700", // yellow petal (flower)
  62: "#FF6B6B", // red petal (poppy)
  63: "#D0A060", // pebble light
  64: "#A08040", // pebble dark
  65: "#7A6030", // pebble shadow
};

// ── Hill profile ───────────────────────────────────────────────

function getHillRow(col: number): number {
  const t = col / (CANVAS_COLS - 1);
  const base = 42;
  const peak = 30;
  const amplitude = base - peak;
  const centered = 2 * t - 1;
  const smooth = 1 - centered * centered;
  const exactRow = base - amplitude * smooth;
  return Math.round(exactRow / 2) * 2;
}

// ── Seeded pseudo-random ───────────────────────────────────────

function seededRand(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function seededRand2(seed: number): number {
  const x = Math.sin(seed * 269.5 + 183.3) * 32145.7631;
  return x - Math.floor(x);
}

// ── Pixel cloud definitions ────────────────────────────────────

type CloudDef = { cx: number; cy: number; w: number; h: number };

const CLOUDS: Array<CloudDef> = [
  { cx: 18, cy: 6, w: 12, h: 4 },
  { cx: 55, cy: 4, w: 10, h: 3 },
  { cx: 85, cy: 8, w: 14, h: 4 },
  { cx: 38, cy: 12, w: 8, h: 3 },
  { cx: 100, cy: 5, w: 9, h: 3 },
];

function isCloud(row: number, col: number): number | null {
  for (const c of CLOUDS) {
    const dx = col - c.cx;
    const dy = row - c.cy;
    // Blocky ellipse check
    const inX = Math.abs(dx) <= c.w / 2;
    const inY = Math.abs(dy) <= c.h / 2;
    if (!inX || !inY) continue;

    // Make edges rougher for pixel feel
    const rng = seededRand(row * 997 + col * 31 + c.cx);
    const edgeDist = Math.abs(dx) / (c.w / 2) + Math.abs(dy) / (c.h / 2);
    if (edgeDist > 1.3) continue;
    if (edgeDist > 1.0 && rng > 0.5) continue;

    return dy >= c.h / 2 - 1 ? 16 : 15; // bottom = shadow, rest = bright
  }
  return null;
}

// ── Dirt path definition ───────────────────────────────────────

/**
 * Characters stand around x=42–64%, y=69–72%.
 * In grid coords: col≈50–77, row≈hillRow+depth.
 * We bake a gentle dirt clearing around that area.
 */
function isDirtPath(row: number, col: number, hillRow: number): number | null {
  const depth = row - hillRow;
  if (depth < 6 || depth > 22) return null;

  // Path center in grid coordinates
  const pathCenterCol = 65;
  const pathCenterDepth = 14;
  const pathRadiusX = 18;
  const pathRadiusY = 7;

  const dx = (col - pathCenterCol) / pathRadiusX;
  const dy = (depth - pathCenterDepth) / pathRadiusY;
  const dist = dx * dx + dy * dy;

  if (dist > 1.0) return null;

  // Roughen edges
  const rng = seededRand2(row * CANVAS_COLS + col);
  if (dist > 0.7 && rng > 0.6) return null;
  if (dist > 0.85 && rng > 0.3) return null;

  // Dirt shade varies by depth
  if (rng < 0.15) return 53; // shadow patches
  if (dist < 0.3) return 50; // light center
  if (dist < 0.6) return 51; // mid
  return 52; // outer edges darker
}

// ── Tiny terrain details ───────────────────────────────────────

function isTerrainDetail(
  row: number,
  col: number,
  hillRow: number,
): number | null {
  const depth = row - hillRow;
  if (depth < 2 || depth > 30) return null;

  const rng = seededRand(row * 1013 + col * 47 + 7777);
  const rng2 = seededRand2(row * 503 + col * 67 + 3333);

  // Avoid placing details on the dirt path
  const pathCol = 65;
  const dxPath = Math.abs(col - pathCol);
  if (dxPath < 14 && depth > 6 && depth < 22) return null;

  // Tiny white daisy petals (sparse)
  if (rng < 0.008 && depth > 4 && depth < 20) return 60;
  // Yellow flower dots
  if (rng > 0.99 && depth > 3 && depth < 18) return 61;
  // Red poppy dots (very rare)
  if (rng > 0.997 && rng2 > 0.5 && depth > 5 && depth < 16) return 62;
  // Pebbles on the ground
  if (rng2 < 0.006 && depth > 8) return 63;
  if (rng2 > 0.994 && depth > 10) return 64;

  return null;
}

// ── Grid builder ───────────────────────────────────────────────

export function buildTerrainGrid(): Array<Array<number>> {
  const grid: Array<Array<number>> = [];

  for (let r = 0; r < CANVAS_ROWS; r++) {
    const row: Array<number> = [];
    for (let c = 0; c < CANVAS_COLS; c++) {
      row.push(getCellValue(r, c));
    }
    grid.push(row);
  }

  return grid;
}

function getCellValue(row: number, col: number): number {
  const hillRow = getHillRow(col);
  const rng = seededRand(row * CANVAS_COLS + col);

  // ── Sky zone ──────────────────────────────────────────
  if (row < hillRow - 2) {
    // Check clouds first
    const cloud = isCloud(row, col);
    if (cloud !== null) return cloud;

    // Sky bands
    if (row < 8) return 10;
    if (row < 14) return 11;
    if (row < 20) return 12;
    if (row < 28) return 13;
    return 14;
  }

  // ── Hill crest (2-row transition strip) ───────────────
  if (row < hillRow) {
    return rng < 0.4 ? 20 : 21;
  }

  // ── Hill body (first few rows below crest) ────────────
  if (row < hillRow + 4) {
    return rng < 0.3 ? 20 : 22;
  }

  // ── Check terrain details ─────────────────────────────
  const detail = isTerrainDetail(row, col, hillRow);
  if (detail !== null) return detail;

  // ── Check dirt path ───────────────────────────────────
  const dirt = isDirtPath(row, col, hillRow);
  if (dirt !== null) return dirt;

  // ── Main ground ───────────────────────────────────────
  const depth = row - hillRow;

  if (depth < 12) {
    if (rng < 0.08) return 40;
    if (rng < 0.15) return 41;
    return rng < 0.5 ? 30 : 31;
  }

  if (depth < 22) {
    if (rng < 0.06) return 40;
    if (rng < 0.12) return 41;
    return rng < 0.5 ? 31 : 32;
  }

  if (rng < 0.08) return 42;
  return rng < 0.5 ? 32 : 33;
}
