"use client";

import { ThunderIcon } from "@/components/icons/thunder-icon";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ComponentProps } from "react";

export interface IdentifyCardProps extends ComponentProps<typeof motion.div> {}

export const IdentifyCard = ({ className, ...props }: IdentifyCardProps) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "bg-card border-primary/50 mx-auto w-full max-w-sm overflow-hidden border",
        "text-left",
        className,
      )}
    >
      <div className="text-foreground relative p-4">
        <h2 className="border-primary/50 text-primary mb-8 flex min-h-14 w-full items-center justify-center border py-4 text-5xl font-black tracking-wider uppercase">
          Warning
        </h2>

        <div className="border-primary/50 mb-6 border-b pb-3">
          <p className="text-primary mb-1 text-sm font-medium tracking-wide opacity-70">
            IDENTITY
          </p>
          <h2 className="font-title text-primary text-xl font-medium">
            Duong Duc Trong
          </h2>
        </div>

        <div className="border-primary/50 mb-6 border-b pb-3">
          <p className="text-primary mb-1 text-sm font-medium tracking-wide opacity-70">
            CURRENT POSITION
          </p>
          <h3 className="font-title text-primary text-xl font-medium">
            Software Engineer
          </h3>
        </div>

        <div className="border-primary/50 mb-6 border-b pb-3">
          <p className="text-primary mb-1 text-sm font-medium tracking-wide opacity-70">
            FOCUS
          </p>
          <h3 className="font-title text-primary text-xl font-medium">
            React & Next.js Expert
          </h3>
        </div>

        <div className="border-primary/50 border-b pb-3">
          <p className="text-primary mb-1 text-sm font-medium tracking-wide opacity-70">
            LOCATION
          </p>
          <h3 className="font-title text-primary text-xl font-medium">
            Ho Chi Minh City, Vietnam
          </h3>
        </div>
      </div>

      <div className="text-foreground p-6 text-center">
        <div className="mb-10 grid place-items-center">
          <ThunderIcon className="text-primary size-24" />
        </div>

        <h2 className="font-title text-primary mb-4 text-3xl font-bold tracking-wider">
          DANGER
        </h2>

        <div className="space-y-2 text-sm font-medium">
          <p className="text-primary tracking-wide">
            HIGH VOLTAGE — 3,000,000 VOLTS
          </p>
          <p className="text-primary tracking-wide">ELECTRICAL SHOCK HAZARD</p>
        </div>

        <div className="border-primary/50 mt-6 border-t pt-4">
          <p className="text-primary font-mono text-xs tracking-wider opacity-60">
            LF-11235813-21345892-150242392
          </p>
        </div>
      </div>
    </motion.div>
  );
};
