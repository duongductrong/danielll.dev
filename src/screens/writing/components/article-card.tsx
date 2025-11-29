import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface Post {
  title: string;
  summary: string;
  date: Date | string;
  author: string;
  _meta: {
    path: string;
    filePath: string;
    fileName: string;
  };
}

interface ArticleCardProps {
  post: Post & { thumbnail?: string };
  variant?: "default" | "compact" | "horizontal";
}

const ArticleVisual = ({
  title,
  index = 0,
}: {
  title: string;
  index?: number;
}) => {
  const gradients = [
    "from-violet-600/20 via-purple-500/10 to-fuchsia-500/20",
    "from-amber-500/20 via-orange-400/10 to-rose-500/20",
    "from-emerald-500/20 via-teal-400/10 to-cyan-500/20",
    "from-blue-500/20 via-indigo-400/10 to-violet-500/20",
  ];

  const words = title.split(" ");
  const displayChar = (words.find((w) => w.length > 3) || words[0])[0];
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-lg bg-gradient-to-br",
        gradient,
      )}
    >
      <div className="absolute inset-0 bg-zinc-900/80 dark:bg-zinc-950/80" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-5l-40 40h5zm40 0v-5l-40-40h5l35 35v10h0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <span className="relative z-10 font-mono text-7xl font-black text-white/10 uppercase">
        {displayChar}
      </span>

      <div className="absolute right-3 bottom-3 left-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
};

export const ArticleCard = ({
  post,
  variant = "default",
}: ArticleCardProps) => {
  if (variant === "horizontal") {
    return (
      <Link
        href={`/writing/${post._meta.path}`}
        className="group focus-visible:ring-ring flex outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <article className="flex w-full items-start gap-6 py-5 transition-colors">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                {format(new Date(post.date), "MMM d, yyyy")}
              </span>
            </div>
            <h3 className="text-foreground group-hover:text-primary font-serif text-xl leading-tight font-medium tracking-tight transition-colors">
              {post.title}
            </h3>
            <Text className="text-muted-foreground line-clamp-2 text-sm">
              {post.summary}
            </Text>
          </div>
          <ArrowUpRight className="text-muted-foreground group-hover:text-foreground mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/writing/${post._meta.path}`}
        className="group focus-visible:ring-ring flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <article className="flex w-full items-center justify-between gap-4 py-4 transition-colors">
          <div className="min-w-0 flex-1">
            <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
              {format(new Date(post.date), "MMM d")}
            </span>
            <h3 className="text-foreground group-hover:text-primary truncate font-medium transition-colors">
              {post.title}
            </h3>
          </div>
          <ArrowUpRight className="text-muted-foreground size-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/writing/${post._meta.path}`}
      className="group focus-visible:ring-ring flex h-full flex-col rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <Card className="border-border bg-card hover:border-foreground/20 hover:bg-accent/50 flex h-full flex-col justify-between overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
        {!post.thumbnail && (
          <ArticleVisual title={post.title} index={Math.random() * 4} />
        )}
        <CardHeader className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                {format(new Date(post.date), "MMM d, yyyy")}
              </span>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <CardTitle className="text-foreground group-hover:text-primary font-serif text-xl leading-tight font-medium tracking-tight transition-colors sm:text-2xl">
              {post.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Text className="text-muted-foreground line-clamp-3" variant="body">
            {post.summary}
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
};
