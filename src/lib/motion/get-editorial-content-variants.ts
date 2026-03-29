import type { Variants } from "motion/react";

interface EditorialContentOptions {
  delayChildren?: number;
  staggerChildren?: number;
}

interface EditorialContentVariants {
  container: Variants;
  item: Variants;
}

const reducedMotionVariants: EditorialContentVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } },
  },
  item: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } },
  },
};

export function getEditorialContentVariants(
  shouldReduceMotion: boolean | null,
  options: EditorialContentOptions = {},
): EditorialContentVariants {
  if (shouldReduceMotion) {
    return reducedMotionVariants;
  }

  const { delayChildren = 0.06, staggerChildren = 0.075 } = options;

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.36,
          ease: [0.22, 1, 0.36, 1],
          delayChildren,
          staggerChildren,
        },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.18, ease: [0.33, 1, 0.68, 1] },
      },
    },
  };
}
