"use client";

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
