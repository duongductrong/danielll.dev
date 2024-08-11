"use client";

import { pageContent } from "@/enums/page-content";
import { cn } from "@/lib/utils/tailwind";
import {
  motion,
  MotionStyle,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { memo, useRef } from "react";

const workSelectedLayoutVariants: Variants = {
  unpinned: {
    position: "relative",
  },
  pinned: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100dvh",
    opacity: 1,
  },
};

export interface WorkSelectedProps {}

export const WorksSelected = (props: WorkSelectedProps) => {
  const containerRef = useRef(null);
  const layoutRef = useRef(null);

  return (
    <motion.section ref={containerRef} className="min-h-[300vh]">
      <motion.div
        ref={layoutRef}
        className="sticky top-8 left-0 py-8 px-8 flex flex-col gap-8 h-full"
      >
        {pageContent.participated.map((participated, idx) => (
          <WorkSelectedItem participated={participated} index={idx} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export interface WorkSelectedItemProps {
  index: number;
  participated: (typeof pageContent.participated)[0];
}

const WorkSelectedItem = memo(
  ({ participated, index }: WorkSelectedItemProps) => {
    const itemRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: itemRef,
      offset: ["center end", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (e) => {
      console.log(e);
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
      <motion.div
        ref={itemRef}
        key={participated.id}
        initial={{ scale: 1 }}
        style={
          {
            // "--offset": `${(index + 1) * 2}rem`,
            scale: scale,
          } as MotionStyle
        }
        className={cn(
          "card sticky top-8 grid place-items-center",
          "shrink-0 h-[calc(100vh-4rem)] w-full rounded-lg",
          "p-8 transition-all duration-200",
          index % 2 === 0
            ? "bg-foreground text-background"
            : "bg-primary text-foreground"
        )}
      >
        {participated.title}
      </motion.div>
    );
  }
);
