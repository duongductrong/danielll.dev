import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";
import { getEditorialContentVariants } from "@/lib/motion/get-editorial-content-variants";

export const Route = createFileRoute("/")({ component: HomePage });

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const { container: contentContainerVariants, item: contentItemVariants } =
    getEditorialContentVariants(shouldReduceMotion);

  return (
    <EditorialPage>
      <EditorialSection width="compact">
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
            and delightful to use. I also maintain open-source projects focused
            on developer experience and performance.
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
          <motion.p variants={contentItemVariants} className="mb-4">
            I occasionally share{" "}
            <Link
              to="/blog"
              className="text-black/45 transition-colors duration-200 hover:text-black/65"
            >
              notes and experiments
            </Link>
            .
          </motion.p>
          <motion.p
            variants={contentItemVariants}
            className="inline-block text-black/26"
          >
            <a
              href="https://snapzy.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black/50"
            >
              <img
                src="/images/apps/snapzy/brand-logo.png"
                alt=""
                aria-hidden="true"
                className="size-4 rounded-[4px] object-cover"
              />
              <span>snapzy.app ↗</span>
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
          <motion.div variants={contentItemVariants}>
            <EditorialDivider className="my-4 bg-black/8" />
          </motion.div>
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
      </EditorialSection>
      {/* <section className="mx-auto mt-20 w-full max-w-[1150px]">
        <ModularBlockShowcase shouldReduceMotion={shouldReduceMotion} />
      </section> */}
    </EditorialPage>
  );
}
