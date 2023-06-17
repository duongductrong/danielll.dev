import Container from "@/components/container";
import { Slot } from "@radix-ui/react-slot";
import { useTheme } from "next-themes";
import Link from "next/link";

import { FC, HTMLAttributes } from "react";
import { ToggleTheme } from "./toggle-mode";

export interface HeaderNavItemProps extends HTMLAttributes<HTMLElement> {}

const HeaderNavItem: FC<HeaderNavItemProps> = ({ ...props }) => {
  return (
    <Slot
      {...props}
      className="font-medium dark:text-gray-50 uppercase text-sm"
    />
  );
};

export interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
  const { setTheme } = useTheme();
  return (
    <Container className="relative flex gap-4">
      <h1 className="font-bold tracking-widest text-2xl">Trong Duong.</h1>
      <div className="ml-auto flex items-center gap-6">
        <HeaderNavItem>
          <Link href="/about">About</Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <Link href="/projects">Projects</Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <Link href="/resume">Resume</Link>
        </HeaderNavItem>

        <ToggleTheme />
      </div>
    </Container>
  );
};

export default HeaderSection;
