import { getLanguageFromClassName } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { CopyButton } from "./copy-button";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 font-serif text-4xl font-bold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "group relative mb-6 mt-20 scroll-m-20 font-serif text-2xl font-semibold tracking-tight text-foreground first:mt-0 md:text-3xl",
        className
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mb-4 mt-14 scroll-m-20 font-serif text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),

  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "mb-7 text-lg leading-[1.85] text-paragraph",
        "[&:first-of-type]:first-letter:float-left [&:first-of-type]:first-letter:mr-3 [&:first-of-type]:first-letter:font-serif [&:first-of-type]:first-letter:text-6xl [&:first-of-type]:first-letter:font-bold [&:first-of-type]:first-letter:leading-none [&:first-of-type]:first-letter:text-foreground",
        className
      )}
      {...props}
    />
  ),

  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium text-foreground underline decoration-primary/40 decoration-2 underline-offset-4 transition-colors hover:decoration-primary",
        className
      )}
      {...props}
    />
  ),

  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "relative my-12 py-8 pl-8 pr-4 md:pl-12",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-gradient-to-b before:from-primary/60 before:via-primary/30 before:to-transparent",
        "text-xl italic leading-relaxed text-muted-foreground/80 md:text-2xl",
        className
      )}
      {...props}
    />
  ),

  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "my-8 space-y-3 pl-4 text-paragraph",
        "[&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.6em] [&>li]:before:size-1.5 [&>li]:before:rounded-full [&>li]:before:bg-primary/50",
        className
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "my-8 list-decimal space-y-3 pl-8 text-paragraph marker:font-mono marker:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),

  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),

  figure: ({
    className,
    "data-rehype-pretty-code-figure": isCodeFigure,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    "data-rehype-pretty-code-figure"?: string;
  }) => {
    if (isCodeFigure !== undefined) {
      return (
        <figure
          className={cn("group/code relative my-8", className)}
          data-rehype-pretty-code-figure=""
          {...props}
        />
      );
    }
    return <figure className={className} {...props} />;
  },

  figcaption: ({
    className,
    "data-rehype-pretty-code-title": isCodeTitle,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    "data-rehype-pretty-code-title"?: string;
  }) => {
    if (isCodeTitle !== undefined) {
      return (
        <figcaption
          className={cn(
            "flex items-center gap-2 rounded-t-xl border border-b-0 border-border/50 bg-zinc-100 px-4 py-2.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900",
            className
          )}
          data-rehype-pretty-code-title=""
          {...props}
        >
          <Terminal className="size-3.5" />
          {children}
        </figcaption>
      );
    }
    return (
      <figcaption className={className} {...props}>
        {children}
      </figcaption>
    );
  },

  pre: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) => {
    const codeElement = children as React.ReactElement<{
      className?: string;
      children?: string;
    }>;
    const codeClassName = codeElement?.props?.className;
    const language = getLanguageFromClassName(codeClassName);
    const codeContent =
      typeof codeElement?.props?.children === "string"
        ? codeElement.props.children
        : "";

    return (
      <div className="group/code relative">
        <div className="absolute right-3 top-3 z-10 flex items-center gap-2 opacity-0 transition-opacity group-hover/code:opacity-100">
          {language && (
            <span className="rounded-md bg-zinc-700/50 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400">
              {language}
            </span>
          )}
          <CopyButton text={codeContent} />
        </div>
        <pre
          className={cn(
            "overflow-x-auto rounded-xl border border-border/50 bg-zinc-950 p-2 text-sm leading-relaxed dark:bg-zinc-900/80",
            "group-has-[figcaption]/code:rounded-t-none group-has-[figcaption]/code:border-t-0",
            "[&>code]:p-3",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },

  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline =
      !className?.includes("language-") && !className?.includes("shiki");
    return (
      <code
        className={cn(
          isInline
            ? "rounded-md border border-border/50 bg-muted/50 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
            : "block font-mono [&>span]:leading-relaxed",
          className
        )}
        {...props}
      />
    );
  },

  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="my-12 block overflow-hidden rounded-xl border border-border/30 shadow-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={cn("w-full", className)} alt={alt} {...props} />
    </span>
  ),

  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn(
        "my-16 h-px border-0 bg-gradient-to-r from-transparent via-border to-transparent",
        className
      )}
      {...props}
    />
  ),

  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  ),

  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className={cn("italic text-foreground/90", className)} {...props} />
  ),
};

