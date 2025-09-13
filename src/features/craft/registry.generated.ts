// This file is auto-generated. Do not edit manually.
// Run 'npm run generate:registry' to regenerate.

import dynamic from "next/dynamic";

// Dynamic imports for all blocks
const HelloWorld = dynamic(() => import("./blocks/hello-world"));
const LoadingSpinner = dynamic(() => import("./blocks/loading-spinner"));

// Registry of preview components
export const registryPreviewComponents = {
  helloWorld: HelloWorld,
  loadingSpinner: LoadingSpinner,
};

// Registry of source code for code viewer
export const registrySourceCode: Record<string, string> = {
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
  "helloWorld",
  "loadingSpinner",
] as const;

export type BlockKey = typeof availableBlocks[number];
