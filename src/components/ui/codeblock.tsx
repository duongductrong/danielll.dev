"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useTheme } from "next-themes";
import {
  ComponentProps,
  JSX,
  useLayoutEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { BundledLanguage } from "shiki/bundle/web";
import { highlight } from "../../features/craft/components/highlight";

export interface CodeBlockProps extends ComponentProps<"div"> {
  children?: string;
  code?: string;
  initial?: JSX.Element;
  lang: string;
}

const subscribe = () => () => true;
const getSnapshot = () => false;
const getServerSnapshot = () => true;

export function CodeBlock({
  initial,
  code = "",
  lang,
  children,
  className,
  ...props
}: CodeBlockProps) {
  const isServer = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const { theme } = useTheme();
  const [nodes, setNodes] = useState(initial);

  useLayoutEffect(() => {
    void highlight(code || children || "", lang as BundledLanguage, theme).then(
      setNodes
    );
  }, [code, lang, children, theme]);

  return (
    <div
      {...props}
      className={cn(
        "overflow-y-auto border border-border/50 rounded-md bg-preview-bg",
        "relative [&_.shiki]:font-jetbrains-mono [&_.shiki]:!bg-preview-bg",
        "[&_.shiki]:!m-0 max-h-[400px]",
        className
      )}
    >
      {isServer ? (
        <pre className="px-4 py-3 bg-preview-bg font-jetbrains-mono text-sm">
          <code>{initial}</code>
        </pre>
      ) : (
        nodes ?? <FallbackLoadingSpinner />
      )}
    </div>
  );
}

const FallbackLoadingSpinner = () => (
  <div className="h-[350px] w-full flex items-center justify-center bg-preview-bg border border-border">
    <Loader className="animate-spin size-4"></Loader>
  </div>
);
