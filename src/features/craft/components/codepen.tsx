"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CornerUpLeft } from "lucide-react";
import { ComponentProps } from "react";

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
      {date ? <p className="text-muted-foreground mb-3">{date}</p> : null}

      <div className="relative mb-2">
        <h2 className="text-lg font-bold">{title}</h2>

        {onBack ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={onBack}
            className="absolute top-1/2 -translate-y-1/2 -left-12 cursor-pointer rounded-full"
          >
            <CornerUpLeft className="size-4" />
          </Button>
        ) : null}
      </div>

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
        "prose text-foreground dark:prose-invert max-w-full mx-auto px-6 md:px-0",
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
