import { cn } from "@/lib/utils/tailwind";
import { motion, Variants } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

const worksHeaderVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  main: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },

  secondary: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

export interface WorksHeaderProps
  extends ComponentPropsWithoutRef<typeof motion.div> {}

const WorksHeader = ({ className, ...props }: WorksHeaderProps) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "flex items-center flex-col gap-4 lg:flex-row justify-evenly font-medium mt-10",
        className
      )}
    >
      <motion.p
        variants={worksHeaderVariants}
        initial="initial"
        animate="secondary"
        className="uppercase text-xxs"
      >
        Selected works <br /> I have done since 2020
      </motion.p>
      <motion.h1
        variants={worksHeaderVariants}
        initial="initial"
        animate="main"
        className="text-7xl font-gelatrial text-center overflow-hidden"
      >
        My works
      </motion.h1>
      <motion.p
        variants={worksHeaderVariants}
        initial="initial"
        animate="secondary"
        className="uppercase text-xxs"
      >
        Selected works <br /> I have done since 2020
      </motion.p>
    </motion.div>
  );
};

export default WorksHeader;
