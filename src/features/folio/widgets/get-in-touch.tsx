import { cn } from "@/lib/utils";
import { Slash } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export interface GetInTouchProps extends ComponentPropsWithoutRef<"section"> {}

const GetInTouch = ({ className, ...props }: GetInTouchProps) => {
  return (
    <section {...props} className={cn("container flex flex-col", className)}>
      <p className="font-semibold leading-normal mb-1">Get in touch.</p>
      <div className="flex items-center justify-start flex-wrap gap-3 [&>*]:shrink-0 [&>*]:text-muted-foreground">
        <Link href="https://codestus.com" target="_blank">
          Blog
        </Link>
        <Slash className="size-2" />
        <Link
          href="/assets/documents/Frontend%20Developer%20-%20Duong%20Duc%20Trong%20-%202000.pdf"
          target="_blank"
        >
          Resume
        </Link>
        <Slash className="size-2" />
        <Link href="https://github.com/duongductrong" target="_blank">
          Github
        </Link>
        <Slash className="size-2" />
        <Link href="https://www.linkedin.com/in/duongductrong" target="_blank">
          LinkedIn
        </Link>
        <Slash className="size-2" />
        <Link href="https://twitter.com/duongductrong_" target="_blank">
          Twitter
        </Link>
        <Slash className="size-2" />
        <Link href="https://www.instagram.com/_duongductrong/" target="_blank">
          Instagram
        </Link>
      </div>
      {/* <div className="flex flex-wrap gap-3">
        <Link
          
          href="https://read.cv/trongduong"
          target="_blank"
          
        >
          Read.cv
        </Link>

        <Link
          
          href="/Duong Duc Trong - Software Engineer.pdf"
          target="_blank"
          
        >
          CV (PDF)
        </Link>

        <Link
          
          href="https://www.linkedin.com/in/duongductrong"
          target="_blank"
          
        >
          LinkedIn
        </Link>

        <Link
          
          href="https://twitter.com/duongductrong_"
          target="_blank"
          
        >
          X (Twitter)
        </Link>

        <Link
          
          href="https://github.com/duongductrong"
          target="_blank"
          
        >
          Github
        </Link>

        <Link
          
          href="https://codepen.io/codeEN"
          target="_blank"
          
        >
          Codepen
        </Link>
      </div> */}
    </section>
  );
};

export default GetInTouch;
