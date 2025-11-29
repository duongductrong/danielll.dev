"use client";

import { ThunderIcon } from "@/components/icons/thunder-icon";
import { MoodBoard } from "@/components/widgets/mood-board";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import { IdentifyCard } from "./identify-card";

export interface WarmWelcomeProps extends ComponentProps<"section"> {}

export const WarmWelcome = ({ className, ...props }: WarmWelcomeProps) => {
  return (
    <section {...props} data-slot="welcome-MoodBoard" className={cn(className)}>
      <MoodBoard>
        <MoodBoard.Header>
          <span className="mr-4 text-sm font-bold tracking-wide uppercase">
            NEW
          </span>
          <span className="text-headline text-sm font-medium text-white">
            Introducing Inside Thunderstorm
          </span>
          <ArrowRight className="ml-2 size-4" />
        </MoodBoard.Header>

        <MoodBoard.Content>
          <MoodBoard.Grid duration={1.2} />

          <div className="absolute top-9">
            <ThunderIcon className="text-accent [&_path]:fill-background size-32" />
          </div>

          <MoodBoard.Card>
            <MoodBoard.Title
              primaryText="The world"
              secondaryText="Welcome to"
              className="mt-8 mb-4 sm:absolute sm:-top-[clamp(25%,10%,25%)] sm:mt-0"
            />
            <MoodBoard.Description className="sm:mt-[clamp(1rem,16vw,9rem)]">
              Greetings, I&apos;m Trong Duong and this is my personal space on
              the Internet. Here you can browse through my current projects, my
              past works, play with some of my experiments, learn more about me
              or read some of my essays and notes — your choice.
              <IdentifyCard
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-full left-1/2 hidden -translate-x-1/2 lg:block"
              />
            </MoodBoard.Description>

            <div data-slot="welcome-MoodBoard-card"></div>
          </MoodBoard.Card>
        </MoodBoard.Content>
      </MoodBoard>

      <div className="border-border flex h-12 items-center justify-between border-b tracking-wider">
        <p className="text-paragraph text-xs uppercase">
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </p>
        <p className="text-paragraph text-xs uppercase">
          {format(
            new Date(
              new Date().toLocaleString("en-US", {
                timeZone: "Asia/Ho_Chi_Minh",
              }),
            ),
            "h:mm a 'GMT+7'",
          )}
        </p>
      </div>
    </section>
  );
};
