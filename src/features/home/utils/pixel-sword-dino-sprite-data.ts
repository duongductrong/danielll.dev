/**
 * Sword dino sprite copied pixel-for-pixel from the 29x29 source PNG.
 */

import type { PixelFrame, SpriteConfig } from "./sprite-types";

const PALETTE: Record<number, string> = {
  0: "transparent",
  1: "#5D6C4D", // dark outline
  2: "#DEE8A3", // pale green highlight
  3: "#C9D0BF", // blade gray
  4: "#88BA33", // body green
};

const CHAR_TO_COLOR: Record<string, number> = {
  ".": 0,
  O: 1,
  H: 2,
  S: 3,
  G: 4,
};

const BASE_ART = [
  ".............................",
  ".............................",
  ".............................",
  ".............................",
  ".............................",
  "......................OOOOOO.",
  ".....................OHHHHSO.",
  "....................OHHHHSSO.",
  "...................OHHOOOSSO.",
  "..................OHHOOOOSSO.",
  ".....OOOOOOOOOOOOOHHOOOOOSSO.",
  "....OGGGGGGGGGGGOHHOOOOOSSO..",
  "...OGGGGGGGGGGGGOHOOOOOSSO...",
  "...OGGGGGGGGGGGGOOOOOOSSO....",
  "...OGGOGGGGGGGGGOOOOOSSO.....",
  "...OGGGGO.OOOOO.OOOOSSO......",
  "...OGGGGGOGGGGGOOOOSSO.......",
  "...OGGGGGGGGGGGOOOSSO........",
  "...OGGGGGHHHHHGOOOSO.........",
  "...OGOGOHHHHHHHOOOO..........",
  ".OOGGGOOHHHHHHHO.OOO.........",
  ".OGGGGGGHHHHHHHO..OO.........",
  ".OGOGGGGHHHHHHHO.............",
  "..OOGGOOOOOOOOGO.............",
  "....OO.......OO..............",
  ".............................",
  ".............................",
  ".............................",
  ".............................",
] as const;

const W = BASE_ART[0].length;
const H = BASE_ART.length;

function parseArt(rows: ReadonlyArray<string>): PixelFrame {
  return rows.map((row, rowIndex) => {
    if (row.length !== W) {
      throw new Error(`Invalid sword dino row width at row ${rowIndex}`);
    }

    return [...row].map((char, colIndex) => {
      const value = CHAR_TO_COLOR[char];
      if (value === undefined) {
        throw new Error(
          `Invalid sword dino token "${char}" at row ${rowIndex}, col ${colIndex}`,
        );
      }
      return value;
    });
  });
}

const B = parseArt(BASE_ART);

function emptyRow(): Array<number> {
  return new Array(W).fill(0);
}

function translateFrame(frame: PixelFrame, dx: number, dy: number): PixelFrame {
  const next = Array.from({ length: H }, emptyRow);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const value = frame[y]?.[x] ?? 0;
      if (value === 0) continue;

      const tx = x + dx;
      const ty = y + dy;
      if (tx < 0 || tx >= W || ty < 0 || ty >= H) continue;
      next[ty][tx] = value;
    }
  }

  return next;
}

function buildIdle(): Array<PixelFrame> {
  return [B, translateFrame(B, 0, -1), B];
}

function buildBlink(): Array<PixelFrame> {
  const crouch = translateFrame(B, 0, 1);
  return [B, crouch, crouch, B, B];
}

function buildWalk(): Array<PixelFrame> {
  const left = translateFrame(B, -1, 0);
  const right = translateFrame(B, 1, 0);
  return [left, B, right, B];
}

function buildWave(): Array<PixelFrame> {
  const lift = translateFrame(B, 0, -1);
  const high = translateFrame(B, 0, -2);
  return [B, lift, high, lift, B];
}

function buildJump(): Array<PixelFrame> {
  const crouch = translateFrame(B, 0, 1);
  const airHigh = translateFrame(B, 0, -2);
  const airMid = translateFrame(B, 0, -1);
  return [B, crouch, B, airHigh, airMid, B];
}

export const SWORD_DINO_CONFIG: SpriteConfig = {
  palette: PALETTE,
  gridWidth: W,
  gridHeight: H,
  animations: {
    idle: { name: "idle", frames: buildIdle(), frameDuration: 480, loop: true },
    blink: { name: "blink", frames: buildBlink(), frameDuration: 90, loop: false },
    walk: { name: "walk", frames: buildWalk(), frameDuration: 170, loop: true },
    wave: { name: "wave", frames: buildWave(), frameDuration: 130, loop: false },
    jump: { name: "jump", frames: buildJump(), frameDuration: 110, loop: false },
  },
};
