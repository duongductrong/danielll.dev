"use client";

import { MotionImage } from "@/components/animates/motion-image";
import { cn } from "@/lib/utils/tailwind";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export interface AboutHeroProps {}

export const AboutHero = (props: AboutHeroProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["50% 50%", "100% 50%"],
    smooth: 50,
  });

  const lowestY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const fastYNegative = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, 325]);
  const lowY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const toHideOpacity = useTransform(scrollYProgress, [0, 1], [1, -1]);

  const fastYSpring = useSpring(fastY, {
    damping: 10,
    stiffness: 50,
    mass: 0.5,
  });

  return (
    <motion.section
      ref={containerRef}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 justify-center items-center h-[80vh] w-full"
    >
      <motion.div className="flex items-center flex-col lg:flex-row gap-4 mb-4">
        <motion.h2
          style={{ y: lowestY, opacity: toHideOpacity }}
          className="text-7xl md:text-[5vw] leading-tight xs:leading-normal font-gelatrial text-center overflow-hidden"
        >
          Trong
        </motion.h2>
        <MotionImage
          transition={{ duration: 0.25 }}
          style={{ y: fastYSpring }}
          src="/assets/peeps-avatar-alpha-transparent.png"
          width={550}
          height={550}
          className={cn(
            "h-[46vw] w-[35vw] max-w-[270px] max-h-[350px]",
            "object-cover rounded-md cursor-pointer rounded-full grayscale",
            "border border-foreground/10 bg-foreground pointer-events-none z-40"
            // "will-change-transform transition-all duration-75"
          )}
          alt="Avatar"
          placeholder="blur"
          blurDataURL="/assets/peeps-avatar-alpha-transparent.png"
        />
        <motion.h2
          style={{ y: lowY, opacity: toHideOpacity }}
          className="text-7xl md:text-[5vw] leading-tight xs:leading-normal font-gelatrial text-center overflow-hidden"
        >
          Duong
        </motion.h2>
      </motion.div>
      <motion.p
        style={{ y: fastYNegative, opacity: toHideOpacity }}
        className="max-w-[600px] text-center text-base font-gelatrial"
      >
        / Daniel / Developer /
      </motion.p>
    </motion.section>
  );
};
