// This file is auto-generated. Do not edit manually.
// Run 'npm run generate:registry' to regenerate.

import dynamic from "next/dynamic";

// Dynamic imports for all blocks
const GlowingBorder = dynamic(() => import("./blocks/glowing-border"));
const HelloWorld = dynamic(() => import("./blocks/hello-world"));
const LoadingSpinner = dynamic(() => import("./blocks/loading-spinner"));

// Registry of preview components
export const registryPreviewComponents = {
  glowingBorder: GlowingBorder,
  helloWorld: HelloWorld,
  loadingSpinner: LoadingSpinner,
};

// Registry of source code for code viewer
export const registrySourceCode: Record<string, string> = {
  glowingBorder: `import { cn } from "@/lib/utils";
import { DatabaseZap } from "lucide-react";

function GlowingBorder() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "overflow-hidden relative p-0.5 inline-block",
          "before:absolute rounded-xl",
          "before:top-[-50%] before:left-[-50%]",
          "before:m-[-1px]",
          "before:w-full before:h-full before:bg-red-500",
          "before:[background:conic-gradient(from_10deg,transparent_20%,#4EAFFE_50%,transparent_20%)]",
          "before:animate-spin before:w-[200%] before:h-[200%]",
          "before:duration-1000"
        )}
      >
        <div className="relative border-2 border-border bg-[#F5F5F5] dark:bg-[#171717] p-4 rounded-xl grid place-items-center size-16">
          <DatabaseZap className="size-6 text-muted-foreground" />
        </div>
      </div>

      <h2 className="text-sm text-muted-foreground mt-4 mb-0">
        Waiting for connection to database...
      </h2>
      <p className="text-xs text-muted-foreground mt-2">
        This may take a few seconds...
      </p>
    </div>
  );
}

export default GlowingBorder;
`,
  helloWorld: `const HelloWorld = () => {
  return <div>Hello, world! 🌍</div>;
};

export default HelloWorld;
`,
  loadingSpinner: `"use client";

import { motion } from "motion/react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-8">
      {/* Spinning Circle */}
      <motion.div
        className="w-8 h-8 border-4 border-zinc-200 border-t-zinc-900 rounded-full dark:border-zinc-700 dark:border-t-zinc-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Bouncing Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-zinc-900 rounded-full dark:bg-zinc-100"
            animate={{ y: [-10, 0, -10] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Pulsing Circle */}
      <motion.div
        className="w-8 h-8 bg-zinc-900 rounded-full dark:bg-zinc-100"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
};

export default LoadingSpinner;
`,
};

// Export block metadata
export const registryMetadata = {
  glowingBorder: {
    name: "glowing-border",
    filename: "glowing-border.tsx",
    component: "GlowingBorder",
  },
  helloWorld: {
    name: "hello-world",
    filename: "hello-world.tsx",
    component: "HelloWorld",
  },
  loadingSpinner: {
    name: "loading-spinner",
    filename: "loading-spinner.tsx",
    component: "LoadingSpinner",
  },
};

// Export available block keys
export const availableBlocks = [
  "glowingBorder",
  "helloWorld",
  "loadingSpinner",
] as const;

export type BlockKey = typeof availableBlocks[number];
