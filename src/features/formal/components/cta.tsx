import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export interface CtaProps extends ComponentPropsWithoutRef<"section"> {}

const Cta = ({ className, ...props }: CtaProps) => {
  return (
    <section
      {...props}
      className={cn(
        "container text-center justify-center flex flex-wrap gap-4",
        className
      )}
    >
      <Button className="rounded-full" as={Link} href="https://linkedin.com/in/duongductrong">
        Connect with me <ArrowRight className="size-4" />
      </Button>
      <Button
        variant="ghost"
        className="rounded-full"
        as="a"
        href="mailto:duongductrong06@gmail.com"
      >
        <Mail className="w-4 h-4 mr-2" />
        Contact me
      </Button>
    </section>
  );
};

export default Cta;
