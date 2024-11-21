import { motion } from "motion/react";
import SlidingWorks from "./sliding-works";

export interface FeatureWorkProps {}

const FeatureWork = ({}: FeatureWorkProps) => {
  return (
    <motion.section className="min-h-screen flex flex-col justify-center w-full py-8">
      <div className="mb-11 flex flex-col gap-2">
        <motion.h2 className="text-title font-headline uppercase font-bold text-on-accent text-center">
          Feature work
        </motion.h2>
        <motion.p className="text-base font-headline font-medium text-center text-on-accent">
          Selected works recently working and notable projects.
        </motion.p>
      </div>

      <SlidingWorks />
    </motion.section>
  );
};

export default FeatureWork;
