import { Link, createFileRoute } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";

export const Route = createFileRoute("/")({ component: HomePage });

function LuckyCloverMark() {
  return (
    <svg
      viewBox="0 0 120 150"
      className="h-[84px] w-[84px]"
      role="img"
      aria-label="Lucky clover mark"
    >
      <defs>
        {/* Top leaf gradient — light from upper-left */}
        <radialGradient id="hc-top-g" cx="40%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#6ECF72" />
          <stop offset="50%" stopColor="#49A84F" />
          <stop offset="100%" stopColor="#327A3A" />
        </radialGradient>
        {/* Right leaf gradient — light from upper-right */}
        <radialGradient id="hc-right-g" cx="65%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#6DD370" />
          <stop offset="50%" stopColor="#46A44C" />
          <stop offset="100%" stopColor="#2F7536" />
        </radialGradient>
        {/* Bottom leaf gradient — light from center */}
        <radialGradient id="hc-bottom-g" cx="50%" cy="55%" r="75%">
          <stop offset="0%" stopColor="#5CC460" />
          <stop offset="50%" stopColor="#3F9A45" />
          <stop offset="100%" stopColor="#2A6E32" />
        </radialGradient>
        {/* Left leaf gradient — light from upper-left */}
        <radialGradient id="hc-left-g" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#6ECF72" />
          <stop offset="50%" stopColor="#49A84F" />
          <stop offset="100%" stopColor="#327A3A" />
        </radialGradient>
        {/* Stem gradient */}
        <linearGradient id="hc-stem-g" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#327A3A" />
          <stop offset="50%" stopColor="#4A9E52" />
          <stop offset="100%" stopColor="#6BB870" />
        </linearGradient>
        {/* Highlight overlays */}
        <radialGradient id="hc-hi-tl" cx="30%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#B8F5BC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#B8F5BC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hc-hi-tr" cx="70%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#B8F5BC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B8F5BC" stopOpacity="0" />
        </radialGradient>
        {/* Center shadow */}
        <radialGradient id="hc-center-sh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E5C28" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#1E5C28" stopOpacity="0" />
        </radialGradient>
        {/* Soft shadow filter */}
        <filter id="hc-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="1.8"
            floodColor="#1a4d24"
            floodOpacity="0.22"
          />
        </filter>
      </defs>

      {/* Entire clover tilted ~12° clockwise for organic feel */}
      <g transform="rotate(12 60 62)" filter="url(#hc-shadow)">
        {/*
          Each leaf is a heart shape:
          - Two cubic beziers form two rounded lobes
          - A cleft/notch at the outer tip
          - Tapers to a point at the center
        */}

        {/* ===== TOP LEAF ===== */}
        <path
          d="M60 60
             C58 46, 44 24, 38 24
             C30 24, 24 34, 26 42
             C28 50, 36 58, 60 60
             Z"
          fill="url(#hc-top-g)"
        />
        <path
          d="M60 60
             C62 46, 76 24, 82 24
             C90 24, 96 34, 94 42
             C92 50, 84 58, 60 60
             Z"
          fill="url(#hc-top-g)"
        />
        {/* Top leaf vein */}
        <path
          d="M60 60 C60 50, 60 36, 60 26"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1.0"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        {/* Top leaf highlight */}
        <ellipse cx="52" cy="38" rx="8" ry="10" fill="url(#hc-hi-tl)" />
        <ellipse cx="68" cy="38" rx="8" ry="10" fill="url(#hc-hi-tr)" />

        {/* ===== RIGHT LEAF ===== */}
        <path
          d="M60 60
             C74 58, 96 44, 96 38
             C96 30, 86 24, 78 26
             C70 28, 62 36, 60 60
             Z"
          fill="url(#hc-right-g)"
        />
        <path
          d="M60 60
             C74 62, 96 76, 96 82
             C96 90, 86 96, 78 94
             C70 92, 62 84, 60 60
             Z"
          fill="url(#hc-right-g)"
        />
        {/* Right leaf vein */}
        <path
          d="M60 60 C70 60, 84 60, 94 60"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1.0"
          strokeOpacity="0.50"
          strokeLinecap="round"
        />

        {/* ===== BOTTOM LEAF ===== */}
        <path
          d="M60 60
             C62 74, 76 96, 82 96
             C90 96, 96 86, 94 78
             C92 70, 84 62, 60 60
             Z"
          fill="url(#hc-bottom-g)"
        />
        <path
          d="M60 60
             C58 74, 44 96, 38 96
             C30 96, 24 86, 26 78
             C28 70, 36 62, 60 60
             Z"
          fill="url(#hc-bottom-g)"
        />
        {/* Bottom leaf vein */}
        <path
          d="M60 60 C60 70, 60 84, 60 94"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1.0"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />

        {/* ===== LEFT LEAF ===== */}
        <path
          d="M60 60
             C46 62, 24 76, 24 82
             C24 90, 34 96, 42 94
             C50 92, 58 84, 60 60
             Z"
          fill="url(#hc-left-g)"
        />
        <path
          d="M60 60
             C46 58, 24 44, 24 38
             C24 30, 34 24, 42 26
             C50 28, 58 36, 60 60
             Z"
          fill="url(#hc-left-g)"
        />
        {/* Left leaf vein */}
        <path
          d="M60 60 C50 60, 36 60, 26 60"
          fill="none"
          stroke="#2B6E34"
          strokeWidth="1.0"
          strokeOpacity="0.50"
          strokeLinecap="round"
        />

        {/* ===== CENTER ===== */}
        <circle cx="60" cy="60" r="6" fill="url(#hc-center-sh)" />
        <circle cx="60" cy="60" r="3.5" fill="#2D8A3E" />
        <circle cx="58.8" cy="58.2" r="1.6" fill="#B8F0BE" fillOpacity="0.50" />

        {/* ===== STEM ===== */}
        <path
          d="M60 66 C62 82, 58 104, 50 130"
          fill="none"
          stroke="url(#hc-stem-g)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Stem highlight */}
        <path
          d="M61 67 C62.5 82, 59 103, 51.5 128"
          fill="none"
          stroke="#A8E8AD"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div>
          <div className="mb-2 w-fit">
            <LuckyCloverMark />
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
          <p className="inline-block text-black/26">
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
          </p>
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
          <div>
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
          <p className="mt-16 text-[12px] text-black/40">
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
