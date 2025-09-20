// This file is auto-generated. Do not edit manually.
// Run 'npm run generate:registry' to regenerate.

import dynamic from "next/dynamic";

// Dynamic imports for all blocks
const GlowingBorder = dynamic(() => import("./blocks/glowing-border"));
const HelloWorld = dynamic(() => import("./blocks/hello-world"));
const LoadingSpinner = dynamic(() => import("./blocks/loading-spinner"));
const VoiceChatInteraction = dynamic(() => import("./blocks/voice-chat-interaction"));

// Registry of preview components
export const registryPreviewComponents = {
  glowingBorder: GlowingBorder,
  helloWorld: HelloWorld,
  loadingSpinner: LoadingSpinner,
  voiceChatInteraction: VoiceChatInteraction,
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
        <div className="relative border-2 border-zinc-200 dark:border-zinc-700 bg-[#F5F5F5] dark:bg-[#171717] p-4 rounded-xl grid place-items-center size-16">
          <DatabaseZap className="size-6 text-zinc-500" />
        </div>
      </div>

      <h2 className="text-sm text-zinc-700 dark:text-zinc-300 mt-4 mb-0">
        Waiting for connection to database...
      </h2>
      <p className="text-xs text-zinc-500 mt-2">
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
  voiceChatInteraction: `"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const slice = 5;
const users = [
  {
    name: "Charlotte Nova",
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Liam Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emma Roberts",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Tyler Reed",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jessica Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Brown",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Julia Smith",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Peter Yang",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
];
const visibleUsers = users.slice(0, slice);
const hideUserCounted = users.length - slice;

function VoiceChatInteraction() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div layout>
      <AnimatePresence mode="wait">
        {!open && (
          <motion.div
            className={cn(
              "w-fit p-2 rounded-full border border-border",
              "flex items-center",
              "flex -space-x-2 shadow-sm bg-background"
            )}
            role="button"
            onClick={() => setOpen(!open)}
          >
            {visibleUsers.map((user) => (
              <MotionAvatar
                key={user.name}
                layoutId={\`vci-avatar-\${user.name}\`}
                className="ring-2 ring-background border-2 border-background cursor-pointer"
                layout
              >
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </MotionAvatar>
            ))}

            {hideUserCounted > 0 && (
              <MotionAvatar layout>
                <AvatarFallback>+{hideUserCounted}</AvatarFallback>
              </MotionAvatar>
            )}
          </motion.div>
        )}

        {open && (
          <motion.section className="w-[300px] min-h-[300px] rounded-2xl bg-background border border-border">
            <header className="relative text-center bg-secondary px-4 py-2 border-b border-border rounded-t-2xl">
              <span className="text-muted-foreground font-medium">
                Voice Chat
              </span>

              <button type="button" onClick={() => setOpen(false)}>
                <XIcon className="size-4 absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground cursor-pointer" />
              </button>
            </header>
            <motion.article className="bg-background grid grid-cols-4 gap-4 px-4 py-6 overflow-hidden">
              {users.map((user) => {
                return (
                  <motion.div
                    key={user.name}
                    className="flex justify-center flex-col items-center gap-2"
                  >
                    <MotionAvatar layoutId={\`vci-avatar-\${user.name}\`} layout>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </MotionAvatar>
                    <motion.p className="text-xs text-center">
                      {user.name}
                    </motion.p>
                  </motion.div>
                );
              })}
            </motion.article>
            <footer className="flex flex-col gap-2 px-4 pb-4 text-center overflow-hidden">
              <Button>Join now</Button>
              <p className="text-xs text-muted-foreground">
                Mic will be muted initially
              </p>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const MotionAvatar = motion(Avatar);

export default VoiceChatInteraction;
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
  voiceChatInteraction: {
    name: "voice-chat-interaction",
    filename: "voice-chat-interaction.tsx",
    component: "VoiceChatInteraction",
  },
};

// Export available block keys
export const availableBlocks = [
  "glowingBorder",
  "helloWorld",
  "loadingSpinner",
  "voiceChatInteraction",
] as const;

export type BlockKey = typeof availableBlocks[number];
