import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const textVariants = tv(
  {
    variants: {
      variant: {
        headline: "text-headline font-headline font-bold",
        subtitle: "text-base font-headline font-medium",
        title: "text-2xl font-bold",
        body: "text-sm font-normal",
        caption: "text-xs font-normal",
      },
    },
    defaultVariants: {
      variant: "body",
    },
  },
  { twMerge: false }
);

export type TextVariants = VariantProps<typeof textVariants>;

export interface TextProps extends TextVariants {}

export const Text = forwardRef(
  ({ children, as = "p", variant, className, ...props }, ref) => {
    const Comp = as ?? "p";
    return (
      <Comp
        {...props}
        className={cn(textVariants({ variant, className }))}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
) as ForwardRefComponent<"p", TextProps>;

Text.displayName = "Text";
