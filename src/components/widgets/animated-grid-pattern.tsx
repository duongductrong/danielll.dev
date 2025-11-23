"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const AnimatedGridPattern = ({
  className,
  duration = 1.2,
}: {
  className?: string;
  duration?: number;
}) => {
  const ease = "easeInOut";

  return (
    <>
      <motion.div
        initial={{
          clipPath: "inset(50% 50% 50% 50%)",
          opacity: 1,
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
        }}
        transition={{
          duration: duration,
          ease,
        }}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full",
          "[background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px)]",
          "[background-size:30px_30px] [background-position:-1px_-1px]",
          className,
        )}
      />

      <motion.div
        initial={{
          clipPath: "inset(50% 50% 50% 50%)",
          opacity: 1,
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
        }}
        transition={{
          duration: duration / 1.5,
          ease,
        }}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full",
          "[background-image:linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]",
          "[background-size:30px_30px] [background-position:-1px_-1px]",
          className,
        )}
      />
    </>
  );
};
