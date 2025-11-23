import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface PageSectionProps extends ComponentProps<"section"> {}

export const PageSectionRoot = ({
  children,
  className,
  ...props
}: PageSectionProps) => {
  return (
    <section {...props} className={cn(className)}>
      {children}
    </section>
  );
};

export interface PageSectionHeaderProps extends ComponentProps<"header"> {}

export const PageSectionHeader = ({
  children,
  className,
  ...props
}: PageSectionHeaderProps) => {
  return (
    <header {...props} className={cn("mb-20 flex flex-col gap-6", className)}>
      {children}
    </header>
  );
};

export interface PageSectionTitleProps extends ComponentProps<"h2"> {}

export const PageSectionTitle = ({
  children,
  className,
  ...props
}: PageSectionTitleProps) => {
  return (
    <h2 {...props} className={cn("font-title text-5xl font-bold", className)}>
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
  return (
    <p {...props} className={cn("text-paragraph max-w-xl text-xl", className)}>
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
    <div {...props} className={cn("flex flex-col gap-6", className)}>
      {children}
    </div>
  );
};

export const PageSection = Object.assign(PageSectionRoot, {
  Header: PageSectionHeader,
  Title: PageSectionTitle,
  Description: PageSectionDescription,
});
