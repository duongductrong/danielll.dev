import type { ComponentType } from "react";

export interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  tags?: Array<string>;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  Content: ComponentType<Record<string, unknown>>;
}

interface BlogPostModule {
  default: ComponentType<Record<string, unknown>>;
  metadata?: BlogPostMetadata;
}

const postModules = import.meta.glob<BlogPostModule>("../content/*.mdx", {
  eager: true,
});

function getSlugFromPath(path: string) {
  const match = path.match(/\/([^/]+)\.mdx$/);
  return match?.[1] ?? "";
}

export const blogPosts: Array<BlogPost> = Object.entries(postModules)
  .map(([path, module]) => ({
    slug: getSlugFromPath(path),
    metadata: module.metadata ?? {
      title: "Untitled post",
      description: "",
      date: "1970-01-01",
      tags: [],
    },
    Content: module.default,
  }))
  .filter((post) => post.slug.length > 0)
  .sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
