"use client";

import { motion } from "motion/react";

export const FeedEmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-[300px] items-center justify-center"
    >
      <p className="text-sm text-zinc-600">No posts yet.</p>
    </motion.div>
  );
};

