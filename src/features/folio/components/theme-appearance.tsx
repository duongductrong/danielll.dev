"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { ComponentPropsWithoutRef } from "react";

export interface ThemeAppearanceProps
  extends ComponentPropsWithoutRef<typeof Tabs> {}

const ThemeAppearance = (props: ThemeAppearanceProps) => {
  const { setTheme, theme } = useTheme();
  console.log("theme", theme);
  return (
    <Tabs
      {...props}
      onValueChange={(value) => setTheme(value)}
      defaultValue={theme}
    >
      <TabsList>
        <TabsTrigger value="system">
          <Monitor className="size-4" />
        </TabsTrigger>
        <TabsTrigger value="dark">
          <Moon className="size-4" />
        </TabsTrigger>
        <TabsTrigger value="light">
          <Sun className="size-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeAppearance;
