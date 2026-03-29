import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { BlogProse } from "@/features/blog/components/blog-prose";
import { getBlogPostBySlug } from "@/features/blog/lib/blog-posts";
import { formatBlogDate } from "@/features/blog/lib/format-blog-date";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) throw notFound();

    return { slug: params.slug };
  },
  component: BlogDetailPage,
});

export function BlogDetailPage() {
  const { slug } = Route.useLoaderData();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    throw notFound();
  }

  const Content = post.Content;

  return (
    <EditorialPage>
      <EditorialSection width="reading">
        <div>
          <p className="mb-2">
            <Link
              to="/blog"
              className="text-foreground/45 hover:text-foreground/65 inline-block transition-colors duration-200"
            >
              Blog
            </Link>
          </p>
          <p className="text-foreground/72 mb-6">
            Notes and experiments written in MDX.
          </p>
          <EditorialDivider className="mb-8" />

          <header className="mb-8">
            <h1 className="text-[30px] leading-[1.12] font-semibold tracking-[-0.03em] sm:text-[34px]">
              {post.metadata.title}
            </h1>
            {post.metadata.description ? (
              <p className="text-foreground/72 mt-3">
                {post.metadata.description}
              </p>
            ) : null}
            <p className="text-foreground/48 mt-3 text-[12px]">
              {formatBlogDate(post.metadata.date)}
              {post.metadata.tags?.length ? (
                <span> · {post.metadata.tags.join(" · ")}</span>
              ) : null}
            </p>
          </header>

          <BlogProse>
            <Content />
          </BlogProse>

          <div className="mt-10">
            <Link
              to="/blog"
              className="text-foreground/45 hover:text-foreground/65 inline-block transition-colors duration-200"
            >
              blog ‹
            </Link>
          </div>
        </div>
      </EditorialSection>
    </EditorialPage>
  );
}
