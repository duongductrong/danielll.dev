"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { allPosts } from "content-collections";
import Link from "next/link";
import { motion } from "motion/react";
import { Terminal, ChevronRight, Hash, Folder, FileText } from "lucide-react";

const Page = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const currentYear = new Date().getFullYear();
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {} as Record<number, typeof posts>
  );

  const years = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* ASCII Header */}
      <header className="border-b border-emerald-500/20">
        <div className="mx-auto max-w-[1248px] px-6 py-12 lg:px-8">
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-xs leading-tight text-emerald-500/60 sm:text-sm"
          >
            {`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ██╗    ██╗██████╗ ██╗████████╗██╗███╗   ██╗ ██████╗        ║
║   ██║    ██║██╔══██╗██║╚══██╔══╝██║████╗  ██║██╔════╝        ║
║   ██║ █╗ ██║██████╔╝██║   ██║   ██║██╔██╗ ██║██║  ███╗       ║
║   ██║███╗██║██╔══██╗██║   ██║   ██║██║╚██╗██║██║   ██║       ║
║   ╚███╔███╔╝██║  ██║██║   ██║   ██║██║ ╚████║╚██████╔╝       ║
║    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝        ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
            `.trim()}
          </motion.pre>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <Terminal className="size-4 text-emerald-500" />
            <span className="text-emerald-500">~</span>
            <span className="text-foreground/80">
              cat /var/log/thoughts.md | grep -i &quot;interesting&quot;
            </span>
            <span className="animate-pulse text-emerald-500">▌</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            # A collection of {posts.length} articles on code, design, and everything in between.
          </motion.p>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-[1248px] px-6 py-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Folder className="size-3.5 text-amber-400" />
              <span>{years.length} years</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="size-3.5 text-blue-400" />
              <span>{posts.length} posts</span>
            </div>
            <div className="flex items-center gap-2">
              <Hash className="size-3.5 text-emerald-400" />
              <span>last modified: {posts[0] ? format(new Date(posts[0].date), "yyyy-MM-dd") : "N/A"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-[1248px] px-6 py-12 lg:px-8">
        {posts.length > 0 ? (
          <div className="space-y-12">
            {years.map((year, yearIndex) => (
              <motion.section
                key={year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: yearIndex * 0.1 }}
              >
                {/* Year Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-lg font-bold",
                      year === currentYear ? "text-emerald-400" : "text-muted-foreground"
                    )}>
                      {year}
                    </span>
                    {year === currentYear && (
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] uppercase text-emerald-400">
                        current
                      </span>
                    )}
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">
                    {groupedPosts[year].length} {groupedPosts[year].length === 1 ? "entry" : "entries"}
                  </span>
                </div>

                {/* Posts List */}
                <div className="space-y-1">
                  {groupedPosts[year].map((post, postIndex) => (
                    <motion.div
                      key={post._meta.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: yearIndex * 0.1 + postIndex * 0.05 }}
                    >
                      <Link
                        href={`/writing/${post._meta.path}`}
                        className="group flex items-start gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-emerald-500/5"
                      >
                        <span className="mt-0.5 shrink-0 text-xs text-muted-foreground/60">
                          {format(new Date(post.date), "MM-dd")}
                        </span>
                        
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <ChevronRight className="size-3 shrink-0 text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100" />
                            <h3 className="truncate text-foreground transition-colors group-hover:text-emerald-400">
                              {post.title}
                            </h3>
                          </div>
                          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                            {post.summary}
                          </p>
                        </div>

                        <span className="hidden shrink-0 text-xs text-muted-foreground/40 sm:block">
                          ./{post._meta.fileName.replace(".mdx", ".md")}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <pre className="mb-4 text-xs text-muted-foreground">
              {`
  ┌──────────────────────────────────┐
  │                                  │
  │    $ ls ./posts                  │
  │    total 0                       │
  │                                  │
  │    No posts found.               │
  │                                  │
  └──────────────────────────────────┘
              `.trim()}
            </pre>
            <p className="text-sm text-muted-foreground">
              <span className="text-emerald-500">$</span> echo &quot;Coming soon...&quot;
            </p>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 border-t border-border pt-8"
        >
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">$</span>
              <span>EOF</span>
            </div>
            <div className="flex items-center gap-4">
              <span>vim ~/.thoughts</span>
              <span className="text-muted-foreground/40">|</span>
              <span>:wq</span>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Page;

