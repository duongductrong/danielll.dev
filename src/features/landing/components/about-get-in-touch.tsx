import { MotionImage } from "@/components/animates/motion-image";
import { MotionLink } from "@/components/animates/motion-link";
import { motion } from "framer-motion";
import { useRef } from "react";

export interface AboutGetInTouchProps {}

export const AboutGetInTouch = (props: AboutGetInTouchProps) => {
  const containerRef = useRef(null);

  return (
    <motion.section
      ref={containerRef}
      exit={{ opacity: 0 }}
      className="overflow-hidden bg-black text-background flex h-[80vh] items-center justify-center py-10"
    >
      <motion.div>
        <motion.h2 className="text-4xl font-gelatrial mb-8 text-center uppercase">
          Get In Touch
        </motion.h2>
        <motion.div className="flex items-center gap-2 font-geist-mono">
          <MotionLink target="_blank" href="/Duong%20Duc%20Trong%20-%20Software%20Engineer.pdf">
            Resume
          </MotionLink>
          /
          <MotionLink target="_blank" href="https://twitter.com/duongductrong_">
            Twitter
          </MotionLink>
          /
          <MotionLink target="_blank" href="https://www.linkedin.com/in/duongductrong/">
            LinkedIn
          </MotionLink>
          /
          <MotionLink target="_blank" href="https://github.com/duongductrong">
            Github
          </MotionLink>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
