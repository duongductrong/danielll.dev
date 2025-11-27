import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { ArticleCard, Post } from "@/screens/writing/components/article-card";
import { FeaturedArticleCard } from "@/screens/writing/components/featured-article-card";
// import { allPosts } from "content-collections";

// Mock data generation
const MOCK_THUMBNAILS = [
  "/assets/projects/langfarm/langfarm-home.png",
  "/assets/projects/edgee/edgee-art-home.png",
  "/assets/projects/casio/casio-home.png",
];

const generateMockPosts = (
  count: number,
): (Post & { thumbnail?: string })[] => {
  return Array.from({ length: count }).map((_, i) => ({
    title: `The Future of UI Design: Trends to Watch in ${2025 + i}`,
    summary:
      "Exploring the upcoming trends in user interface design, from glassmorphism to neomorphism and beyond. How these styles impact user experience and accessibility.",
    date: new Date(Date.now() - i * 86400000 * 14).toISOString(),
    author: "Duong Duc Trong",
    _meta: {
      path: `mock-post-${i}`,
      filePath: `content/posts/mock-post-${i}.mdx`,
      fileName: `mock-post-${i}.mdx`,
    },
    thumbnail: i === 0 ? MOCK_THUMBNAILS[0] : undefined, // Only the first one has a thumbnail
  }));
};

const Page = () => {
  const mockPosts = generateMockPosts(12);

  const posts = mockPosts;

  const mainPost = posts[0];
  const subFeaturedPosts = posts.slice(1, 3);
  const remainingPosts = posts.slice(3);

  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Writing</PageSectionTitle>
        <PageSectionDescription>
          Discover my writing portfolio, where I share my thoughts, experiences,
          and insights on a variety of topics.
        </PageSectionDescription>
      </PageSectionHeader>

      <PageSectionContent className="space-y-12">
        {/* Featured Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Latest Stories</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Main Featured Article (Left/Top, Large) */}
            <div className="lg:col-span-2">
              <FeaturedArticleCard post={mainPost} className="h-full" />
            </div>

            {/* Sub-featured Articles (Right/Bottom, Stacked) */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {subFeaturedPosts.map((post) => (
                <ArticleCard key={post._meta.path} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Archive Section */}
        {remainingPosts.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-muted-foreground text-xl font-bold tracking-tight">
              Archive
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => (
                <ArticleCard key={post._meta.path} post={post} />
              ))}
            </div>
          </section>
        )}
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
