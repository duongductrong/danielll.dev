import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header = (props: HeaderProps) => {
  return (
    <header
      {...props}
      className={cn("flex h-12 w-full border-b border-border mb-14 sticky top-0 bg-background z-10", props.className)}
    >
      <div className="flex items-center justify-center">
        <h2 className="text-sm text-foreground font-bold">
          Trong Duong <b className="font-medium ml-3">Software Engineer</b>{" "}
        </h2>
      </div>

      <ul className="flex items-center justify-center ml-auto gap-2">
        <li className="text-sm text-foreground font-medium px-2">Work</li>
        <li className="text-sm text-foreground font-medium px-2">About</li>
        <li className="text-sm text-foreground font-medium px-2">Writing</li>
        <li className="text-sm text-foreground font-medium px-2">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
