/**
 * Claude sprite — original terracotta-orange pixel critter.
 * Grid: 16 × 12.
 */

import type { PixelFrame, SpriteConfig } from "./sprite-types";

const PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#D47C54", // body — terracotta orange
  2: "#FFFFFF", // eyes — white
};

const B: PixelFrame = [
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0],
  [0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0],
];

const W = 16;
const H = 12;

function clone(f: PixelFrame): PixelFrame {
  return f.map((r) => [...r]);
}

function buildIdle(): Array<PixelFrame> {
  const nudged = clone(B);
  nudged.pop();
  nudged.unshift(new Array(W).fill(0));
  return [B, nudged];
}

function buildBlink(): Array<PixelFrame> {
  const half = clone(B);
  half[2] = [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0];
  const shut = clone(half);
  shut[3] = [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0];
  return [B, half, shut, half, B];
}

function buildWalk(): Array<PixelFrame> {
  const w1 = clone(B);
  w1[11] = [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0];
  const w3 = clone(B);
  w3[11] = [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0];
  return [B, w1, B, w3];
}

function buildWave(): Array<PixelFrame> {
  const u1 = clone(B);
  u1[4][0] = 0; u1[4][1] = 0;
  u1[3][0] = 1; u1[3][1] = 1;
  const u2 = clone(B);
  u2[4][0] = 0; u2[4][1] = 0; u2[5][0] = 0; u2[5][1] = 0;
  u2[3][0] = 1; u2[3][1] = 1; u2[2][0] = 1; u2[2][1] = 1;
  const u3 = clone(B);
  u3[4][0] = 0; u3[4][1] = 0; u3[5][0] = 0; u3[5][1] = 0;
  u3[3][0] = 1; u3[3][1] = 1; u3[2][0] = 1; u3[2][1] = 1;
  u3[1][0] = 1; u3[1][1] = 1;
  return [B, u1, u2, u3, u2, B];
}

function buildJump(): Array<PixelFrame> {
  const e = () => new Array(W).fill(0);
  const cr = clone(B); cr.pop(); cr.unshift(e());
  const a1 = clone(B); a1.shift(); a1.shift(); a1.push(e()); a1.push(e());
  const a2 = clone(B); a2.shift(); a2.push(e());
  return [B, cr, B, a1, a2, B];
}

export const CLAUDE_CONFIG: SpriteConfig = {
  palette: PALETTE,
  gridWidth: W,
  gridHeight: H,
  animations: {
    idle:  { name: "idle",  frames: buildIdle(),  frameDuration: 600, loop: true },
    blink: { name: "blink", frames: buildBlink(), frameDuration: 90,  loop: false },
    walk:  { name: "walk",  frames: buildWalk(),  frameDuration: 180, loop: true },
    wave:  { name: "wave",  frames: buildWave(),  frameDuration: 140, loop: false },
    jump:  { name: "jump",  frames: buildJump(),  frameDuration: 110, loop: false },
  },
};
