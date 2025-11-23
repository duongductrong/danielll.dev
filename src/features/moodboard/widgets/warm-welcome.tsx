"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ComponentProps } from "react";
import { AnimatedGridPattern } from "../components/animated-grid-pattern";
import IdentifyCard from "../components/identify-card";

export interface WarmWelcomeProps extends ComponentProps<"section"> {}

export const WarmWelcome = ({ className, ...props }: WarmWelcomeProps) => {
  return (
    <section {...props} data-slot="welcome-moodboard" className={cn(className)}>
      <div className={cn("border-border border")}>
        <div className="border-border flex min-h-14 items-center justify-center border-b px-4 py-2">
          <span className="mr-4 text-sm font-bold tracking-wide uppercase">
            NEW
          </span>
          <span className="text-sm font-medium text-white">
            Introducing Inside Thunderstorm
          </span>
          <ArrowRight className="ml-2 size-4" />
        </div>

        <div className="relative flex min-h-[600px] items-center justify-center p-4">
          <AnimatedGridPattern duration={1.2} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border-border relative min-h-[300px] w-full max-w-[800px] border"
          >
            <h2 className="font-title xs:text-6xl mt-8 mb-4 w-full text-center text-5xl leading-[1] font-bold sm:absolute sm:-top-[clamp(25%,10%,25%)] sm:mt-0 sm:text-[clamp(5rem,12.75vw,7rem)]">
              Welcome to <br /> The world
            </h2>
            <div className="text-paragraph p-6 text-center leading-relaxed sm:mt-[clamp(1rem,16vw,9rem)] sm:p-8">
              Virtual greetings to you stranger, I&apos;m Trong Duong and this
              is my personal space on the Internet. Here you can browse through
              my current projects, my past works, play with some of my
              experiments, learn more about me or read some of my essays and
              notes — your choice.
              <IdentifyCard
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-full left-1/2 hidden -translate-x-1/2 lg:block"
              />
            </div>

            <div data-slot="welcome-moodboard-card"></div>
          </motion.div>
        </div>
      </div>
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
