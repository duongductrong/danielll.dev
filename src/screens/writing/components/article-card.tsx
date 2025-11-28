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

const ArticleVisual = ({ title, index = 0 }: { title: string; index?: number }) => {
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
        gradient
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

      <span className="relative z-10 font-mono text-7xl font-black uppercase text-white/10">
        {displayChar}
      </span>

      <div className="absolute bottom-3 left-3 right-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
};

export const ArticleCard = ({ post, variant = "default" }: ArticleCardProps) => {
  if (variant === "horizontal") {
    return (
      <Link
        href={`/writing/${post._meta.path}`}
        className="group flex rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <article className="flex w-full items-start gap-6 border-b border-border py-6 transition-colors">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {format(new Date(post.date), "MMM d, yyyy")}
              </span>
            </div>
            <h3 className="font-serif text-xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <Text className="line-clamp-2 text-sm text-muted-foreground">
              {post.summary}
            </Text>
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/writing/${post._meta.path}`}
        className="group flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <article className="flex w-full items-center justify-between gap-4 py-4 transition-colors">
          <div className="min-w-0 flex-1">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {format(new Date(post.date), "MMM d")}
            </span>
            <h3 className="truncate font-medium text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/writing/${post._meta.path}`}
      className="group flex h-full flex-col rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <Card className="flex h-full flex-col justify-between overflow-hidden border-border bg-card transition-all duration-300 group-hover:-translate-y-1 hover:border-foreground/20 hover:bg-accent/50">
        {!post.thumbnail && (
          <ArticleVisual title={post.title} index={Math.random() * 4} />
        )}
        <CardHeader className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {format(new Date(post.date), "MMM d, yyyy")}
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <CardTitle className="font-serif text-xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
              {post.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Text className="line-clamp-3 text-muted-foreground" variant="body">
            {post.summary}
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
};
