import { ForwardRefComponent } from "@/types/react-polymorphic";
import { forwardRef, HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const containerVariants = tv(
  {
    base: "w-full",
    variants: {
      variant: {
        default: "max-w-[1140px] mx-auto",
        xs: "max-w-[490px] mx-auto",
      },

      noPadding: {
        true: "",
        false: "px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      noPadding: false,
    },
  },
  { responsiveVariants: true }
);

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef(
  (
    {
      className,
      children,
      variant,
      noPadding,
      component: Comp = "div",
      ...props
    },
    ref
  ) => {
    return (
      <Comp
        {...props}
        ref={ref}
        className={containerVariants({ noPadding, variant, className })}
      >
        {children}
      </Comp>
    );
  }
) as ForwardRefComponent<"div", ContainerProps>;
Container.displayName = "Container";

export default Container;
