import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface WelcomeProps extends ComponentPropsWithoutRef<"section"> {}

const Welcome = ({ className, ...props }: WelcomeProps) => {
  return (
    <section
      {...props}
      className={cn(
        "container text-center flex flex-col items-center",
        className
      )}
    >
      <h1 className="text-2xl font-bold flex items-center gap-2 text-purple-500 leading-normal">
        Trong Duong
        🕶️
      </h1>
      <h2 className="text-2xl font-semibold flex items-center gap-2 leading-normal mb-2">
        Software Engineer @Spartan
      </h2>
      <h2 className="text-2xl font-normal flex items-center gap-2 leading-tight mb-2">
        Passionate about building software that makes a difference.
      </h2>
      <p className="text-lg font-light leading-relaxed text-muted-foreground">
        Connect with me for collaboration, freelance gigs, part-time job, or
        just say hi.
      </p>
    </section>
  );
};

export default Welcome;
