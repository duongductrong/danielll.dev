import { Gelatrial } from "@/fonts/gelatrial";
import { cn } from "@/lib/utils/tailwind";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { LayoutPresence } from "@/components/animates/layout-presence";
import { LandingLayout } from "@/layouts/landing-layout";
import "./globals.scss";

export const metadata = {
  title: "Trong Duong - Portfolio",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        GeistMono.variable,
        GeistSans.variable,
        Gelatrial.variable,
      )}
    >
      <body className="relative">
        <LayoutPresence>
          <LandingLayout>{children}</LandingLayout>
        </LayoutPresence>
      </body>
    </html>
  );
}
