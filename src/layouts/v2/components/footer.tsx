import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      {...props}
      className={cn(
        "flex flex-col border-t border-border pt-10 mt-20 pb-8",
        className
      )}
    >
      <div className="flex gap-10 mb-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-foreground font-bold">Trong Duong</h2>
          <small className="font-medium">Software Engineer at ZaloPay</small>
        </div>

        <div className="flex justify-end w-full flex-1 gap-8">
          <div className="min-w-[10rem]">
            <h2 className="text-sm text-foreground font-bold mb-2">Me</h2>
            <ul className="flex flex-col gap-1">
              <li className="text-sm text-foreground">About</li>
              <li className="text-sm text-foreground">Moodboard</li>
              <li className="text-sm text-foreground">Writing</li>
              <li className="text-sm text-foreground">Contact</li>
            </ul>
          </div>

          <div className="min-w-[10rem]">
            <h2 className="text-sm text-foreground font-bold mb-2">Projects</h2>
            <ul className="flex flex-col gap-1">
              <li className="text-sm text-foreground">Now</li>
              <li className="text-sm text-foreground">Work</li>
              <li className="text-sm text-foreground">Track Record</li>
              <li className="text-sm text-foreground">Feed</li>
            </ul>
          </div>

          <div className="min-w-[10rem]">
            <h2 className="text-sm text-foreground font-bold mb-2">
              Elsewhere
            </h2>
            <ul className="flex flex-col gap-1">
              <li className="text-sm text-foreground">Bluesky</li>
              <li className="text-sm text-foreground">Twitter</li>
              <li className="text-sm text-foreground">Read.cv</li>
              <li className="text-sm text-foreground">GitHub</li>
              <li className="text-sm text-foreground">Figma</li>
              <li className="text-sm text-foreground">Layers</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-[clamp(2rem,15vw,11.5rem)] text-foreground w-full justify-center flex font-dm-serif-display">
        Thunderstorm
      </h2>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Trong Duong
        </p>

        <div className="flex items-center justify-center">
          <div className="h-1 w-12 bg-gray-800"></div>
          <div className="h-1 w-12 bg-gray-600"></div>
          <div className="h-1 w-12 bg-gray-400"></div>
          <div className="h-1 w-12 bg-yellow-500"></div>
          <div className="h-1 w-12 bg-orange-500"></div>
          <div className="h-1 w-12 bg-red-600"></div>
          <div className="h-1 w-12 bg-blue-600"></div>
          <div className="h-1 w-12 bg-blue-800"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
