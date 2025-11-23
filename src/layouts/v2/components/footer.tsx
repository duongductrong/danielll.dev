import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      {...props}
      className={cn(
        "border-border mt-20 flex flex-col border-t pt-10 pb-8",
        className,
      )}
    >
      <div className="mb-14 flex flex-wrap gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-foreground text-sm font-bold">Trong Duong</h2>
          <small className="font-medium text-sm">Software Engineer at ZaloPay</small>
        </div>

        <div className="flex w-full flex-1 flex-wrap gap-8 sm:justify-end">
          <div className="min-w-[10rem]">
            <h2 className="text-foreground mb-2 text-sm font-bold">Me</h2>
            <ul className="flex flex-col gap-1">
              <li className="text-foreground text-sm">About</li>
              <li className="text-foreground text-sm">Moodboard</li>
              <li className="text-foreground text-sm">Writing</li>
              <li className="text-foreground text-sm">Contact</li>
            </ul>
          </div>

          <div className="min-w-[10rem]">
            <h2 className="text-foreground mb-2 text-sm font-bold">Projects</h2>
            <ul className="flex flex-col gap-1">
              <li className="text-foreground text-sm">Now</li>
              <li className="text-foreground text-sm">Work</li>
              <li className="text-foreground text-sm">Track Record</li>
              <li className="text-foreground text-sm">Feed</li>
            </ul>
          </div>

          <div className="min-w-[10rem]">
            <h2 className="text-foreground mb-2 text-sm font-bold">
              Elsewhere
            </h2>
            <ul className="flex flex-col gap-1">
              <li className="text-foreground text-sm">Bluesky</li>
              <li className="text-foreground text-sm">Twitter</li>
              <li className="text-foreground text-sm">Read.cv</li>
              <li className="text-foreground text-sm">GitHub</li>
              <li className="text-foreground text-sm">Figma</li>
              <li className="text-foreground text-sm">Layers</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-foreground font-title flex w-full justify-center text-[clamp(2rem,13vw,11rem)]">
        Thunderstorm
      </h2>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Trong Duong
        </p>

        <div className="flex items-center justify-center">
          <div className="h-1 w-10 bg-gray-800 sm:w-12"></div>
          <div className="h-1 w-10 bg-gray-600 sm:w-12"></div>
          <div className="h-1 w-10 bg-gray-400 sm:w-12"></div>
          <div className="h-1 w-10 bg-yellow-500 sm:w-12"></div>
          <div className="h-1 w-10 bg-orange-500 sm:w-12"></div>
          <div className="h-1 w-10 bg-red-600 sm:w-12"></div>
          <div className="h-1 w-10 bg-blue-600 sm:w-12"></div>
          <div className="h-1 w-10 bg-blue-800 sm:w-12"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
