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
import { useElementSize } from "@/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";

const MOODBOARD_IMAGES = [
  {
    id: 1,
    src: "https://cdn.dribbble.com/userupload/11906450/file/original-4552488e1e26f38d5c0f14ff3cdfcf09.jpg?resize=1504x1128&vertical=center",
    alt: "Abstract Fluid Art",
  },
  {
    id: 2,
    src: "https://cdn.dribbble.com/userupload/45027551/file/b6e66789095ff07891fdcba133b3405c.jpg?resize=1504x1128&vertical=center",
    alt: "Minimal Interior",
  },
  {
    id: 3,
    src: "https://cdn.dribbble.com/userupload/43653165/file/original-86d0aaf6704fbcc47336e0271728b602.png?resize=1504x1128&vertical=center",
    alt: "Texture Detail",
  },
  {
    id: 4,
    src: "https://cdn.dribbble.com/userupload/43178545/file/original-9351d41c5d58e4d1225fd365f3020f0c.png?resize=1504x1128&vertical=center",
    alt: "Minimal Plant",
  },
  {
    id: 5,
    src: "https://cdn.dribbble.com/userupload/18422813/file/original-7b48eea7aa3b619612a6ad5c38f2771e.png?resize=1504x1128&vertical=center",
    alt: "Abstract Shapes",
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
    <PageSection display="fluid">
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
                className="w-48 sm:w-64"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className="pointer-events-none h-full w-full object-cover"
                  />
                </div>
              </MoodBoard.Item>
            ))}
          </MoodBoard.Content>
        </MoodBoard>
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
