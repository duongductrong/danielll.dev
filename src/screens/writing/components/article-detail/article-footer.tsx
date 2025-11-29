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
        <div className="via-border h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
        <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
          End of Article
        </span>
        <div className="via-border h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      <RelatedArticles posts={relatedPosts} />
    </footer>
  );
};
