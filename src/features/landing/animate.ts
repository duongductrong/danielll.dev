import { Variants } from "motion/react";

export const pictureVariants: Variants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pictureItemVariant = (): Variants => {
  const rotate = Math.random() * 20 - Math.random() * 20;
  return {
    invisible: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: rotate,
    },
    hover: {
      scale: 1.2,
      rotate,
    },
  };
};

export const slideVariants: Variants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const slideItemVariants: Variants = {
  invisible: {
    opacity: 0,
    y: "100%",
    scale: 0.8,
    rotate: "60deg",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: "0deg",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
      restDelta: 0.001,
    },
  },
};
