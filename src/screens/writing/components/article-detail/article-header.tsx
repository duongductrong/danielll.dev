import { format } from "date-fns";
import { Clock } from "lucide-react";

interface ArticleHeaderProps {
  title: string;
  summary: string;
  date: Date;
  readingTime: number;
}

export const ArticleHeader = ({
  title,
  summary,
  date,
  readingTime,
}: ArticleHeaderProps) => {
  return (
    <header className="mx-auto mb-12 max-w-3xl space-y-8">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <time dateTime={date.toISOString()}>
            {format(date, "MMMM d, yyyy")}
          </time>
          <span
            className="h-1 w-1 rounded-full bg-muted-foreground/50"
            aria-hidden="true"
          />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3" />
            {readingTime} min read
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-5xl">
          {title}
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {summary}
        </p>
      </div>
    </header>
  );
};

