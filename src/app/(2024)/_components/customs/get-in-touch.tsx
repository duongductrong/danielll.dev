import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export interface GetInTouchProps extends ComponentPropsWithoutRef<"section"> {}

const GetInTouch = ({ className, ...props }: GetInTouchProps) => {
  return (
    <section {...props} className={cn("container flex flex-col items-center", className)}>
      <p className="text-xl font-semibold leading-normal mb-4">Get in touch.</p>
      <div className="flex flex-wrap gap-3">
        <Link
          className="text-base font-medium"
          href="https://read.cv/trongduong"
          target="_blank"
        >
          Read.cv
        </Link>

        <Link
          className="text-base font-medium"
          href="/Duong Duc Trong - Software Engineer.pdf"
          target="_blank"
        >
          CV (PDF)
        </Link>

        <Link
          className="text-base font-medium"
          href="https://www.linkedin.com/in/duongductrong"
          target="_blank"
        >
          LinkedIn
        </Link>

        <Link
          className="text-base font-medium"
          href="https://twitter.com/duongductrong_"
          target="_blank"
        >
          X (Twitter)
        </Link>

        <Link
          className="text-base font-medium"
          href="https://github.com/duongductrong"
          target="_blank"
        >
          Github
        </Link>

        <Link
          className="text-base font-medium"
          href="https://codepen.io/codeEN"
          target="_blank"
        >
          Codepen
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
