import Container from "@/components/container";
import { motion, Variants } from "framer-motion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const MotionContainerNode = motion(Container);

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
  extends ComponentPropsWithoutRef<typeof MotionContainerNode> {}

export const MotionContainer = forwardRef<ElementRef<"div">, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <MotionContainerNode
        {...props}
        ref={ref}
        variants={container}
        initial="initial"
        animate="active"
        variant="xs"
        noPadding
      >
        {children}
      </MotionContainerNode>
    );
  }
);
MotionContainer.displayName = "Container";
