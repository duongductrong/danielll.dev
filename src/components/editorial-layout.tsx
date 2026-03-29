import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const editorialSectionVariants = cva(
  "mx-auto w-full text-[15px] leading-[1.62] tracking-[-0.012em]",
  {
    variants: {
      width: {
        compact: "max-w-[430px] sm:max-w-[440px]",
        reading: "max-w-[568px]",
      },
    },
    defaultVariants: {
      width: "reading",
    },
  },
);

export function EditorialPage({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "bg-background text-foreground min-h-screen overflow-x-hidden",
        className,
      )}
      {...props}
    >
      <main className="mx-auto w-full max-w-[1366px] px-6 pt-16 pb-16 sm:px-8 sm:pt-16">
        {children}
      </main>
    </div>
  );
}

type EditorialSectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof editorialSectionVariants>;

export function EditorialSection({
  className,
  width,
  ...props
}: EditorialSectionProps) {
  return (
    <section
      className={cn(editorialSectionVariants({ width }), className)}
      {...props}
    />
  );
}

export function EditorialDivider({
  className,
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn("bg-foreground/12 h-px w-16", className)}
    />
  );
}
