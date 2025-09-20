"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CornerUpLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const ThemeAppearance = dynamic(
  () => import("@/features/folio/components/theme-appearance"),
  {
    ssr: false,
  }
);

export interface CodePenProps extends ComponentProps<"main"> {}

export const CodePen = ({ children, className, ...props }: CodePenProps) => {
  return (
    <main {...props} className={cn(className)}>
      {children}
    </main>
  );
};

export interface CodePenTitleProps extends ComponentProps<"div"> {
  title: string;
  summary: string;
  date?: string;

  onBack?: () => void;
}

export const CodePenTitle = ({
  title,
  summary,
  date,
  className,
  onBack,
  ...props
}: CodePenTitleProps) => {
  return (
    <div
      {...props}
      className={cn("mb-10 max-w-2xl mx-auto px-6 md:px-0", className)}
    >
      <div className="relative flex items-center mb-12">
        {onBack ? (
          <Button
            size="icon"
            variant="accent"
            onClick={onBack}
            className="cursor-pointer rounded-full group"
          >
            <CornerUpLeft className="size-4 text-muted-foreground group-hover:text-foreground" />
          </Button>
        ) : null}

        <ThemeAppearance className="ml-auto" />
      </div>

      {date ? (
        <p className="text-muted-foreground mb-1 text-xs">{date}</p>
      ) : null}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-muted-foreground">{summary}</p>
    </div>
  );
};

export const CodePenContent = ({
  children,
  className,
  ...props
}: ComponentProps<"article">) => {
  return (
    <article
      {...props}
      className={cn(
        "prose text-paragraph dark:prose-invert max-w-full mx-auto px-6 md:px-0",
        "[&_[data-slot=code-spot]_img]:m-0",
        "[&>*]:max-w-2xl [&>*]:mx-auto",
        "[&>[data-slot=code-spot]]:max-w-2xl",
        "[&>[data-slot=code-spot]]:my-10",
        className
      )}
    >
      {children}
    </article>
  );
};
