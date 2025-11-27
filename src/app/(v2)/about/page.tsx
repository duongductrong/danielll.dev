/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MoodBoard } from "@/components/widgets/mood-board";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { contacts } from "@/constants/contact";
import { useElementSize } from "@/hooks";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MOODBOARD_IMAGES = [
  {
    id: 1,
    src: "https://cdn.dribbble.com/userupload/11906450/file/original-4552488e1e26f38d5c0f14ff3cdfcf09.jpg?resize=1504x1128&vertical=center",
    alt: "Abstract Fluid Art",
    href: "/",
  },
  {
    id: 2,
    src: "https://cdn.dribbble.com/userupload/45027551/file/b6e66789095ff07891fdcba133b3405c.jpg?resize=1504x1128&vertical=center",
    alt: "Minimal Interior",
    href: "/",
  },
  {
    id: 3,
    src: "https://cdn.dribbble.com/userupload/43653165/file/original-86d0aaf6704fbcc47336e0271728b602.png?resize=1504x1128&vertical=center",
    alt: "Texture Detail",
    href: "/",
  },
  {
    id: 4,
    src: "https://cdn.dribbble.com/userupload/43178545/file/original-9351d41c5d58e4d1225fd365f3020f0c.png?resize=1504x1128&vertical=center",
    alt: "Minimal Plant",
    href: "/",
  },
  {
    id: 5,
    src: "https://cdn.dribbble.com/userupload/18422813/file/original-7b48eea7aa3b619612a6ad5c38f2771e.png?resize=1504x1128&vertical=center",
    alt: "Abstract Shapes",
    href: "",
  },
];

type MoodItem = (typeof MOODBOARD_IMAGES)[0] & {
  x: number;
  y: number;
};

const Page = () => {
  const [items, setItems] = useState<MoodItem[]>([]);

  const [containerRef, containerSize] = useElementSize<HTMLDivElement>();

  useEffect(() => {
    if (!containerSize.width || !containerSize.height) return;

    const maxX = containerSize.width / 2 - 100;
    const maxY = containerSize.height / 2 - 100;

    const newItems = MOODBOARD_IMAGES.map((item) => ({
      ...item,
      x: Math.random() * maxX * 2 - maxX,
      y: Math.random() * maxY * 2 - maxY,
    }));
    setItems(newItems);
  }, [containerRef.current]);

  return (
    <>
      <PageSection display="fluid" className="mb-12">
        <PageSectionHeader>
          <PageSectionTitle>About my journey</PageSectionTitle>
          <PageSectionDescription>
            Learn more about my background, experience, and what I&apos;m
            passionate about.
          </PageSectionDescription>
        </PageSectionHeader>

        <PageSectionContent className="lg:px-12">
          <MoodBoard>
            <MoodBoard.Content ref={containerRef} overflowHidden>
              <MoodBoard.Grid duration={1.2} />

              {items.map((item) => (
                <MoodBoard.Item
                  key={item.id}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.1}
                  dragMomentum={true}
                  dragTransition={{
                    bounceStiffness: 300,
                    bounceDamping: 20,
                    power: 0.2,
                    timeConstant: 200,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: item.x,
                    y: item.y,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="hover:border-primary group w-48 border border-transparent sm:w-64"
                >
                  <div className="relative w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={200}
                      height={200}
                      className="pointer-events-none h-full w-full object-cover"
                    />

                    <div
                      className={cn(
                        "bg-primary text-background absolute top-full -left-px flex items-center px-2",
                        "uppercase opacity-0 transition-all duration-300 group-hover:opacity-100",
                        "h-0 group-hover:h-6",
                      )}
                    >
                      <p className="text-xs font-medium">{item.alt}</p>
                    </div>

                    <Link
                      href={item.href}
                      className={cn(
                        "bg-primary text-background absolute top-0 right-0 grid size-8",
                        "place-items-center opacity-0 transition-all duration-300 group-hover:opacity-100",
                        "origin-top-right scale-0 group-hover:scale-100",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </div>
                </MoodBoard.Item>
              ))}
            </MoodBoard.Content>
          </MoodBoard>
        </PageSectionContent>
      </PageSection>

      <PageSection as="article" variant="default" className="mb-32">
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-sm">My Journey</p>
          <p className="mb-12 text-base font-semibold">
            Starting point, focus, and personal life
          </p>
          <h2 className="font-title mb-8 text-4xl">
            I’m a software engineer and maker with a focus on developer
            experience.
          </h2>

          <p className="text-paragraph mb-4 text-lg">
            My journey into software engineering began with a curiosity about
            how things work under the hood. What started as tinkering with code
            quickly evolved into a passion for creating meaningful digital
            experiences. I&apos;ve always been drawn to the intersection of
            design and functionality, where elegant solutions meet real user
            needs.
          </p>

          <p className="text-paragraph text-lg">
            Beyond the keyboard, I value balance and continuous growth. I&apos;m
            an avid learner who thrives on exploring new technologies and
            methodologies. When I&apos;m not coding, you&apos;ll find me
            contributing to open-source projects, mentoring fellow developers,
            or simply enjoying life&apos;s moments with family and friends. I
            believe that the best work comes from a well-rounded life.
          </p>

          <div className="text-muted-foreground my-8 flex flex-wrap gap-x-5 gap-y-2 text-base">
            {contacts.map((contact) => (
              <a
                key={contact.text}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1"
              >
                <Circle className="mr-1 size-2" />
                {contact.text}
              </a>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="mb-32">
        <PageSectionHeader variant="title">
          <PageSectionTitle>I love making stuffs</PageSectionTitle>
          <PageSectionDescription>
            Alongside my day job, I like to spend part of my free time into
            various projects, adding features to my personal website, creating
            tools for engineers.
          </PageSectionDescription>
        </PageSectionHeader>
      </PageSection>

      <PageSection>
        <PageSectionHeader variant="title">
          <PageSectionTitle>Recommendations</PageSectionTitle>
          <PageSectionDescription>
            Throughout my career, I&apos;ve had the privilege of working with
            talented professionals who have shared their perspectives on our
            collaborations. Here&apos;s what they have to say.
          </PageSectionDescription>
        </PageSectionHeader>
      </PageSection>
    </>
  );
};

export default Page;
