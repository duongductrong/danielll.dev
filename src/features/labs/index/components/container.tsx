import { motion, Variants } from "framer-motion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const container: Variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const item: Variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export interface ContainerProps
  extends ComponentPropsWithoutRef<typeof motion.div> {}

export const Container = forwardRef<ElementRef<"div">, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        {...props}
        ref={ref}
        variants={container}
        initial="initial"
        animate="active"
        className="max-w-[490px]"
      >
        {children}
      </motion.div>
    );
  }
);
Container.displayName = "Container";
