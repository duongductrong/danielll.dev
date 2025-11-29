export const MOODBOARD_IMAGES = [
  {
    id: 1,
    src: "https://cdn.dribbble.com/userupload/11906450/file/original-4552488e1e26f38d5c0f14ff3cdfcf09.jpg?resize=1504x1128&vertical=center",
    alt: "Abstract Fluid Art",
    href: "/",
  },
  {
    id: 2,
    src: "https://cdn.dribbble.com/userupload/45027551/file/b6e66789095ff07891fdcba133b3405c.jpg?resize=1504x1128&vertical=center",
    alt: "Minimal Interior",
    href: "/",
  },
  {
    id: 3,
    src: "https://cdn.dribbble.com/userupload/43653165/file/original-86d0aaf6704fbcc47336e0271728b602.png?resize=1504x1128&vertical=center",
    alt: "Texture Detail",
    href: "/",
  },
  {
    id: 4,
    src: "https://cdn.dribbble.com/userupload/43178545/file/original-9351d41c5d58e4d1225fd365f3020f0c.png?resize=1504x1128&vertical=center",
    alt: "Minimal Plant",
    href: "/",
  },
  {
    id: 5,
    src: "https://cdn.dribbble.com/userupload/18422813/file/original-7b48eea7aa3b619612a6ad5c38f2771e.png?resize=1504x1128&vertical=center",
    alt: "Abstract Shapes",
    href: "",
  },
] as const;

export type MoodboardImage = (typeof MOODBOARD_IMAGES)[number];

