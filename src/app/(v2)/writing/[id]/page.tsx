import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";
import { format } from "date-fns";
import { ArrowLeft, ArrowUpRight, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 font-serif text-4xl font-bold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "group text-foreground relative mt-20 mb-6 scroll-m-20 font-serif text-2xl font-semibold tracking-tight first:mt-0 md:text-3xl",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "text-foreground mt-14 mb-4 scroll-m-20 font-serif text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "text-paragraph [&:first-of-type]:first-letter:text-foreground mb-7 text-lg leading-[1.85] [&:first-of-type]:first-letter:float-left [&:first-of-type]:first-letter:mr-3 [&:first-of-type]:first-letter:font-serif [&:first-of-type]:first-letter:text-6xl [&:first-of-type]:first-letter:leading-none [&:first-of-type]:first-letter:font-bold",
        className,
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
        "text-foreground decoration-primary/40 hover:decoration-primary font-medium underline decoration-2 underline-offset-4 transition-colors",
        className,
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
        "relative my-12 py-8 pr-4 pl-8 md:pl-12",
        "before:from-primary/60 before:via-primary/30 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:rounded-full before:bg-gradient-to-b before:to-transparent",
        "text-muted-foreground/80 text-xl leading-relaxed italic md:text-2xl",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "text-paragraph [&>li]:before:bg-primary/50 my-8 space-y-3 pl-4 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:top-[0.6em] [&>li]:before:left-0 [&>li]:before:size-1.5 [&>li]:before:rounded-full",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "text-paragraph marker:text-muted-foreground my-8 list-decimal space-y-3 pl-8 marker:font-mono",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "group border-border/50 relative my-10 overflow-x-auto rounded-xl border bg-zinc-950 p-5 text-sm dark:bg-zinc-900/50",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className?.includes("language-");
    return (
      <code
        className={cn(
          isInline
            ? "border-border/50 bg-muted/50 text-foreground rounded-md border px-1.5 py-0.5 font-mono text-[0.9em]"
            : "font-mono text-zinc-100",
          className,
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
    <span className="border-border/30 my-12 block overflow-hidden rounded-xl border shadow-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={cn("w-full", className)} alt={alt} {...props} />
    </span>
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn(
        "via-border my-16 h-px border-0 bg-gradient-to-r from-transparent to-transparent",
        className,
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className={cn("text-foreground/90 italic", className)} {...props} />
  ),
};

const ArticleHero = ({ title }: { title: string }) => {
  const words = title.split(" ");
  const highlightWord = words.find((w) => w.length > 4) || words[0];

  return (
    <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,200,87,0.08),transparent_50%)]" />

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-8 left-8">
        <Sparkles className="size-5 text-amber-400/50" />
      </div>
      <div className="absolute right-12 bottom-12">
        <div className="size-20 rounded-full border border-white/5" />
      </div>
      <div className="absolute top-1/4 right-1/4">
        <div className="size-2 rounded-full bg-violet-400/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/4">
        <div className="size-1.5 rounded-full bg-amber-400/30" />
      </div>

      <div className="relative flex aspect-[21/9] items-center justify-center px-8">
        <span className="text-center font-mono text-[6rem] leading-none font-black tracking-tighter text-white/[0.04] uppercase sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
          {highlightWord.slice(0, 8)}
        </span>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent dark:from-zinc-950" />
    </div>
  );
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = allPosts.find((p) => p._meta.path === id);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.mdx);
  const relatedPosts = allPosts
    .filter((p) => p._meta.path !== id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <article className="bg-background text-foreground min-h-screen">
      <Container className="px-6 pt-12 pb-24 md:pt-16">
        <nav className="mx-auto mb-12 flex max-w-3xl items-center justify-between">
          <Link
            href="/writing"
            className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>All Articles</span>
          </Link>
        </nav>

        <header className="mx-auto mb-12 max-w-3xl space-y-8">
          <div className="space-y-6">
            <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase">
              <time dateTime={new Date(post.date).toISOString()}>
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
              <span
                className="bg-muted-foreground/50 h-1 w-1 rounded-full"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3" />
                {readingTime} min read
              </span>
            </div>

            <h1 className="text-foreground font-serif text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl md:text-5xl">
              {post.title}
            </h1>

            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
              {post.summary}
            </p>
          </div>

          {/* <div className="border-border flex items-center gap-4 border-t pt-6">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 font-serif text-sm font-bold text-zinc-700 dark:from-zinc-700 dark:to-zinc-800 dark:text-zinc-300">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">
                {post.author}
              </p>
              <p className="text-muted-foreground text-xs">Author</p>
            </div>
          </div> */}
        </header>

        {post.thumbnail ? (
          <div className="border-border/30 relative mb-16 overflow-hidden rounded-2xl border shadow-2xl">
            <div className="aspect-video w-full">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          <ArticleHero title={post.title} />
        )}

        <div className="prose-article mx-auto max-w-3xl">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </div>

        <footer className="mt-24 space-y-16">
          <div className="flex items-center gap-4">
            <div className="via-border h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              End of Article
            </span>
            <div className="via-border h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
          </div>

          {relatedPosts.length > 0 && (
            <section className="mx-auto max-w-3xl space-y-8">
              <h2 className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                Continue Reading
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost._meta.path}
                    href={`/writing/${relatedPost._meta.path}`}
                    className="group border-border bg-card hover:border-foreground/20 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                        {format(new Date(relatedPost.date), "MMM d")}
                      </span>
                      <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="text-foreground group-hover:text-primary line-clamp-2 font-serif text-lg leading-snug font-medium transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="flex justify-center">
            <Link
              href="/writing"
              className="group border-border bg-card text-foreground hover:border-foreground/20 hover:bg-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to All Articles
            </Link>
          </div>
        </footer>
      </Container>
    </article>
  );
}
