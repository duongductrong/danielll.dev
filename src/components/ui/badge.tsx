import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;

export interface BadgeProps extends BadgeVariants {}

export const Badge = forwardRef(
  ({ className, variant, as = "div", ...props }, ref) => {
    const Comp = as ?? "div";
    return (
      <Comp
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
) as ForwardRefComponent<"div", BadgeProps>;

Badge.displayName = "Badge";
