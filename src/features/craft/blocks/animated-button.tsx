"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const AnimatedButton = () => {
  return (
    <div className="space-y-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button className="bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 text-zinc-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="size-4 mr-2" />
          </motion.div>
          Animated Button
        </Button>
      </motion.div>
    </div>
  );
};

export default AnimatedButton;
