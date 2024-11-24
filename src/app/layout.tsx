/* eslint-disable @next/next/no-css-tags */
import { cn } from "@/lib/utils";
import { Lenis } from "lenis/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Daniel. T",
  description: "Daniel. T",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/assets/fonts/futura-now-headline/styles.css"
        />
      </head>
      <body className={cn(sans.variable, "bg-on-primary", "antialiased")}>
        <Lenis root>{children}</Lenis>
      </body>
    </html>
  );
}
