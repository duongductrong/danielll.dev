import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const moodboardDescriptionVariants = tv({
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

export type MoodboardDescriptionVariants = VariantProps<
  typeof moodboardDescriptionVariants
>;

export interface MoodboardDescriptionProps
  extends MoodboardDescriptionVariants {}

export const MoodboardDescription = forwardRef(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(moodboardDescriptionVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  },
) as ForwardRefComponent<"div", MoodboardDescriptionProps>;

MoodboardDescription.displayName = "MoodboardDescription";

