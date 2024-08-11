import React, { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/tailwind";

export interface WorksHeaderProps extends ComponentPropsWithoutRef<"div"> {}

const WorksHeader = ({ className, ...props }: WorksHeaderProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-evenly font-medium mt-10",
        className
      )}
    >
      <motion.p className="uppercase text-xxs">
        Selected works <br /> I have done since 2020
      </motion.p>
      <motion.h1 className="text-7xl font-gelatrial text-center overflow-hidden">
        My works
      </motion.h1>
      <motion.p className="uppercase text-xxs">
        Selected works <br /> I have done since 2020
      </motion.p>
    </div>
  );
};

export default WorksHeader;
