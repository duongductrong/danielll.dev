"use client";

import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FEED_ASPECT_RATIOS, FEED_PLACEHOLDER_IMAGES } from "../constants";

export type FeedCardProps = {
  title: string;
  date: Date;
  thumbnail?: string;
  href: string;
  index: number;
};

const extractSiteName = (href: string): string => {
  return new URL(href, "https://trongduong.com").hostname.replace("www.", "");
};

export const FeedCard = ({
  title,
  date,
  thumbnail,
  href,
  index,
}: FeedCardProps) => {
  const imageSrc =
    thumbnail ||
    FEED_PLACEHOLDER_IMAGES[index % FEED_PLACEHOLDER_IMAGES.length];
  const aspectRatio = FEED_ASPECT_RATIOS[index % FEED_ASPECT_RATIOS.length];
  const siteName = extractSiteName(href);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="mb-10 break-inside-avoid"
    >
      <Link href={href} className="group block">
        <div
          className={`border-border relative w-full overflow-hidden border ${aspectRatio}`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            unoptimized
          />
        </div>

        <div className="mt-3 flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h2 className="text-foreground line-clamp-2 text-sm font-medium">
              {title}
            </h2>
            <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
              <time dateTime={date.toISOString()}>
                {format(date, "MMM d, yyyy")}
              </time>
              <span className="text-muted-foreground">·</span>
              <span>{siteName}</span>
            </div>
          </div>

          <ArrowUpRight className="text-muted-foreground group-hover:text-primary mt-0.5 size-6 shrink-0 transition-colors" />
        </div>
      </Link>
    </motion.article>
  );
};
