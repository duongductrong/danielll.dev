import { Text } from "@/components/ui/text";
import { motion } from "motion/react";
import SlidingWorks from "./sliding-works";

export interface FeatureWorkProps {}

const FeatureWork = ({}: FeatureWorkProps) => {
  return (
    <motion.section className="min-h-screen flex flex-col justify-center w-full py-8">
      <div className="mb-11 flex flex-col gap-2">
        <Text
          as={motion.h2}
          variant="title"
          className="uppercase text-on-accent text-center"
        >
          Feature work
        </Text>
        <Text
          as={motion.p}
          variant="subtitle"
          className="text-center text-on-accent"
        >
          Selected works recently working and notable projects.
        </Text>
      </div>

      <SlidingWorks />
    </motion.section>
  );
};

export default FeatureWork;
