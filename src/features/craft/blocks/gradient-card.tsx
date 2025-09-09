"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

const GradientCard = () => {
  return (
    <div className="max-w-sm mx-auto">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-zinc-50 to-zinc-100 border-zinc-200 hover:shadow-xl transition-shadow dark:from-zinc-900 dark:to-zinc-800 dark:border-zinc-700">
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
              Gradient Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A beautiful card with gradient background and hover animations.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GradientCard;
