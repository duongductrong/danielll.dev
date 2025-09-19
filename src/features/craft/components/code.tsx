"use client";

import { Loader2 } from "lucide-react";
import { JSX, useLayoutEffect, useState } from "react";
import { BundledLanguage } from "shiki/bundle/web";
import { highlight } from "./highlight";

export function Code({
  initial,
  code = "",
  lang,
  children,
}: {
  children?: string;
  code?: string;
  initial?: JSX.Element;
  lang: string;
}) {
  const [nodes, setNodes] = useState(initial);

  useLayoutEffect(() => {
    void highlight(code || children || "", lang as BundledLanguage).then(
      setNodes
    );
  }, [code, lang, children]);

  return (
    nodes ?? (
      <div className="h-[350px] w-full flex items-center justify-center">
        <Loader2 className="animate-spin size-4"></Loader2>
      </div>
    )
  );
}
