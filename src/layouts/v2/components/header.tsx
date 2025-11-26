import { Container } from "@/components/ui/container";
import { URLS } from "@/constants/url";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Menu from "./menu";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

const Header = (props: HeaderProps) => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <Container>
        <div
          {...props}
          className={cn(
            "border-border bg-background mb-8 flex h-12 w-full border-b sm:mb-14",
            props.className,
          )}
        >
          <div className="flex items-center justify-center">
            <Link href={URLS.HOME}>
              <h2 className="text-foreground text-sm font-bold">
                Trong Duong{" "}
                <b className="ml-3 font-medium">Software Engineer</b>{" "}
              </h2>
            </Link>
          </div>

          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
