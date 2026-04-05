/**
 * Codex sprite — compact retro space-invader, Claude Code purple→blue gradient.
 * Grid: 11 × 8.
 */

import type { PixelFrame, SpriteConfig } from "./sprite-types";

const PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#B4A0FF", // light lavender — antennae
  2: "#FFFFFF", // white — eyes
  3: "#7C6CFA", // mid purple — body
  4: "#4F46E5", // deep indigo-blue — arms / legs
};

const B: PixelFrame = [
  [0,1,0,0,0,0,0,0,0,1,0],
  [0,0,3,3,3,3,3,3,3,0,0],
  [0,3,3,2,3,3,3,2,3,3,0],
  [0,3,3,3,3,3,3,3,3,3,0],
  [4,4,0,3,3,3,3,3,0,4,4],
  [4,4,0,3,0,3,0,3,0,4,4],
  [0,0,0,0,4,0,4,0,0,0,0],
  [0,0,0,4,0,0,0,4,0,0,0],
];

const W = 11;

function clone(f: PixelFrame): PixelFrame {
  return f.map((r) => [...r]);
}

function buildIdle(): Array<PixelFrame> {
  const f1 = clone(B);
  f1[0] = [0,0,1,0,0,0,0,0,1,0,0];
  return [B, f1];
}

function buildBlink(): Array<PixelFrame> {
  const shut = clone(B);
  shut[2] = [0,3,3,3,3,3,3,3,3,3,0];
  return [B, shut, shut, B, B];
}

function buildWalk(): Array<PixelFrame> {
  const alt = clone(B);
  alt[6] = [0,0,0,4,0,0,0,4,0,0,0];
  alt[7] = [0,0,4,0,0,0,0,0,4,0,0];
  return [B, alt, B, alt];
}

function buildWave(): Array<PixelFrame> {
  const u1 = clone(B);
  u1[4][0] = 0; u1[4][1] = 0;
  u1[3][0] = 4; u1[3][1] = 4;
  const u2 = clone(B);
  u2[4][0] = 0; u2[4][1] = 0; u2[5][0] = 0; u2[5][1] = 0;
  u2[3][0] = 4; u2[3][1] = 4; u2[2][0] = 4; u2[2][1] = 4;
  const u3 = clone(u2);
  u3[1][0] = 4; u3[1][1] = 4;
  return [B, u1, u2, u3, u2, B];
}

function buildJump(): Array<PixelFrame> {
  const e = () => new Array(W).fill(0);
  const cr = clone(B); cr.pop(); cr.unshift(e());
  const a1 = clone(B); a1.shift(); a1.shift(); a1.push(e()); a1.push(e());
  const a2 = clone(B); a2.shift(); a2.push(e());
  return [B, cr, B, a1, a2, B];
}

export const CODEX_CONFIG: SpriteConfig = {
  palette: PALETTE,
  gridWidth: W,
  gridHeight: 8,
  animations: {
    idle:  { name: "idle",  frames: buildIdle(),  frameDuration: 600, loop: true },
    blink: { name: "blink", frames: buildBlink(), frameDuration: 90,  loop: false },
    walk:  { name: "walk",  frames: buildWalk(),  frameDuration: 250, loop: true },
    wave:  { name: "wave",  frames: buildWave(),  frameDuration: 140, loop: false },
    jump:  { name: "jump",  frames: buildJump(),  frameDuration: 110, loop: false },
  },
};
