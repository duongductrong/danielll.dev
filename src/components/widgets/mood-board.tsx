"use client";

import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { HTMLMotionProps, motion } from "motion/react";
import { ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// --- MoodBoard Root ---

export interface MoodBoardProps extends ComponentProps<"div"> {}

const MoodBoardRoot = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex min-h-[720px] items-center justify-center p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}) as ForwardRefComponent<"div", MoodBoardProps>;
MoodBoardRoot.displayName = "MoodBoard";

// --- MoodBoard Content ---

export interface MoodBoardContentProps extends HTMLMotionProps<"div"> {}

const MoodBoardContent = forwardRef<HTMLDivElement, MoodBoardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "bg-background border-border relative min-h-[300px] w-full max-w-[800px] border",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
MoodBoardContent.displayName = "MoodBoardContent";

// --- MoodBoard Title ---

const SHADOW_TEXT_COUNT = 8;

const moodBoardTitleVariants = tv({
  base: "font-title w-full text-center font-bold leading-[1] text-5xl xs:text-6xl sm:text-[clamp(5rem,12.75vw,7rem)]",
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type MoodBoardTitleVariants = VariantProps<
  typeof moodBoardTitleVariants
>;

export interface MoodBoardTitleProps extends MoodBoardTitleVariants {
  children?: React.ReactNode;
  primaryText: string;
  secondaryText?: string;
  shadowCount?: number;
}

const MoodBoardTitle = forwardRef(
  (
    {
      className,
      variant,
      primaryText,
      secondaryText,
      shadowCount = SHADOW_TEXT_COUNT,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(moodBoardTitleVariants({ variant, className }))}
        {...props}
      >
        {secondaryText && <span className="z-10">{secondaryText}</span>}
        {secondaryText && <br />}
        <span className="relative z-10">{primaryText}</span>
        {Array.from({ length: shadowCount }).map((_, index) => {
          const opacity = 40 - index * shadowCount;
          return (
            <span
              key={`shadow-text-${index}`}
              className={cn(
                "pointer-events-none absolute left-1/2 z-0 hidden w-full -translate-x-1/2 text-transparent sm:block",
                "[-webkit-text-stroke-width:1px]",
              )}
              style={{
                top: `calc(50% + ${index * shadowCount}%)`,
                WebkitTextStrokeColor: `hsl(0 0% 50% / ${opacity}%)`,
              }}
            >
              {primaryText}
            </span>
          );
        })}
      </div>
    );
  },
) as ForwardRefComponent<"div", MoodBoardTitleProps>;

MoodBoardTitle.displayName = "MoodBoardTitle";

// --- MoodBoard Description ---

const moodBoardDescriptionVariants = tv({
  base: "text-paragraph text-center leading-relaxed p-6 sm:py-8 sm:p-14",
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type MoodBoardDescriptionVariants = VariantProps<
  typeof moodBoardDescriptionVariants
>;

export interface MoodBoardDescriptionProps
  extends MoodBoardDescriptionVariants {}

const MoodBoardDescription = forwardRef(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(moodBoardDescriptionVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  },
) as ForwardRefComponent<"div", MoodBoardDescriptionProps>;

MoodBoardDescription.displayName = "MoodBoardDescription";

export const MoodBoard = Object.assign(MoodBoardRoot, {
  Content: MoodBoardContent,
  Title: MoodBoardTitle,
  Description: MoodBoardDescription,
});
