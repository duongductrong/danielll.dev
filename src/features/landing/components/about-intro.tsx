import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface AboutIntroProps {}

export const AboutIntro = (props: AboutIntroProps) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 90%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      ref={containerRef}
      style={{ scale }}
      exit={{ opacity: 0 }}
      className="overflow-hidden flex h-[80vh] items-center justify-center py-10 px-4 md:px-0"
    >
      <motion.div>
        <motion.h2 className="text-4xl font-gelatrial mb-8 text-center uppercase">
          Who am i?
        </motion.h2>
        <motion.p className="max-w-[500px] text-xl text-center mx-auto">
          A front-end developer with a passion for creating beautiful and
          functional software applications. I love to contribute to open-source
          projects and create products that solve the pain points of users.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
