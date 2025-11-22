import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import WelcomeIdentifyCard from "../components/welcome-identify-card";

export interface WelcomeMoodBoardProps extends ComponentProps<"section"> {}

export const WelcomeMoodBoard = ({
  className,
  ...props
}: WelcomeMoodBoardProps) => {
  return (
    <section {...props} data-slot="welcome-moodboard" className={cn(className)}>
      <div className={cn("border border-border")}>
        <div className="flex items-center justify-center px-4 py-2 min-h-14 border-b border-border">
          <span className="text-sm font-bold uppercase tracking-wide mr-4">
            NEW
          </span>
          <span className="text-white text-sm font-medium">
            Introducing Inside Thunderstorm
          </span>
          <ArrowRight className="size-4 ml-2" />
        </div>

        <div className="relative p-4 min-h-[600px] justify-center items-center flex">
          <div
            className={cn(
              "w-full h-full absolute top-0 left-0 right-0 bottom-0",
              "[background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]",
              "[background-size:30px_30px] [background-position:-1px_-1px] pointer-events-none"
            )}
          />

          <div className="bg-background w-full max-w-[800px] min-h-[300px] border border-border relative">
            <h2 className="text-[clamp(2rem,11.2vw,7rem)] font-bold font-dm-serif-display mb-4 text-center absolute -top-[25%] w-full leading-[1]">
              Welcome to <br /> The world
            </h2>
            <p className="text-paragraph leading-relaxed mt-36 p-8 text-center">
              Virtual greetings to you stranger, I&apos;m Trong Duong and this
              is my personal space on the Internet. Here you can browse through
              my current projects, my past works, play with some of my
              experiments, learn more about me or read some of my essays and
              notes — your choice.
              <WelcomeIdentifyCard className="absolute top-full left-1/2 -translate-x-1/2" />
            </p>

            <div data-slot="welcome-moodboard-card"></div>
          </div>
        </div>
      </div>
      <div className="h-12 border-b border-border flex items-center justify-between tracking-wider">
        <p className="text-xs uppercase text-paragraph">
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </p>
        <p className="text-xs uppercase text-paragraph">
          {format(new Date(), "h:mm a zzz")}
        </p>
      </div>
    </section>
  );
};
