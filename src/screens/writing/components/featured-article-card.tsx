import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./article-card";

interface FeaturedArticleCardProps {
  post: Post & { thumbnail?: string };
  className?: string;
}

interface ArticleHeaderProps {
  date: string;
  title: string;
  variant?: "light" | "dark";
}

interface HeroProps {
  title: string;
  date: string;
}

interface ThumbnailHeroProps extends HeroProps {
  thumbnail: string;
}

const getAccentWord = (title: string): string => {
  const words = title.split(" ");
  return words.find((w) => w.length > 4) || words[0];
};

const ArticleHeader = ({ date, title, variant = "dark" }: ArticleHeaderProps) => {
  const isLight = variant === "light";

  return (
    <div className="space-y-3">
      <time
        className={cn(
          "block font-mono text-xs uppercase tracking-widest",
          isLight ? "text-white/70" : "text-zinc-500"
        )}
      >
        {date}
      </time>
      <h3
        className={cn(
          "font-title text-2xl font-semibold leading-tight tracking-tight lg:text-3xl",
          isLight
            ? "text-white"
            : "text-zinc-100 transition-colors duration-300 group-hover:text-white"
        )}
      >
        {title}
      </h3>
    </div>
  );
};

const TypographicAccent = ({ title }: { title: string }) => {
  const accentWord = getAccentWord(title);

  return (
    <span
      aria-hidden="true"
      className="absolute -right-4 bottom-0 font-title text-[12rem] font-black uppercase leading-none tracking-tighter text-zinc-900/50 transition-transform duration-700 ease-out group-hover:translate-x-2 dark:text-zinc-800/40 lg:text-[16rem]"
    >
      {accentWord.slice(0, 4)}
    </span>
  );
};

const CircleDecoration = () => (
  <div className="size-12 rounded-full border border-zinc-800 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-700" />
);

const ArticleFooter = ({ summary }: { summary: string }) => (
  <div className="mt-5 flex items-start justify-between gap-6">
    <p className="line-clamp-2 max-w-lg text-sm leading-relaxed text-muted-foreground lg:text-base">
      {summary}
    </p>
    <span className="flex shrink-0 items-center gap-2 pt-0.5 text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
      Read
      <MoveRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  </div>
);

const ThumbnailHero = ({ thumbnail, title, date }: ThumbnailHeroProps) => (
  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
    <Image
      src={thumbnail}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
      <ArticleHeader date={date} title={title} variant="light" />
    </div>
  </div>
);

const PlaceholderHero = ({ title, date }: HeroProps) => (
  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-950 dark:bg-zinc-900">
    <div className="absolute inset-0 flex items-end justify-start p-6 lg:p-8">
      <div className="relative z-10 max-w-md">
        <ArticleHeader date={date} title={title} variant="dark" />
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <TypographicAccent title={title} />
    </div>

    <div className="pointer-events-none absolute right-6 top-6 lg:right-8 lg:top-8">
      <CircleDecoration />
    </div>
  </div>
);

export const FeaturedArticleCard = ({
  post,
  className,
}: FeaturedArticleCardProps) => {
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  return (
    <Link
      href={`/writing/${post._meta.path}`}
      aria-label={`Read article: ${post.title}`}
      className={cn(
        "group relative block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4",
        className
      )}
    >
      <article className="relative flex h-full flex-col">
        {post.thumbnail ? (
          <ThumbnailHero
            thumbnail={post.thumbnail}
            title={post.title}
            date={formattedDate}
          />
        ) : (
          <PlaceholderHero title={post.title} date={formattedDate} />
        )}

        <ArticleFooter summary={post.summary} />
      </article>
    </Link>
  );
};
