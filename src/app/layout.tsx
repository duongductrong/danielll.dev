/* eslint-disable @next/next/no-css-tags */
import { cn } from "@/lib/utils";
import { Lenis } from "lenis/react";
import type { Metadata } from "next";
import { Doto, Geist } from "next/font/google";
// import { Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Loader2 } from "lucide-react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          sans.variable,
          doto.variable,
          "bg-background",
          "antialiased",
          "font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          forcedTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <Lenis root>
              <Suspense
                fallback={
                  <div className="bg-background w-full h-screen grid place-items-center">
                    <Loader2 className="size-4 text-foreground animate-spin" />
                  </div>
                }
              >
                {children}
              </Suspense>
            </Lenis>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
