import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./article-card";

interface FeaturedArticleCardProps {
  post: Post & { thumbnail?: string };
  className?: string;
}

export const FeaturedArticleCard = ({ post, className }: FeaturedArticleCardProps) => {
  return (
    <Link
      href={`/writing/${post._meta.path}`}
      className={cn(
        "group flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl",
        className
      )}
    >
      <Card className="flex h-full flex-col overflow-hidden border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:bg-accent/50 group-hover:-translate-y-1">
        {post.thumbnail && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-border">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between">
          <CardHeader className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
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

