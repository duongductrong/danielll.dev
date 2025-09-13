/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header = (props: HeaderProps) => {
  return (
    <header {...props} className={cn("container", props.className)}>
      <div className="relative inline-block">
        <Image
          src="https://avatars.githubusercontent.com/u/39333905?v=4"
          width={80}
          height={80}
          className="size-16 object-cover rounded-2xl"
          alt="Avatar"
        />

        <div className="bg-green-500 w-4 h-4 rounded-full absolute -bottom-1 -right-1 border-4 border-white" />
      </div>
    </header>
  );
};

export default Header;
