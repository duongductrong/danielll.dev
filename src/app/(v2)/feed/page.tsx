"use client";

import { format } from "date-fns";
import { allPosts } from "content-collections";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";

type FeedCardProps = {
  title: string;
  date: Date;
  thumbnail?: string;
  href: string;
  index: number;
};

const UNSPLASH_IMAGES = [
  "https://framerusercontent.com/images/Zo6qU8I3u0QZD4xtweBVwIulYxg.gif",
  "https://framerusercontent.com/images/Kcc0gEHSpvUuf7MzY9PqwjuZ8E.png",
  "https://framerusercontent.com/images/5QmBxama3GwshCQFUwIo95jNYBA.png",
  "https://framerusercontent.com/images/lgEAUOniQ1wpOoVXuGnXaiDo.png",
  "https://framerusercontent.com/images/mDAFuGTG4NAaw665xM33zATgsNE.jpeg",
  "https://framerusercontent.com/images/hXc8j0SvEuUr2atqcwhffmpvA.gif",
  "https://framerusercontent.com/images/9BBUT8p3Fy9ooHpJo3Tkr6SgmPk.gif",
  "https://framerusercontent.com/images/RxuYZ6DQ0tRG2WGR1ZS6zbGe4.png",
  "https://framerusercontent.com/images/37jBBBXPvGP91kUbWAAFldRY.png",
  "https://framerusercontent.com/images/crW1bXk5Sg9vhL4VWU8zlH31g3U.jpg",
  "https://framerusercontent.com/images/8lhPXTQ2zSsWYxQAwDsb5otWkqw.gif",
  "https://framerusercontent.com/images/9qgyYyproWJodiGjlk9qduHcRow.png",
];

const ASPECT_RATIOS = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-[16/9]",
];

const FeedCard = ({ title, date, thumbnail, href, index }: FeedCardProps) => {
  const imageSrc = thumbnail || UNSPLASH_IMAGES[index % UNSPLASH_IMAGES.length];
  const aspectRatio = ASPECT_RATIOS[index % ASPECT_RATIOS.length];
  const siteName = new URL(href, "https://trongduong.com").hostname.replace(
    "www.",
    "",
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="mb-10 break-inside-avoid"
    >
      <Link href={href} className="group block">
        {/* Thumbnail */}
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

        {/* Content */}
        <div className="mt-3 flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h2 className="line-clamp-2 text-sm font-medium text-zinc-100">
              {title}
            </h2>
            <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
              <time dateTime={date.toISOString()}>
                {format(date, "MMM d, yyyy")}
              </time>
              <span className="text-zinc-700">·</span>
              <span>{siteName}</span>
            </div>
          </div>

          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-400" />
        </div>
      </Link>
    </motion.article>
  );
};

const Page = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Feed</PageSectionTitle>
        <PageSectionDescription>
          I&apos;m no longer active on Dribbble so I built this lil place where
          I share my latest explorations. I also share WIPs on Twitter/X and
          more recently on Layers — come say hi!
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent>
        <main>
          {posts.length > 0 ? (
            <div className="columns-1 gap-10 space-y-0 sm:columns-2 lg:columns-3">
              {posts.map((post, index) => (
                <FeedCard
                  key={post._meta.path}
                  title={post.title}
                  date={new Date(post.date)}
                  thumbnail={post.thumbnail}
                  href={`/writing/${post._meta.path}`}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex min-h-[300px] items-center justify-center"
            >
              <p className="text-sm text-zinc-600">No posts yet.</p>
            </motion.div>
          )}
        </main>
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
