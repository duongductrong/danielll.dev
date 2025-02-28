import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const containerVariants = tv(
  {
    base: "",
    variants: {
      variant: {
        default: "mx-auto max-w-2xl px-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

export interface ContainerProps
  extends ComponentProps<"div">,
    VariantProps<typeof containerVariants> {}

const Container = ({
  children,
  variant,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div {...props} className={cn(containerVariants({ variant, className }))}>
      {children}
    </div>
  );
};

export default Container;
