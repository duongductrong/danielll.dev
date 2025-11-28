import Image from "next/image";
import { ArticleHero } from "./article-hero";

interface ArticleMediaProps {
  title: string;
  thumbnail?: string;
}

export const ArticleMedia = ({ title, thumbnail }: ArticleMediaProps) => {
  if (thumbnail) {
    return (
      <div className="relative mb-16 overflow-hidden rounded-2xl border border-border/30 shadow-2xl">
        <div className="aspect-video w-full">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  return <ArticleHero title={title} />;
};

