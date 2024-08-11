import { cn } from "@/lib/utils/tailwind";
import { ComponentPropsWithoutRef } from "react";

export interface TriggerMenuButtonProps
  extends ComponentPropsWithoutRef<"div"> {}

export const TriggerMenuButton = ({
  className,
  ...props
}: TriggerMenuButtonProps) => {
  return (
    <div
      {...props}
      className={cn(
        "size-6 grid grid-cols-2 ml-auto cursor-pointer place-items-center",
        "transform hover:rotate-90 origin-center transition-all duration-300 ease-in-out z-50",
        className
      )}
    >
      <div className="size-1 rounded-full bg-foreground" />
      <div className="size-1 rounded-full bg-foreground" />
      <div className="size-1 rounded-full bg-foreground" />
      <div className="size-1 rounded-full bg-foreground" />
    </div>
  );
};
