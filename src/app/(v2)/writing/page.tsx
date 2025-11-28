import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArticleCard } from "@/screens/writing/components/article-card";
import { FeaturedArticleCard } from "@/screens/writing/components/featured-article-card";
import { PenTool } from "lucide-react";
import { allPosts } from "content-collections";

const Page = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Latest Stories
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </div>

              {hasMultiplePosts ? (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <FeaturedArticleCard post={mainPost} className="h-full" />
                  </div>

                  <div className="flex flex-col gap-6 lg:col-span-5">
                    <div className="mb-2 hidden lg:block">
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                        More reads
                      </span>
                    </div>
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
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Archive
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {remainingPosts.map((post) => (
                    <ArticleCard key={post._meta.path} post={post} />
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
