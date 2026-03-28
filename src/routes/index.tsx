import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";

export const Route = createFileRoute("/")({ component: HomePage });

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const contentContainerVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.36,
            ease: [0.22, 1, 0.36, 1],
            delayChildren: 0.06,
            staggerChildren: 0.075,
          },
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
        },
      };
  const contentItemVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.18, ease: [0.33, 1, 0.68, 1] },
        },
      };

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <main className="mx-auto w-full max-w-[1366px] px-6 pt-16 pb-20 sm:px-8 sm:pt-20">
        <section className="mx-auto w-full max-w-[430px] text-[15px] leading-[1.62] tracking-[-0.012em] sm:max-w-[440px]">
          <motion.div
            variants={contentContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h1
              variants={contentItemVariants}
              className="mb-4 text-[15px] leading-[1.2] font-semibold tracking-[-0.015em]"
            >
              Trong Duong
            </motion.h1>
            <motion.p variants={contentItemVariants} className="mb-5">
              I&apos;m a software developer at VNG.
            </motion.p>
            <motion.p variants={contentItemVariants} className="mb-5">
              I build web experiences with React, TypeScript, and thoughtful
              interaction design. My work blends product thinking with clean
              engineering so interfaces feel fast, clear, and human.
            </motion.p>
            <motion.p variants={contentItemVariants} className="mb-5">
              I care deeply about performance and detail. From architecture to
              micro-interactions, I enjoy shaping products that are both robust
              and delightful to use. I also maintain open-source projects
              focused on developer experience and performance.
            </motion.p>
            <motion.p variants={contentItemVariants} className="mb-5">
              If my open-source work helps you, consider supporting it on{" "}
              <a
                href="https://github.com/sponsors/duongductrong"
                target="_blank"
                rel="noreferrer"
                className="underline transition-colors duration-200 hover:text-black/50"
              >
                GitHub Sponsors
              </a>
              .
            </motion.p>
            <motion.p variants={contentItemVariants} className="mb-2">
              I occasionally share notes and experiments.
            </motion.p>
            <motion.p
              variants={contentItemVariants}
              className="inline-block text-black/26"
            >
              <a
                href="https://snapzy.app/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-black/50"
              >
                snapzy.app ↗
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/duongductrong"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-black/50"
              >
                github ↗
              </a>
            </motion.p>
            <motion.div
              variants={contentItemVariants}
              className="my-4 h-px w-16 bg-black/8"
            />
            <motion.p variants={contentItemVariants}>
              Get in touch{" "}
              <a
                href="https://github.com/duongductrong"
                target="_blank"
                rel="noreferrer"
                className="underline transition-colors duration-200 hover:text-black/50"
              >
                @duongductrong
              </a>{" "}
              or{" "}
              <a
                href="mailto:duongductrong06@gmail.com"
                className="underline transition-colors duration-200 hover:text-black/70"
              >
                duongductrong06@gmail.com
              </a>{" "}
            </motion.p>
            <motion.div variants={contentItemVariants}>
              <Link
                to="/legacy"
                className="mt-2 inline-block text-black/35 transition-colors duration-200 hover:text-black/55"
              >
                legacy ›
              </Link>
            </motion.div>
            <motion.div variants={contentItemVariants}>
              <PolaroidStrip shouldReduceMotion={shouldReduceMotion} />
            </motion.div>
            <motion.p
              variants={contentItemVariants}
              className="mt-16 text-[12px] text-black/40"
            >
              This interface is inspired by{" "}
              <a
                href="https://www.aidenybai.com/"
                target="_blank"
                rel="noreferrer"
                className="underline transition-colors duration-200 hover:text-black/60"
              >
                Aiden Bai
              </a>
              .
            </motion.p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
