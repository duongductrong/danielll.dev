"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentPropsWithoutRef } from "react";

export interface FlashlightProps
  extends ComponentPropsWithoutRef<typeof Tabs> {}

const Flashlight = (props: FlashlightProps) => {
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

export default Flashlight;
