import { cn } from "@/lib/utils";
import { ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface ManifestoProps extends ComponentProps<"section"> {}

export const Manifesto = ({ className, ...props }: ManifestoProps) => {
  return (
    <section
      {...props}
      data-slot="manifesto"
      className={cn("bg-card border border-border py-24", className)}
    >
      <article className="max-w-3xl mx-auto pt-8 border-t border-border">
        <h2 className="font-bold mb-10 flex items-center">
          <Bookmark className="size-4 mr-2" />
          Manifesto
        </h2>

        <h2 className="text-6xl font-bold font-dm-serif-display mb-8">
          Who am I, what kind of stuff I do, and why?
        </h2>

        <div className="text-paragraph prose max-w-full mb-12">
          I&apos;m a frontend developer and designer passionate about crafting
          exceptional digital experiences. My journey in web development began
          with a fascination for how interfaces can transform the way people
          interact with technology. Over the years, I&apos;ve honed my skills in
          React, Next.js, TypeScript, and modern UI frameworks, always striving
          to bridge the gap between beautiful design and robust engineering.{" "}
          <br /> <br />
          For me, development is more than writing code—it&apos;s about
          understanding problems deeply and creating solutions that truly serve
          users. I believe in the power of listening, learning, and iterating.
          Every project teaches me something new, and I approach each challenge
          with curiosity and dedication. My work is grounded in collaboration
          with teammates, mentors, and the communities I&apos;m part of. <br />{" "}
          <br />
          My mission is to build intuitive interfaces, scalable products, and
          thoughtful design systems that empower developers and delight users. I
          focus on creating tools and experiences that enhance productivity,
          celebrate attention to detail, and make complex tasks feel effortless.
          I&apos;m driven by the belief that great software can fundamentally
          improve how people work and live. <br /> <br />
          This space is a reflection of my growth as a developer and creator.
          Through continuous learning and hands-on experience, I&apos;ve
          developed principles that guide every project I undertake. These
          values—quality, accessibility, performance, and user-centricity—are at
          the core of everything I build. <br /> <br />
          Welcome to my digital home. This is where I share my work, document my
          experiments, and explore new ideas. It&apos;s more than a
          portfolio—it&apos;s a living space where I connect with fellow
          creators and push the boundaries of what&apos;s possible on the web.
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="font-bold mb-2 flex items-center">
            Continue your travel
          </h2>
          <p className="text-paragraph mb-8">Some suggestions for your next destination</p>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <Link href="/now" className="flex items-center justify-start gap-2 font-dm-serif-display text-4xl">
              <span className="font-medium">Now</span>
              <ArrowRight className="size-6" />
            </Link>
            <Link href="/feed" className="flex items-center justify-start gap-2 font-dm-serif-display text-4xl">
              <span className="font-medium">Feed</span>
              <ArrowRight className="size-6" />
            </Link>
            <Link href="/writing" className="flex items-center justify-start gap-2 font-dm-serif-display text-4xl">
              <span className="font-medium">Writing</span>
              <ArrowRight className="size-6" />
            </Link>
            <Link href="/track-record" className="flex items-center justify-start gap-2 font-dm-serif-display text-4xl">
              <span className="font-medium">Track Record</span>
              <ArrowRight className="size-6" />
            </Link>
            <Link href="/about" className="flex items-center justify-start gap-2 font-dm-serif-display text-4xl">
              <span className="font-medium">About</span>
              <ArrowRight className="size-6" />
            </Link>
            <Link href="/changelog" className="flex items-center justify-start gap-2 font-dm-serif-display text-4xl">
              <span className="font-medium">Changelog</span>
              <ArrowRight className="size-6" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
