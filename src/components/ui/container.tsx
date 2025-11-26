"use client";

import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const containerVariants = tv(
  {
    base: "",
    variants: {
      variant: {
        default: "max-w-[1248px] mx-auto px-4",
        fluid: "w-full px-4 mx-auto",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  { twMerge: false, responsiveVariants: true },
);

export interface ContainerProps
  extends VariantProps<typeof containerVariants> {}

export const Container = forwardRef(
  ({ children, variant = "default", className, ...props }, ref) => {
    const Comp = props.as ?? "div";

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(containerVariants({ variant, className }))}
      >
        {children}
      </Comp>
    );
  },
) as ForwardRefComponent<"div", ContainerProps>;
Container.displayName = "Container";
