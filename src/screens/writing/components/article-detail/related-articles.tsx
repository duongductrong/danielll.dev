import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface RelatedPost {
  title: string;
  date: Date;
  _meta: {
    path: string;
  };
}

interface RelatedArticlesProps {
  posts: RelatedPost[];
}

export const RelatedArticles = ({ posts }: RelatedArticlesProps) => {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl space-y-8">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Continue Reading
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._meta.path}
            href={`/writing/${post._meta.path}`}
            className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {format(new Date(post.date), "MMM d")}
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <h3 className="line-clamp-2 font-serif text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

