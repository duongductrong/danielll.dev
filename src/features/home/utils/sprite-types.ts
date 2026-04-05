/** Shared types for pixel-art sprite data files. */

export type PixelFrame = Array<Array<number>>;

export type SpriteAnimation = {
  name: string;
  frames: Array<PixelFrame>;
  frameDuration: number;
  loop: boolean;
};

export type SpriteConfig = {
  palette: Record<number, string>;
  gridWidth: number;
  gridHeight: number;
  animations: Record<string, SpriteAnimation>;
};
