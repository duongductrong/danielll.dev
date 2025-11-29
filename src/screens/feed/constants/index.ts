export const FEED_PLACEHOLDER_IMAGES = [
  "https://framerusercontent.com/images/Zo6qU8I3u0QZD4xtweBVwIulYxg.gif",
  "https://framerusercontent.com/images/Kcc0gEHSpvUuf7MzY9PqwjuZ8E.png",
  "https://framerusercontent.com/images/5QmBxama3GwshCQFUwIo95jNYBA.png",
  "https://framerusercontent.com/images/lgEAUOniQ1wpOoVXuGnXaiDo.png",
  "https://framerusercontent.com/images/mDAFuGTG4NAaw665xM33zATgsNE.jpeg",
  "https://framerusercontent.com/images/hXc8j0SvEuUr2atqcwhffmpvA.gif",
  "https://framerusercontent.com/images/9BBUT8p3Fy9ooHpJo3Tkr6SgmPk.gif",
  "https://framerusercontent.com/images/RxuYZ6DQ0tRG2WGR1ZS6zbGe4.png",
  "https://framerusercontent.com/images/37jBBBXPvGP91kUbWAAFldRY.png",
  "https://framerusercontent.com/images/crW1bXk5Sg9vhL4VWU8zlH31g3U.jpg",
  "https://framerusercontent.com/images/8lhPXTQ2zSsWYxQAwDsb5otWkqw.gif",
  "https://framerusercontent.com/images/9qgyYyproWJodiGjlk9qduHcRow.png",
] as const;

export const FEED_ASPECT_RATIOS = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-[16/9]",
] as const;

export type FeedAspectRatio = (typeof FEED_ASPECT_RATIOS)[number];

