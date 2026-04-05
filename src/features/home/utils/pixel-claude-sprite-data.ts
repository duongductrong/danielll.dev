/**
 * Pixel art data for Claude Code sprite.
 * Grid: 11 wide × 8 tall — compact retro space-invader aesthetic.
 * Palette: Claude Code purple→blue gradient.
 *
 * Cell values:
 *   0 = transparent
 *   1 = light lavender  (#B4A0FF) — antennae / highlights
 *   2 = white            (#FFFFFF) — eyes
 *   3 = mid purple       (#7C6CFA) — main body
 *   4 = deep indigo-blue (#4F46E5) — arms / legs
 */

export type PixelFrame = Array<Array<number>>;

export type SpriteAnimation = {
  name: string;
  frames: Array<PixelFrame>;
  frameDuration: number;
  loop: boolean;
};

export const PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#B4A0FF", // light lavender — antennae
  2: "#FFFFFF", // white — eyes
  3: "#7C6CFA", // mid purple — body
  4: "#4F46E5", // deep indigo-blue — arms / legs
};

// ── Base frame ────────────────────────────────────────────────────
const B: PixelFrame = [
  // 0 1 2 3 4 5 6 7 8 9 10
  [0,1,0,0,0,0,0,0,0,1,0], // row 0 antennae
  [0,0,3,3,3,3,3,3,3,0,0], // row 1 head
  [0,3,3,2,3,3,3,2,3,3,0], // row 2 eyes
  [0,3,3,3,3,3,3,3,3,3,0], // row 3 body
  [4,4,0,3,3,3,3,3,0,4,4], // row 4 arms + body
  [4,4,0,3,0,3,0,3,0,4,4], // row 5 arms + pattern
  [0,0,0,0,4,0,4,0,0,0,0], // row 6 legs
  [0,0,0,4,0,0,0,4,0,0,0], // row 7 feet
];

const W = 11; // grid width

function cloneFrame(f: PixelFrame): PixelFrame {
  return f.map((row) => [...row]);
}

// ── Idle (2 frames): antennae shift inward/outward ────────────────
function buildIdleFrames(): Array<PixelFrame> {
  const f1 = cloneFrame(B);
  f1[0] = [0,0,1,0,0,0,0,0,1,0,0]; // antennae move inward
  return [B, f1];
}

// ── Blink (5 frames): eyes shut briefly ───────────────────────────
function buildBlinkFrames(): Array<PixelFrame> {
  const shut = cloneFrame(B);
  shut[2] = [0,3,3,3,3,3,3,3,3,3,0]; // eyes → body color
  return [B, shut, shut, B, B];
}

// ── Walk (2-frame classic space-invader leg alternate) ─────────────
function buildWalkFrames(): Array<PixelFrame> {
  const alt = cloneFrame(B);
  alt[6] = [0,0,0,4,0,0,0,4,0,0,0]; // legs shift outward
  alt[7] = [0,0,4,0,0,0,0,0,4,0,0]; // feet spread wider
  return [B, alt, B, alt];
}

// ── Wave (6 frames): left arm raises progressively ────────────────
function buildWaveFrames(): Array<PixelFrame> {
  const up1 = cloneFrame(B);
  up1[4][0] = 0; up1[4][1] = 0;
  up1[3][0] = 4; up1[3][1] = 4;

  const up2 = cloneFrame(B);
  up2[4][0] = 0; up2[4][1] = 0;
  up2[5][0] = 0; up2[5][1] = 0;
  up2[3][0] = 4; up2[3][1] = 4;
  up2[2][0] = 4; up2[2][1] = 4;

  const up3 = cloneFrame(up2);
  up3[1][0] = 4; up3[1][1] = 4;

  return [B, up1, up2, up3, up2, B];
}

// ── Jump (6 frames): crouch → air → land ──────────────────────────
function buildJumpFrames(): Array<PixelFrame> {
  const emptyRow = () => new Array(W).fill(0);

  const crouch = cloneFrame(B);
  crouch.pop();
  crouch.unshift(emptyRow());

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
  idle:  { name: "idle",  frames: buildIdleFrames(),  frameDuration: 600, loop: true },
  blink: { name: "blink", frames: buildBlinkFrames(), frameDuration: 90,  loop: false },
  walk:  { name: "walk",  frames: buildWalkFrames(),  frameDuration: 250, loop: true },
  wave:  { name: "wave",  frames: buildWaveFrames(),  frameDuration: 140, loop: false },
  jump:  { name: "jump",  frames: buildJumpFrames(),  frameDuration: 110, loop: false },
};

export const GRID_WIDTH = W;
export const GRID_HEIGHT = 8;
