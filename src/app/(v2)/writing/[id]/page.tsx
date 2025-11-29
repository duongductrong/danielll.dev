import { Container } from "@/components/ui/container";
import { calculateReadingTime } from "@/lib/mdx";
import {
  ArticleFooter,
  ArticleHeader,
  ArticleMedia,
  ArticleNavigation,
  mdxComponents,
} from "@/screens/writing";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = allPosts.find((p) => p._meta.path === id);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.mdx);
  const relatedPosts = allPosts
    .filter((p) => p._meta.path !== id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <article className="bg-background text-foreground min-h-screen">
      <Container className="px-6 pt-12 pb-24 md:pt-16">
        <ArticleNavigation />

        <ArticleHeader
          title={post.title}
          summary={post.summary}
          date={new Date(post.date)}
          readingTime={readingTime}
        />

        <ArticleMedia title={post.title} thumbnail={post.thumbnail} />

        <div className="prose-article mx-auto max-w-3xl">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </div>

        <ArticleFooter relatedPosts={relatedPosts} />
      </Container>
    </article>
  );
}
