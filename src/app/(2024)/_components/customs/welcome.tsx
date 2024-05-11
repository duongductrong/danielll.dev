import { cn } from "@/lib/utils/tailwind";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export interface WelcomeProps extends ComponentPropsWithoutRef<"section"> {}

const Welcome = ({ className, ...props }: WelcomeProps) => {
  return (
    <section {...props} className={cn("container-base", className)}>
      <h1 className="text-2xl font-semibold flex items-center gap-2 text-purple-500 leading-normal">
        Trong Duong
        <Image
          src="/assets/grass-5.png"
          alt="Grass"
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
        />
      </h1>
      <h2 className="text-2xl font-semibold flex items-center gap-2 leading-normal">
        Frontend Engineer.
      </h2>
      <h2 className="text-2xl font-normal flex items-center gap-2 leading-tight">
        Focused on delivery software development for customer.
      </h2>
      <p className="text-lg font-light leading-relaxed text-muted-foreground">
        Connect with me for collaboration, freelance gigs, part-time job, or
        just say hi.
      </p>
    </section>
  );
};

export default Welcome;
