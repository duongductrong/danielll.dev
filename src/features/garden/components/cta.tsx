import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export interface CtaProps extends ComponentPropsWithoutRef<"section"> {}

const Cta = ({ className, ...props }: CtaProps) => {
  return (
    <section
      {...props}
      className={cn(
        "container text-center justify-center flex flex-wrap gap-4",
        "text-sm font-semibold",
        className
      )}
    >
      <div className="flex flex-col items-center w-full gap-2">
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            href="https://github.com/duongductrong"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-border"
            aria-label="Followers"
          >
            {40} Followers
          </Link>
          <Link
            href="https://github.com/duongductrong?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-border"
            aria-label="Public Repositories"
          >
            {37} Repos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
