"use client";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { ArticleCard } from "@/screens/writing/components/article-card";
import { FeaturedArticleCard } from "@/screens/writing/components/featured-article-card";
import { allPosts } from "content-collections";
import { PenTool } from "lucide-react";
import { motion } from "motion/react";

const Page = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const mainPost = posts[0];
  const subFeaturedPosts = posts.slice(1, 4);
  const remainingPosts = posts.slice(4);

  const hasMultiplePosts = posts.length > 1;

  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Writing</PageSectionTitle>
        <PageSectionDescription>
          Discover my writing portfolio, where I share my thoughts, experiences,
          and insights on a variety of topics.
        </PageSectionDescription>
      </PageSectionHeader>

      <PageSectionContent className="space-y-16">
        {posts.length > 0 ? (
          <>
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                  Latest Stories
                </h2>
                <div className="from-border h-px flex-1 bg-gradient-to-r to-transparent" />
              </div>

              {hasMultiplePosts ? (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <FeaturedArticleCard post={mainPost} className="h-full" />
                  </div>

                  <div className="flex flex-col gap-2 lg:col-span-5">
                    {subFeaturedPosts.map((post) => (
                      <ArticleCard
                        key={post._meta.path}
                        post={post}
                        variant="horizontal"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <FeaturedArticleCard post={mainPost} className="max-w-2xl" />
              )}
            </section>

            {remainingPosts.length > 0 && (
              <section>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-8 flex items-center gap-4"
                >
                  <h2 className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                    Archive
                  </h2>
                  <div className="from-border h-px flex-1 bg-gradient-to-r to-transparent" />
                </motion.div>

                <div className="divide-border space-y-0 divide-y">
                  {remainingPosts.map((post) => (
                    <ArticleCard
                      key={post._meta.path}
                      post={post}
                      variant="horizontal"
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <Empty className="min-h-[400px]">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <PenTool />
              </EmptyMedia>
              <EmptyTitle>No stories yet</EmptyTitle>
              <EmptyDescription>
                I&apos;m working on something great. Check back soon!
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
