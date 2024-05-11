import NextThemeProvider from "@/components/next-theme-provider";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "./_styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trong Duong",
  description: "Generated by Trong Duong",
  keywords: "Trong Duong | Personal Portfolio 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className)}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}