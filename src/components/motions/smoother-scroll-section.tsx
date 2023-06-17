import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import {
  Fragment,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
} from "react";

export interface SmootherScrollSectionProps
  extends HTMLAttributes<HTMLDivElement> {
  asHorizontalScroll?: boolean;
  asChild?: boolean;
  enableSectionInner?: boolean;
}

const SmootherScrollSection = forwardRef<
  HTMLDivElement,
  SmootherScrollSectionProps
>(
  (
    {
      children,
      asHorizontalScroll,
      asChild,
      enableSectionInner = true,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const CompSectionInner = enableSectionInner ? "div" : Fragment;
    return (
      <Comp
        {...props}
        ref={ref}
        className={clsx(props.className, "smoother-scroll-section", {
          "!max-h-fit": asHorizontalScroll,
        })}
        data-scroll-horizontal={asHorizontalScroll ? "true" : undefined}
        data-scroll-section
      >
        <CompSectionInner
          {...(enableSectionInner ? { className: "section-inner w-full" } : {})}
        >
          {cloneElement(children as ReactElement, {
            "data-scroll-in-section": true,
          })}
        </CompSectionInner>
      </Comp>
    );
  }
);

SmootherScrollSection.displayName = "SmootherScrollSection";

export default SmootherScrollSection;
