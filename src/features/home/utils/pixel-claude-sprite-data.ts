/**
 * Pixel art data for Claude Code sprite.
 * Grid: 16 wide × 12 tall. Values: 0=transparent, 1=body, 2=eye.
 */

export type PixelFrame = number[][];

export type SpriteAnimation = {
  name: string;
  frames: PixelFrame[];
  frameDuration: number;
  loop: boolean;
};

// Color palette keyed by cell value
export const PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#D47C54", // body – terracotta orange
  2: "#FFFFFF", // eyes – white
};

// ── Base frame (matches reference image) ──────────────────────────
const B: PixelFrame = [
  //0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0], // row 0  head top
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0], // row 1
  [0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0], // row 2  eyes (top)
  [0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0], // row 3  eyes (bottom)
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // row 4  arms + body
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // row 5
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0], // row 6  lower body
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0], // row 7
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0], // row 8
  [0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0], // row 9  legs gap start
  [0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0], // row10  4 legs
  [0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0], // row11  legs bottom
];

// ── Helper: deep-clone a frame ────────────────────────────────────
function cloneFrame(f: PixelFrame): PixelFrame {
  return f.map((row) => [...row]);
}

// ── Idle animation (2 frames: normal → nudge-down 1px) ───────────
function buildIdleFrames(): PixelFrame[] {
  const nudged = cloneFrame(B);
  // Shift entire grid down by 1: prepend empty row, drop last row
  const emptyRow = new Array(16).fill(0);
  nudged.pop();
  nudged.unshift(emptyRow);
  return [B, nudged];
}

// ── Blink animation (5 frames) ───────────────────────────────────
function buildBlinkFrames(): PixelFrame[] {
  const half = cloneFrame(B);
  // Top eye row → body color (half-shut)
  half[2] = [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0];

  const shut = cloneFrame(half);
  // Both eye rows → body color
  shut[3] = [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0];

  return [B, half, shut, half, B];
}

// ── Walk animation (4 frames: alternate leg positions) ────────────
function buildWalkFrames(): PixelFrame[] {
  // Frame 1: outer legs shorter
  const w1 = cloneFrame(B);
  w1[11] = [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0]; // only inner legs at bottom

  // Frame 2: base (all 4 legs same)
  const w2 = cloneFrame(B);

  // Frame 3: inner legs shorter
  const w3 = cloneFrame(B);
  w3[11] = [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0]; // only outer legs at bottom

  return [w2, w1, w2, w3];
}

// ── Wave animation (6 frames: left arm raises) ───────────────────
function buildWaveFrames(): PixelFrame[] {
  // Arm pixels are cols 0-2 on rows 4-5
  const up1 = cloneFrame(B);
  up1[4][0] = 0; up1[4][1] = 0; // remove left arm row 4
  up1[3][0] = 1; up1[3][1] = 1; // add arm one row up

  const up2 = cloneFrame(B);
  up2[4][0] = 0; up2[4][1] = 0;
  up2[5][0] = 0; up2[5][1] = 0;
  up2[3][0] = 1; up2[3][1] = 1;
  up2[2][0] = 1; up2[2][1] = 1;

  const up3 = cloneFrame(B);
  up3[4][0] = 0; up3[4][1] = 0;
  up3[5][0] = 0; up3[5][1] = 0;
  up3[3][0] = 1; up3[3][1] = 1;
  up3[2][0] = 1; up3[2][1] = 1;
  up3[1][0] = 1; up3[1][1] = 1;

  return [B, up1, up2, up3, up2, B];
}

// ── Jump animation (6 frames) ────────────────────────────────────
function buildJumpFrames(): PixelFrame[] {
  const emptyRow = () => new Array(16).fill(0);

  // Crouch: shift body down 1
  const crouch = cloneFrame(B);
  crouch.pop();
  crouch.unshift(emptyRow());

  // Air: shift body up 2
  const air1 = cloneFrame(B);
  air1.shift();
  air1.shift();
  air1.push(emptyRow());
  air1.push(emptyRow());

  const air2 = cloneFrame(B);
  air2.shift();
  air2.push(emptyRow());

  return [B, crouch, B, air1, air2, B];
}

// ── Exported animation set ────────────────────────────────────────
export const ANIMATIONS: Record<string, SpriteAnimation> = {
  idle:  { name: "idle",  frames: buildIdleFrames(),  frameDuration: 600,  loop: true },
  blink: { name: "blink", frames: buildBlinkFrames(), frameDuration: 90,   loop: false },
  walk:  { name: "walk",  frames: buildWalkFrames(),  frameDuration: 180,  loop: true },
  wave:  { name: "wave",  frames: buildWaveFrames(),  frameDuration: 140,  loop: false },
  jump:  { name: "jump",  frames: buildJumpFrames(),  frameDuration: 110,  loop: false },
};

export const GRID_WIDTH = 16;
export const GRID_HEIGHT = 12;
