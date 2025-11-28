"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton = ({ text, className }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "flex size-8 items-center justify-center rounded-md border border-zinc-700/50 bg-zinc-800/80 text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-700 hover:text-zinc-200",
        copied && "border-emerald-500/50 bg-emerald-500/20 text-emerald-400",
        className
      )}
      aria-label={copied ? "Copied!" : "Copy code"}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
};

