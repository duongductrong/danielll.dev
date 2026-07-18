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
          <p className="mb-5">
            I&apos;m a software developer at VNG focused on building fast web experiences.
          </p>
          <p className="mb-5">
            I focus heavily on performance because I love how it shapes a better user experience. I also enjoy building products that directly solve real user paint points.
          </p>
          <p className="mb-5">
            Outside of work, I maintain open-source developer tools. If my work helps you, consider supporting it on{" "}
            <a
              href="https://github.com/sponsors/duongductrong"
              target="_blank"
              rel="noreferrer"
              className="underline transition-colors duration-200 hover:text-black/50"
            >
              GitHub Sponsors
            </a>{" "}
            or{" "}
            <a
              href="https://ko-fi.com/duongductrong"
              target="_blank"
              rel="noreferrer"
              className="underline transition-colors duration-200 hover:text-black/50"
            >
              Ko-fi
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
