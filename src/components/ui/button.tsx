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
          "text-foreground bg-accent/50 hover:bg-accent active:bg-accent/80 shadow-button",
        outline:
          "text-foreground hover:bg-accent active:bg-accent/80 shadow-button",
        ghost:
          "text-foreground hover:bg-accent active:bg-accent/80 hover:shadow-button",
      },
      size: {
        default: "",
        icon: "size-4 rounded-sm",
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
  ({ children, as = "button", variant, size, className, ...props }, ref) => {
    const Comp = as ?? "button";
    return (
      <Comp
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
) as ForwardRefComponent<"button", ButtonProps>;

Button.displayName = "button";
