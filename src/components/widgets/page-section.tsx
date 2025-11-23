"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Container } from "../ui/container";

export interface PageSectionProps extends ComponentProps<typeof Container> {
  display?: "default" | "fluid";
}

export const PageSectionRoot = ({
  children,
  className,
  display = "default",
  ...props
}: PageSectionProps) => {
  return (
    <Container
      {...props}
      as="section"
      variant={display === "default" ? "default" : "fluid"}
      className={cn(
        "[&_[data-slot='page-section-header']]:max-w-[1248px]",
        "[&_[data-slot='page-section-header']]:mx-auto",
        className,
      )}
      data-slot="page-section"
    >
      {children}
    </Container>
  );
};

export interface PageSectionHeaderProps extends ComponentProps<"header"> {}

export const PageSectionHeader = ({
  children,
  className,
  ...props
}: PageSectionHeaderProps) => {
  return (
    <header
      {...props}
      className={cn("mb-20 flex flex-col gap-6", className)}
      data-slot="page-section-header"
    >
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
    <h2
      {...props}
      className={cn("font-title text-5xl font-bold", className)}
      data-slot="page-section-title"
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
  return (
    <p
      {...props}
      className={cn("text-paragraph max-w-xl text-xl", className)}
      data-slot="page-section-description"
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
  Header: PageSectionHeader,
  Title: PageSectionTitle,
  Description: PageSectionDescription,
});
