"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

export interface FramerScrollSmoothyProps extends PropsWithChildren {}

const FramerScrollSmoothy = ({ children }: FramerScrollSmoothyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ smooth: 1 });

  const [clientHeight, setClientHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.getBoundingClientRect().height;

    setClientHeight(containerHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  const y = useTransform(scrollY, [0, clientHeight], [0, -clientHeight]);
  const scrollYSpring = useSpring(y, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div style={{ height: clientHeight || -1 }} className="w-full" />
      <motion.div
        ref={containerRef}
        style={{ y: scrollYSpring }}
        className="fixed left-0 top-0 min-h-screen w-full will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};

export default FramerScrollSmoothy;
