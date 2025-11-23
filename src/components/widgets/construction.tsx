"use client";

import { ThunderIcon } from "@/components/icons/thunder-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface ConstructionProps extends ComponentProps<"div"> {
  title?: string;
  description?: string;
}

export const Construction = ({
  className,
  title = "Under Construction",
  description = "This section is currently in development. Please check back later.",
  ...props
}: ConstructionProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center md:p-12",
        className,
      )}
    >
      <div className="mb-6 flex size-20 items-center justify-center rounded-full">
        <ThunderIcon className="text-accent size-32" />
      </div>
      <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-[450px] text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};
