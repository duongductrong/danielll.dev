import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv(
  {
    base: [
      "inline-flex items-center text-xs",
      "rounded-md px-2 py-1",
      "transition-colors cursor-pointer",
    ],
    variants: {
      variant: {
        default:
          "text-foreground bg-accent/50 hover:bg-accent active:bg-accent/80 shadow-button ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  { twMerge: false }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends ButtonVariants {}

export const Button = forwardRef(
  ({ children, as = "p", variant, className, ...props }, ref) => {
    const Comp = as ?? "p";
    return (
      <Comp
        {...props}
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
) as ForwardRefComponent<"p", ButtonProps>;

Button.displayName = "button";
