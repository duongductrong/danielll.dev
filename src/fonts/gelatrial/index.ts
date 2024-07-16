import localFont from "next/font/local";

export const Gelatrial = localFont({
  src: [
    {
      path: "./GelaTrial-34pt.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./GelaTrial-46pt.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./GelaTrial-72pt.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gelatrial",
});
