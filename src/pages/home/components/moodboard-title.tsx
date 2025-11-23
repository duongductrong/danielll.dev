import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const SHADOW_TEXT_COUNT = 8;

const moodboardTitleVariants = tv({
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

export type MoodboardTitleVariants = VariantProps<typeof moodboardTitleVariants>;

export interface MoodboardTitleProps extends MoodboardTitleVariants {
  children?: React.ReactNode;
  primaryText: string;
  secondaryText?: string;
  shadowCount?: number;
}

export const MoodboardTitle = forwardRef(
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
        className={cn(moodboardTitleVariants({ variant, className }))}
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
                "hidden pointer-events-none absolute left-1/2 z-0 w-full -translate-x-1/2 text-transparent sm:block",
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
) as ForwardRefComponent<"div", MoodboardTitleProps>;

MoodboardTitle.displayName = "MoodboardTitle";

