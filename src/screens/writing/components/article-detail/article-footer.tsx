import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RelatedArticles } from "./related-articles";

interface RelatedPost {
  title: string;
  date: Date;
  _meta: {
    path: string;
  };
}

interface ArticleFooterProps {
  relatedPosts: RelatedPost[];
}

export const ArticleFooter = ({ relatedPosts }: ArticleFooterProps) => {
  return (
    <footer className="mt-24 space-y-16">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          End of Article
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <RelatedArticles posts={relatedPosts} />

      <div className="flex justify-center">
        <Link
          href="/writing"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-accent"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to All Articles
        </Link>
      </div>
    </footer>
  );
};

