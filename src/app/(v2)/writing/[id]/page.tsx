import { cn } from "@/lib/utils";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        "text-paragraph mt-16 mb-6 scroll-m-20 font-serif text-2xl font-medium tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "text-paragraph mt-12 mb-4 scroll-m-20 font-serif text-xl font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "text-paragraph mb-8 text-lg leading-relaxed font-light",
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
        "decoration-muted-foreground/30 hover:decoration-primary text-foreground font-medium underline underline-offset-4 transition-colors",
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
        "border-primary/40 text-muted-foreground/70 my-12 mt-6 border-l-2 pl-6 text-xl italic",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "text-muted-foreground/80 my-6 ml-6 list-disc [&>li]:mt-2",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn(
        "border-border/50 bg-muted/50 my-12 w-full rounded-md border",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
};

const MockContent = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <mdxComponents.p>
      There’s a silence in the creative process that rarely gets talked about.
      It’s not the blockage of writer’s block, nor the emptiness of a blank
      canvas. It’s the pause—the moment where the idea exists, suspended, before
      it touches the ground.
    </mdxComponents.p>

    <mdxComponents.p>
      I’ve spent the last three months chasing this specific kind of silence. We
      often mistake noise for progress: the slack notifications, the commits,
      the pixel-pushing. But the real work happens in the quiet. It happens when
      you step away from the screen and let the problem dissolve into the
      background of your mind.
    </mdxComponents.p>

    <mdxComponents.h2>The Architecture of Thought</mdxComponents.h2>

    <mdxComponents.p>
      When we started designing the new interface, we were obsessed with
      &quot;cleanliness.&quot; We stripped away borders, flattened shadows, and
      used so much white space it felt like a hospital. We thought we were being
      minimalists. We were just being empty.
    </mdxComponents.p>

    <mdxComponents.blockquote>
      &quot;True minimalism isn&apos;t the absence of detail, but the perfect
      hierarchy of it.&quot;
    </mdxComponents.blockquote>

    <mdxComponents.p>
      We had to go back to the drawing board. Literally. I took out my
      sketchbook—a heavy, A4 moleskine that smells like graphite and coffee—and
      started drawing boxes. Not UI components, just boxes. Structures. I wanted
      to understand how information <em>feels</em> when it&apos;s stacked.
    </mdxComponents.p>

    <mdxComponents.h2>Designing for the Night</mdxComponents.h2>

    <mdxComponents.p>
      Most of my users are developers. They work at night. They live in
      terminals and dark mode IDEs. Why was I designing a tool that felt like a
      fluorescent-lit office? I shifted the palette. Deep charcoals, soft
      obsidians, and text that glows rather than shines.
    </mdxComponents.p>

    <mdxComponents.p>
      The result wasn&apos;t just &quot;Dark Mode.&quot; It was a mood. A
      cinematic quality that made the data feel important, almost narrative.
      Every chart became a scene; every dashboard a storyboard.
    </mdxComponents.p>

    <mdxComponents.p>
      This is what I mean by the &quot;cinematic&quot; web. It&apos;s not about
      video backgrounds or WebGL effects. It&apos;s about lighting, pacing, and
      atmosphere. It&apos;s about treating the user&apos;s screen not as a
      document, but as a theater.
    </mdxComponents.p>
  </div>
);

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Try to find the real post
  const post = allPosts.find((p) => p._meta.path === id);
  const isMock = id.startsWith("mock-post");

  // Mock post data for design review if ID is a mock ID
  const displayPost = isMock
    ? {
        title: "The Architecture of Silence",
        date: new Date().toISOString(),
        author: "Duong Duc Trong",
        summary: "A journey into the quiet moments of design.",
        thumbnail: "/assets/projects/edgee/edgee-art-home.png", // Using an existing asset as hero
      }
    : {
        ...post,
        thumbnail: undefined,
      };

  if (!displayPost) {
    notFound();
  }

  return (
    <article className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="mb-16">
          <Link
            href="/writing"
            className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>Index</span>
          </Link>
        </div>

        <header className="mx-auto mb-20 w-full max-w-[65ch] space-y-8 text-center sm:text-left">
          <div className="space-y-6">
            <h1 className="text-foreground font-serif text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:leading-[1.1]">
              {displayPost.title}
            </h1>

            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-xs font-medium tracking-[0.2em] uppercase sm:justify-start">
              <span>{format(new Date(), "MMMM d, yyyy")}</span>
              <span className="bg-border h-px w-8" aria-hidden="true" />
              <span>{displayPost.author}</span>
              <span className="bg-border h-px w-8" aria-hidden="true" />
              <span>Article</span>
            </div>
          </div>
        </header>

        {(displayPost.thumbnail || isMock) && (
          <div className="bg-muted ring-border relative mb-24 overflow-hidden rounded-sm shadow-2xl ring-1">
            <div className="aspect-video w-full">
              <Image
                src={
                  displayPost.thumbnail ||
                  "/assets/projects/edgee/edgee-art-home.png"
                }
                alt={displayPost.title ?? ""}
                fill
                className="object-cover opacity-90 transition-all duration-1000 hover:scale-105 hover:opacity-100"
                priority
              />
            </div>
          </div>
        )}

        <div className="prose text-paragraph prose-lg md:prose-xl prose-stone dark:prose-invert mx-auto">
          {isMock ? (
            <MockContent />
          ) : (
            <MDXContent code={post!.mdx} components={mdxComponents} />
          )}
        </div>

        <footer className="border-border mt-32 border-t pt-12">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p className="text-muted-foreground font-serif text-2xl italic">
              Thanks for reading.
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}
