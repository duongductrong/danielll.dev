import { cn } from "@/lib/utils";
import { Atom } from "lucide-react";
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
        <Link
          href="/craft"
          className={cn(
            "px-3 py-1 rounded-full border border-border",
            "flex items-center gap-1 ",
            "font-bold border-primary text-primary bg-primary/10"
          )}
        >
          <Atom className="size-4" />
          Visit my craft
        </Link>
      </div>
    </section>
  );
};

export default Cta;
