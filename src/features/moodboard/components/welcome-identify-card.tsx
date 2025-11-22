import { cn } from "@/lib/utils";
import { PlugZap } from "lucide-react";
import { ComponentProps } from "react";

export interface WelcomeIdentifyCardProps extends ComponentProps<"div"> {}

const WelcomeIdentifyCard = ({
  className,
  ...props
}: WelcomeIdentifyCardProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-sm mx-auto bg-card border border-border overflow-hidden",
        "text-left",
        className
      )}
      {...props}
    >
      <div className="relative text-foreground p-4">
        <h2 className="w-full min-h-14 border border-border flex items-center justify-center mb-8 uppercase text-5xl font-black tracking-wider py-4">
          INTRO
        </h2>

        <div className="mb-6 border-b border-border pb-3">
          <p className="text-sm font-medium opacity-70 mb-1 tracking-wide">
            IDENTITY
          </p>
          <h2 className="text-xl font-dm-serif-display font-medium">
            Duong Duc Trong
          </h2>
        </div>

        <div className="mb-6 border-b border-border pb-3">
          <p className="text-sm font-medium opacity-70 mb-1 tracking-wide">
            CURRENT POSITION
          </p>
          <h3 className="text-xl font-dm-serif-display font-medium">
            Senior Front-End Developer
          </h3>
        </div>

        <div className="mb-6 border-b border-border pb-3">
          <p className="text-sm font-medium opacity-70 mb-1 tracking-wide">
            FOCUS
          </p>
          <h3 className="text-xl font-dm-serif-display font-medium">
            React & Next.js Expert
          </h3>
        </div>

        <div className="border-b border-border pb-3">
          <p className="text-sm font-medium opacity-70 mb-1 tracking-wide">
            LOCATION
          </p>
          <h3 className="text-xl font-dm-serif-display font-medium">
            Ho Chi Minh City, Vietnam
          </h3>
        </div>
      </div>

      <div className="text-foreground p-6 text-center">
        <div className="grid place-items-center mb-10">
          <PlugZap className="size-32" />
        </div>

        <h2 className="text-3xl font-bold font-dm-serif-display mb-4 tracking-wider">
          DANGER
        </h2>

        <div className="space-y-2 text-sm font-medium">
          <p className="tracking-wide">HIGH VOLTAGE — 3,000,000 VOLTS</p>
          <p className="tracking-wide">ELECTRICAL SHOCK HAZARD</p>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs font-mono opacity-60 tracking-wider">
            LF-11235813-21345892-150242392
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeIdentifyCard;
