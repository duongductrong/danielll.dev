import { cn } from "@/lib/utils";
import { DatabaseZap } from "lucide-react";

function GlowingBorder() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "overflow-hidden relative p-0.5 inline-block",
          "before:absolute rounded-xl",
          "before:top-[-50%] before:left-[-50%]",
          "before:m-[-1px]",
          "before:w-full before:h-full before:bg-red-500",
          "before:[background:conic-gradient(from_10deg,transparent_20%,#4EAFFE_50%,transparent_20%)]",
          "before:animate-spin before:w-[200%] before:h-[200%]",
          "before:duration-1000"
        )}
      >
        <div className="relative border-2 border-zinc-200 dark:border-zinc-700 bg-[#F5F5F5] dark:bg-[#171717] p-4 rounded-xl grid place-items-center size-16">
          <DatabaseZap className="size-6 text-zinc-500 dark:text-zinc-700" />
        </div>
      </div>

      <h2 className="text-sm text-zinc-500 dark:text-zinc-700 mt-4 mb-0">
        Waiting for connection to database...
      </h2>
      <p className="text-xs text-zinc-500 dark:text-zinc-700 mt-2">
        This may take a few seconds...
      </p>
    </div>
  );
}

export default GlowingBorder;
