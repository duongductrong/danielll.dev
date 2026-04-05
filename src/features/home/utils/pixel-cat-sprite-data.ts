/**
 * Cat sprite — pixel art lazy cat lying down, facing right.
 * Grid: 22 × 13. Faithfully traced from reference image.
 *
 * Features: large round head, prominent pointed ears with white inner
 * triangles, sleepy eyes (3px white dashes), body extending left,
 * tail with nub connected to body.
 */

import type { PixelFrame, SpriteConfig } from "./sprite-types";

const PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#1A1A2E", // body — near-black with subtle blue tint
  2: "#FFFFFF", // eyes & ear details — white
};

// ── Base frame (22 × 13) ──────────────────────────────────────────
const B: PixelFrame = [
  //0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0  1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // R0  tufts
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // R1  ear tips
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0], // R2  ears
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0], // R3  ears + white
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // R4  head top
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // R5  head
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // R6  head wider
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // R7  body + head
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0], // R8  sleepy eyes
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // R9  body
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], // R10 body narrows
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], // R11 tail → body
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // R12 tail tip + paws
];

const W = 22;
const H = 13;

function clone(f: PixelFrame): PixelFrame {
  return f.map((r) => [...r]);
}

// ── Idle (2 frames, 700ms): tail sway ─────────────────────────────
function buildIdle(): Array<PixelFrame> {
  const f1 = clone(B);
  f1[11] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  f1[12] = [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  return [B, f1];
}

// ── Blink (6 frames, 100ms): slow sleepy blink ────────────────────
function buildBlink(): Array<PixelFrame> {
  // Half-close: eyes shrink to 2px
  const half = clone(B);
  half[8] = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 0, 0, 0];
  // Fully shut
  const shut = clone(B);
  shut[8] = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
  return [B, half, shut, shut, half, B];
}

// ── Walk (4 frames, 200ms): lazy paw shuffle ──────────────────────
function buildWalk(): Array<PixelFrame> {
  const w1 = clone(B);
  w1[12] = [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const w2 = clone(B);
  w2[12] = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  return [B, w1, B, w2];
}

// ── Wave (6 frames, 140ms): tail curl upward ──────────────────────
function buildWave(): Array<PixelFrame> {
  const u1 = clone(B);
  u1[10] = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
  u1[11] = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  u1[12] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  const u2 = clone(B);
  u2[9] = [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
  u2[10] = [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
  u2[11] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  u2[12] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  const u3 = clone(B);
  u3[8] = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0];
  u3[9] = [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
  u3[10] = [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
  u3[11] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  u3[12] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  return [B, u1, u2, u3, u2, B];
}

// ── Jump (6 frames, 110ms): cat springs up ────────────────────────
function buildJump(): Array<PixelFrame> {
  const e = () => new Array(W).fill(0);

  const crouch = clone(B);
  crouch.pop();
  crouch.unshift(e());

  const air1 = clone(B);
  air1.shift();
  air1.shift();
  air1.push(e());
  air1.push(e());

  const air2 = clone(B);
  air2.shift();
  air2.push(e());

  return [B, crouch, B, air1, air2, B];
}

// ── Exported config ───────────────────────────────────────────────
export const CAT_CONFIG: SpriteConfig = {
  palette: PALETTE,
  gridWidth: W,
  gridHeight: H,
  animations: {
    idle:  { name: "idle",  frames: buildIdle(),  frameDuration: 700, loop: true },
    blink: { name: "blink", frames: buildBlink(), frameDuration: 100, loop: false },
    walk:  { name: "walk",  frames: buildWalk(),  frameDuration: 200, loop: true },
    wave:  { name: "wave",  frames: buildWave(),  frameDuration: 140, loop: false },
    jump:  { name: "jump",  frames: buildJump(),  frameDuration: 110, loop: false },
  },
};
