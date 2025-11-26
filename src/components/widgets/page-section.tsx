"use client";

import { cn } from "@/lib/utils";
import { ForwardRefComponent } from "@/types/react-polymorphic";
import {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { Container, ContainerProps } from "../ui/container";

export interface PageSectionProps extends ContainerProps {
  display?: "default" | "fluid";
}

export const PageSectionRoot = forwardRef(
  ({ children, className, display = "default", as = "div", ...props }, ref) => {
    return (
      <Container
        {...props}
        ref={ref}
        as={as}
        variant={display === "default" ? "default" : "fluid"}
        className={cn(
          "[&[data-display='fluid']_[data-slot='page-section-header']]:max-w-[1248px]",
          "[&[data-display='fluid']_[data-slot='page-section-header']]:mx-auto",
          "[&[data-display='fluid']_[data-slot='page-section-header']]:px-4",
          className,
        )}
        data-display={display}
        data-slot="page-section"
      >
        {children}
      </Container>
    );
  },
) as ForwardRefComponent<"div", PageSectionProps>;
PageSectionRoot.displayName = "PageSectionRoot";

type PageSectionHeaderContextType = {
  variant?: "headline" | "title";
};

const PageSectionHeaderContext = createContext<PageSectionHeaderContextType>({
  variant: "headline",
});

export interface PageSectionHeaderProps
  extends ComponentProps<"header">,
    PageSectionHeaderContextType {}

export const PageSectionHeader = ({
  children,
  variant = "headline",
  className,
  ...props
}: PageSectionHeaderProps) => {
  const value = useMemo(() => ({ variant }), [variant]);
  return (
    <PageSectionHeaderContext.Provider value={value}>
      <header
        {...props}
        className={cn(
          "mb-20 flex flex-col data-[variant=headline]:gap-6 data-[variant=title]:gap-4",
          className,
        )}
        data-slot="page-section-header"
        data-variant={variant}
      >
        {children}
      </header>
    </PageSectionHeaderContext.Provider>
  );
};

export interface PageSectionTitleProps extends ComponentProps<"h2"> {}

export const PageSectionTitle = ({
  children,
  className,
  ...props
}: PageSectionTitleProps) => {
  const { variant } = useContext(PageSectionHeaderContext);
  return (
    <h2
      {...props}
      className={cn(
        "font-title font-bold",
        "data-[variant=headline]:text-5xl",
        "data-[variant=title]:text-3xl",
        className,
      )}
      data-slot="page-section-title"
      data-variant={variant}
    >
      {children}
    </h2>
  );
};

export interface PageSectionDescriptionProps extends ComponentProps<"p"> {}

export const PageSectionDescription = ({
  children,
  className,
  ...props
}: PageSectionDescriptionProps) => {
  const { variant } = useContext(PageSectionHeaderContext);

  return (
    <p
      {...props}
      className={cn(
        "text-paragraph max-w-xl",
        "data-[variant=headline]:text-xl",
        "data-[variant=title]:text-base",
        className,
      )}
      data-slot="page-section-description"
      data-variant={variant}
    >
      {children}
    </p>
  );
};

export interface PageSectionContentProps extends ComponentProps<"div"> {}

export const PageSectionContent = ({
  children,
  className,
  ...props
}: PageSectionContentProps) => {
  return (
    <div
      {...props}
      className={cn("flex flex-col gap-6", className)}
      data-slot="page-section-content"
    >
      {children}
    </div>
  );
};

export const PageSection = Object.assign(PageSectionRoot, {
  Root: PageSectionRoot,
  Header: PageSectionHeader,
  Title: PageSectionTitle,
  Description: PageSectionDescription,
});
