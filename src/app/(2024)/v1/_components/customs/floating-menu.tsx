import { cn } from "@/lib/utils/tailwind";
import { ArrowRight, CircleUserRound, Laptop } from "lucide-react";

export interface FloatingMenuProps {}

const FloatingMenu = (props: FloatingMenuProps) => {
  return (
    <div
      className={cn(
        "text-background text-sm flex items-center justify-evenly px-4 gap-4",
        "fixed bottom-5 left-1/2 transform -translate-x-1/2",
        "min-w-[150px] h-[45px] bg-foreground rounded-l-full rounded-r-full"
      )}
    >
      <span className="cursor-pointer flex items-center gap-1">Home ⌘H</span>|
      <span className="cursor-pointer flex items-center gap-1">
        Showcases ⌘S
      </span>
      |
      <span className="cursor-pointer flex items-center gap-1">
        Contact ⌘C
      </span>
    </div>
  );
};

export default FloatingMenu;
