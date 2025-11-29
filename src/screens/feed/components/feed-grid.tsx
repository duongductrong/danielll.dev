"use client";

import { FeedCard } from "./feed-card";
import { FeedEmptyState } from "./feed-empty-state";

export type FeedPost = {
  title: string;
  date: Date | string;
  thumbnail?: string;
  link?: string;
  _meta: {
    path: string;
  };
};

type FeedGridProps = {
  posts: FeedPost[];
};

export const FeedGrid = ({ posts }: FeedGridProps) => {
  if (posts.length === 0) {
    return <FeedEmptyState />;
  }

  return (
    <div className="columns-1 gap-10 space-y-0 sm:columns-2 lg:columns-3">
      {posts.map((post, index) => (
        <FeedCard
          key={post._meta.path}
          title={post.title}
          date={new Date(post.date)}
          thumbnail={post.thumbnail}
          href={post.link || `/feed/${post._meta.path}`}
          index={index}
        />
      ))}
    </div>
  );
};
