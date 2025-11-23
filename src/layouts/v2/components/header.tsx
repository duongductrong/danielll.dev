import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import Menu from "./menu";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header = (props: HeaderProps) => {
  return (
    <header
      {...props}
      className={cn(
        "border-border bg-background sticky top-0 z-10 mb-8 sm:mb-14 flex h-12 w-full border-b",
        props.className,
      )}
    >
      <div className="flex items-center justify-center">
        <h2 className="text-foreground text-sm font-bold">
          Trong Duong <b className="ml-3 font-medium">Software Engineer</b>{" "}
        </h2>
      </div>

      <Menu />
    </header>
  );
};

export default Header;
