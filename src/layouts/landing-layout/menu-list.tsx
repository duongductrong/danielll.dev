"use client";

import { pageNavigateItems } from "@/enums/page-content";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { memo, useRef } from "react";
import { useLandingMenu } from "./use-landing-menu";

const MotionLink = motion(Link);

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5 },
  },
};

export const LandingMenuList = () => {
  const itemRef = useRef<HTMLElement>(null);

  return (
    <motion.main
      ref={itemRef}
      // variants={variants}
      // initial="initial"
      // animate="visible"
      // exit="exit"
      className="flex flex-col gap-8 items-end"
    >
      {pageNavigateItems.map((item, index) => {
        return <LandingMenuItem key={item.id} item={item} index={index} />;
      })}
    </motion.main>
  );
};

export interface LandingMenuItemProps {
  item: (typeof pageNavigateItems)[0];
  index: number;
}

export const LandingMenuItem = memo(({ index, item }: LandingMenuItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const { closeMenu } = useLandingMenu(({ closeMenu }) => ({ closeMenu }));

  const isInView = useInView(itemRef);

  const no = index + 1 < 10 ? `0${index + 1}` : index + 1;
  const delay = Number(`${0}.${index + 2}`);

  return (
    <motion.div ref={itemRef} className="overflow-hidden h-9">
      {isInView ? (
        <MotionLink
          href={item.path}
          className="text-3xl font-geist-mono font-bold block"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: delay },
          }}
          exit={{
            opacity: 0,
            y: 50,
            transition: { duration: 0.5, delay: delay - 0.125 },
          }}
          onClick={closeMenu}
        >
          <span className="text-base">{no}.</span> {item.label}
        </MotionLink>
      ) : null}
    </motion.div>
  );
});

LandingMenuItem.displayName = "LandingMenuItem";
