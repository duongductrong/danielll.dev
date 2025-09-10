"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Copy, Code } from "lucide-react";
import { useState } from "react";

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
  showLineNumbers = true,
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border bg-muted/50", className)}>
      {/* Header */}
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

      {/* Code Content */}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm [&_*]:text-foreground bg-transparent">
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
        </pre>
      </div>
    </div>
  );
};
