/* eslint-disable react/no-unescaped-entities */
import React, { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/tailwind";

export interface WorksFooterProps extends ComponentPropsWithoutRef<"div"> {}

const WorksFooter = ({ className, ...props }: WorksFooterProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-evenly font-medium mt-10",
        className
      )}
    >
      <motion.h2 className="text-7xl font-gelatrial text-center overflow-hidden">
        That's all, folks!
      </motion.h2>
    </div>
  );
};

export default WorksFooter;
