/* eslint-disable @next/next/no-css-tags */
import "@ant-design/v5-patch-for-react-19";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { Metadata } from "next";
import { Doto, Geist, Inter } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trong Duong - Software Engineer",
  description: "Trong Duong - Software Engineer",
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
          inter.variable,
          "bg-background",
          "antialiased",
          "font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            {/* <Lenis root> */}
            <Suspense
              fallback={
                <div className="bg-background w-full h-screen grid place-items-center">
                  <Loader2 className="size-4 text-foreground animate-spin" />
                </div>
              }
            >
              {children}
            </Suspense>
            {/* </Lenis> */}
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
