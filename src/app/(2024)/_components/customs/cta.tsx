import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

export interface CtaProps extends ComponentPropsWithoutRef<"section"> {}

const Cta = ({ className, ...props }: CtaProps) => {
  return (
    <section
      {...props}
      className={cn("container text-center justify-center flex flex-wrap gap-4", className)}
    >
      <Button className="rounded-full">Open to work | Book a call</Button>
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
