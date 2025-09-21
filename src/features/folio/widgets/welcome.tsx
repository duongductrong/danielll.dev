import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface WelcomeProps extends ComponentPropsWithoutRef<"section"> {}

const Welcome = ({ className, ...props }: WelcomeProps) => {
  return (
    <section
      {...props}
      className={cn("container text-left flex flex-col items-start", className)}
    >
      <h1 className="text-lg font-bold flex items-start gap-2 leading-normal mb-2">
        Hi, I&apos;m Trong Duong
      </h1>
      <h2 className="text-base items-center leading-normal mb-2">
        <span className="text-muted-foreground">A Software Engineer at</span> <b className="font-bold">Zalopay</b>
        {/* <span className="inline-flex p-px px-2 bg-gray-100 rounded-md cursor-pointer text-sm">
          <span className="text-[#0032C2]">Zalo</span>
          <span className="text-[#04C967]">pay</span>
        </span> */}
      </h2>
      <h2 className="text-base flex items-sstart gap-2 leading-tight text-muted-foreground mb-2">
        Passionate about building software that makes a difference.
      </h2>
      <p className="text-base text-muted-foreground">
        Connect with me for collaboration, freelance gigs, part-time job, or
        just say hi.
      </p>
    </section>
  );
};

export default Welcome;
