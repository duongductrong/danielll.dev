"use server";

import { cn } from "@/lib/utils";
import React from "react";
import { BundledLanguage, codeToHtml } from "shiki/bundle/web";

export interface PreformattedTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  lang?: string;
}

const PreformattedText = async ({
  children,
  lang,
  ...props
}: PreformattedTextProps) => {
  const output = await codeToHtml(children as string, {
    lang: lang as BundledLanguage,
    themes: {
      dark: "github-dark",
      light: "github-light",
      system: "github-dark",
    },
  });

  return (
    <div
      {...props}
      className={cn(
        "relative [&_.shiki]:font-jetbrains-mono [&_.shiki]:!bg-preview-bg [&_.shiki]:!m-0 max-h-[400px] overflow-y-auto"
      )}
      dangerouslySetInnerHTML={{ __html: output }}
    />
  );
};

export default PreformattedText;
