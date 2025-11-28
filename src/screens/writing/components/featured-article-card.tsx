import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./article-card";

interface FeaturedArticleCardProps {
  post: Post & { thumbnail?: string };
  className?: string;
}

const ArticleHeroVisual = ({ title }: { title: string }) => {
  const words = title.split(" ");
  const displayWord = words.find((w) => w.length > 4) || words[0];

  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,200,87,0.1),transparent_50%)]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute left-6 top-6">
        <Sparkles className="size-5 text-amber-400/60" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="size-16 rounded-full border border-white/10" />
      </div>
      <div className="absolute right-1/4 top-1/4">
        <div className="size-2 rounded-full bg-violet-400/40" />
      </div>

      <div className="relative z-10 px-8 text-center">
        <span className="font-mono text-[8rem] font-black uppercase leading-none tracking-tighter text-white/[0.06] sm:text-[10rem] lg:text-[12rem]">
          {displayWord.slice(0, 6)}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent dark:from-zinc-950" />
    </div>
  );
};

export const FeaturedArticleCard = ({
  post,
  className,
}: FeaturedArticleCardProps) => {
  return (
    <Link
      href={`/writing/${post._meta.path}`}
      className={cn(
        "group flex flex-col rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      <Card className="flex h-full flex-col overflow-hidden border-border bg-card transition-all duration-300 group-hover:-translate-y-1 hover:border-foreground/20 hover:bg-accent/50">
        {post.thumbnail ? (
          <div className="relative aspect-video w-full overflow-hidden border-b border-border">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="border-b border-border">
            <ArticleHeroVisual title={post.title} />
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between">
          <CardHeader className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <CardTitle className="font-serif text-2xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                {post.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Text className="line-clamp-3 text-muted-foreground" variant="body">
              {post.summary}
            </Text>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
