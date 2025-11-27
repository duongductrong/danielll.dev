import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Define a local interface that matches what we expect from content-collections
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
  post: Post;
}

export const ArticleCard = ({ post }: ArticleCardProps) => {
  return (
    <Link 
      href={`/writing/${post._meta.path}`} 
      className="group flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
    >
      <Card className="flex h-full flex-col justify-between border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:bg-accent/50 group-hover:-translate-y-1">
        <CardHeader className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {format(new Date(post.date), "MMM d, yyyy")}
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
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

