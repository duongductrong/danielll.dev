import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const ArticleNavigation = () => {
  return (
    <nav className="mx-auto mb-12 flex max-w-3xl items-center justify-between">
      <Link
        href="/writing"
        className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        <span>All Articles</span>
      </Link>
    </nav>
  );
};

