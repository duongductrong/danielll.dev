import { Link, createFileRoute } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { PixelSpriteRenderer } from "@/features/home/components/pixel-sprite-renderer";
import { PixelTypingEffect } from "@/features/home/components/pixel-typing-effect";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";
import { SnapzyDock } from "@/features/home/components/snapzy-dock";

export const Route = createFileRoute("/")({ component: HomePage });

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div>
          <div className="mb-4 flex items-end gap-3">
            <div className="flex items-end gap-2">
              <PixelSpriteRenderer variant="codex" animation="idle" scale={4} />
              <PixelSpriteRenderer
                variant="claude"
                animation="idle"
                scale={3}
              />
              <PixelSpriteRenderer variant="cat" animation="idle" scale={3} />
            </div>
            <PixelTypingEffect
              phrases={[
                "hello, world",
                "codex, claude and cat are building products",
                "and shipping it fast_",
              ]}
              className="mb-1 font-mono text-[11px] leading-none tracking-wider text-black/30"
            />
          </div>

          <h1 className="mb-4 text-[15px] leading-[1.2] font-semibold tracking-[-0.015em]">
            Trong Duong
          </h1>
          <p className="mb-5">I&apos;m a software developer at VNG.</p>
          <p className="mb-5">
            I build web experiences with React, TypeScript, and thoughtful
            interaction design. My work blends product thinking with clean
            engineering so interfaces feel fast, clear, and human.
          </p>
          <p className="mb-5">
            I care deeply about performance and detail. From architecture to
            micro-interactions, I enjoy shaping products that are both robust
            and delightful to use. I also maintain open-source projects focused
            on developer experience and performance.
          </p>
          <p className="mb-5">
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
          </p>
          <p className="mb-4">
            I occasionally share{" "}
            <Link
              to="/blog"
              className="text-black/45 transition-colors duration-200 hover:text-black/65"
            >
              notes and experiments
            </Link>
            .
          </p>
          <div className="mb-4">
            <SnapzyDock shouldReduceMotion={!!shouldReduceMotion} />
          </div>
          <div>
            <EditorialDivider className="my-4 bg-black/8" />
          </div>
          <p>
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
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/garden"
              className="mt-2 inline-block text-black/35 transition-colors duration-200 hover:text-black/55"
            >
              garden ›
            </Link>
            <Link
              to="/legacy"
              className="mt-2 inline-block text-black/35 transition-colors duration-200 hover:text-black/55"
            >
              legacy ›
            </Link>
          </div>
          <div>
            <PolaroidStrip shouldReduceMotion={shouldReduceMotion} />
          </div>
          <p className="mt-12 text-[12px] text-black/40">
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
          </p>
        </div>
      </EditorialSection>
      {/* <section className="mx-auto mt-20 w-full max-w-[1150px]">
        <ModularBlockShowcase shouldReduceMotion={shouldReduceMotion} />
      </section> */}
    </EditorialPage>
  );
}
