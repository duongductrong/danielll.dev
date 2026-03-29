import { cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const figureVariants = cva("relative my-10 sm:my-12", {
  variants: {
    layout: {
      inline: "w-full",
      wide: "left-1/2 w-[min(calc(100vw-2rem),58rem)] -translate-x-1/2 sm:w-[min(calc(100vw-4rem),60rem)]",
      full: "left-1/2 w-[min(calc(100vw-1rem),70rem)] -translate-x-1/2 sm:w-[min(calc(100vw-4rem),72rem)]",
    },
  },
  defaultVariants: {
    layout: "wide",
  },
});

const stageVariants = cva("grid w-full place-items-center", {
  variants: {
    frame: {
      none: "",
      soft: "overflow-hidden rounded-[28px] border border-foreground/8 bg-foreground/[0.03] px-5 py-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.38)] sm:px-8 sm:py-10",
      elevated:
        "overflow-hidden rounded-[32px] border border-foreground/10 bg-background px-5 py-8 shadow-[0_32px_100px_-56px_rgba(15,23,42,0.46)] sm:px-8 sm:py-10",
      "dark-stage":
        "overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%),linear-gradient(180deg,rgba(18,18,20,0.96),rgba(8,8,10,0.94))] px-5 py-8 shadow-[0_36px_100px_-52px_rgba(0,0,0,0.65)] sm:px-8 sm:py-10",
    },
  },
  defaultVariants: {
    frame: "soft",
  },
});

export type EditorialEmbedLayout = "inline" | "wide" | "full";
export type EditorialEmbedFrame = "none" | "soft" | "elevated" | "dark-stage";

type EditorialEmbedProps = ComponentPropsWithoutRef<"figure"> & {
  children: ReactNode;
  layout?: EditorialEmbedLayout;
  frame?: EditorialEmbedFrame;
  caption?: ReactNode;
  note?: ReactNode;
  stageClassName?: string;
};

export function EditorialEmbed({
  children,
  layout = "wide",
  frame = "soft",
  caption,
  note,
  className,
  stageClassName,
  ...props
}: EditorialEmbedProps) {
  return (
    <figure
      data-editorial-embed=""
      className={cn(figureVariants({ layout }), className)}
      {...props}
    >
      <div
        data-editorial-embed-stage=""
        className={cn(stageVariants({ frame }), stageClassName)}
      >
        {children}
      </div>

      {(caption ?? note) ? (
        <figcaption className="text-foreground/52 mt-4 space-y-1 px-1 text-[12px] leading-[1.6] tracking-[-0.01em]">
          {caption ? <div>{caption}</div> : null}
          {note ? <div className="text-foreground/38">{note}</div> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
