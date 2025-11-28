import { Sparkles } from "lucide-react";

interface ArticleHeroProps {
  title: string;
}

const PATTERN_SVG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const extractHighlightWord = (title: string): string => {
  const words = title.split(" ");
  return words.find((w) => w.length > 4) || words[0];
};

export const ArticleHero = ({ title }: ArticleHeroProps) => {
  const highlightWord = extractHighlightWord(title);

  return (
    <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,200,87,0.08),transparent_50%)]" />

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{ backgroundImage: PATTERN_SVG }}
        />
      </div>

      <div className="absolute left-8 top-8">
        <Sparkles className="size-5 text-amber-400/50" />
      </div>
      <div className="absolute bottom-12 right-12">
        <div className="size-20 rounded-full border border-white/5" />
      </div>
      <div className="absolute right-1/4 top-1/4">
        <div className="size-2 rounded-full bg-violet-400/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/4">
        <div className="size-1.5 rounded-full bg-amber-400/30" />
      </div>

      <div className="relative flex aspect-[21/9] items-center justify-center px-8">
        <span className="text-center font-mono text-[6rem] font-black uppercase leading-none tracking-tighter text-white/[0.04] sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
          {highlightWord.slice(0, 8)}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent dark:from-zinc-950" />
    </div>
  );
};

