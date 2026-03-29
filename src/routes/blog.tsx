import {
  Link,
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { blogPosts } from "@/features/blog/lib/blog-posts";
import { formatBlogDate } from "@/features/blog/lib/format-blog-date";
import { getEditorialContentVariants } from "@/lib/motion/get-editorial-content-variants";

export const Route = createFileRoute("/blog")({ component: BlogPage });

export function BlogPage() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isBlogIndexRoute = pathname === "/blog" || pathname === "/blog/";

  if (!isBlogIndexRoute) {
    return <Outlet />;
  }

  const shouldReduceMotion = useReducedMotion();
  const { container: contentContainerVariants, item: contentItemVariants } =
    getEditorialContentVariants(shouldReduceMotion, {
      delayChildren: 0.05,
      staggerChildren: 0.07,
    });

  return (
    <EditorialPage>
      <EditorialSection width="reading">
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.h1
            variants={contentItemVariants}
            className="mb-2 text-[15px] leading-[1.2] font-semibold tracking-[-0.015em]"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={contentItemVariants}
            className="text-foreground/72 mb-6"
          >
            Notes and experiments written in MDX.
          </motion.p>
          <motion.div variants={contentItemVariants}>
            <EditorialDivider className="mb-8" />
          </motion.div>

          {blogPosts.length > 0 ? (
            <ul className="space-y-7">
              {blogPosts.map((post) => (
                <motion.li variants={contentItemVariants} key={post.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group block rounded-xl transition-opacity duration-200 hover:opacity-72"
                  >
                    <p className="text-[16px] leading-[1.35] font-medium tracking-[-0.015em]">
                      {post.metadata.title}
                    </p>
                    <p className="text-foreground/72 mt-1">
                      {post.metadata.description}
                    </p>
                    <p className="text-foreground/48 mt-2 text-[12px]">
                      {formatBlogDate(post.metadata.date)}
                      {post.metadata.tags?.length ? (
                        <span> · {post.metadata.tags.join(" · ")}</span>
                      ) : null}
                    </p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          ) : (
            <motion.p
              variants={contentItemVariants}
              className="text-foreground/65"
            >
              No posts yet.
            </motion.p>
          )}

          <motion.div variants={contentItemVariants} className="mt-10">
            <Link
              to="/"
              className="text-foreground/45 hover:text-foreground/65 inline-block transition-colors duration-200"
            >
              home ‹
            </Link>
          </motion.div>
        </motion.div>
      </EditorialSection>
    </EditorialPage>
  );
}
