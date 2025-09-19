"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Code, Copy } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const CodeBox = dynamic(() => import("./code").then((mod) => mod.Code), {
  ssr: false,
  loading: () => (
    <div className="h-[350px] w-full flex items-center justify-center bg-preview-bg" />
  ),
});

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({
  code,
  language = "tsx",
  filename,
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border border-border", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
        <div className="flex items-center gap-2">
          <Code className="size-4" />
          {filename && <span className="text-sm font-mono">{filename}</span>}
          <Badge variant="outline" className="text-xs">
            {language}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2"
        >
          {copied ? (
            <Check className="size-4 text-green-600" />
          ) : (
            <Copy className="size-4" />
          )}
        </Button>
      </div>

      <div
        className={cn(
          "relative",
          "[&_.shiki]:font-jetbrains-mono",
          "[&_.shiki]:!bg-preview-bg",
          "[&_.shiki]:!m-0",
          "max-h-[400px] overflow-y-auto"
        )}
      >
        <CodeBox lang={language}>{code}</CodeBox>
        {/* <div className="overflow-x-auto p-4 text-sm [&_*]:text-foreground bg-transparent mt-0">
          <code className="language-tsx">
            {showLineNumbers
            ? code.split("\n").map((line, index) => (
              <div key={index} className="flex">
              <span className="select-none text-muted-foreground mr-4 w-8 text-right shrink-0">
              {index + 1}
              </span>
              <span>{line}</span>
              </div>
              ))
              : code}
              </code>
        </div> */}
      </div>
    </div>
  );
};
