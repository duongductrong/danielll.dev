"use client";

import { MoodBoard } from "@/components/widgets/mood-board";
import { useElementSize } from "@/hooks";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, useEffect, useMemo, useState } from "react";
import { MOODBOARD_IMAGES, MoodboardImage } from "../constants";

type MoodItem = MoodboardImage & {
  x: number;
  y: number;
};

export interface JourneyMoodboardProps extends ComponentProps<"div"> {}

export const JourneyMoodboard = ({
  className,
  ...props
}: JourneyMoodboardProps) => {
  const [items, setItems] = useState<MoodItem[]>([]);
  const [containerRef, containerSize] = useElementSize<HTMLDivElement>();

  const hasValidSize = useMemo(
    () => containerSize.width > 0 && containerSize.height > 0,
    [containerSize.width, containerSize.height],
  );

  useEffect(() => {
    if (!hasValidSize) return;

    const maxX = containerSize.width / 2 - 100;
    const maxY = containerSize.height / 2 - 100;

    const newItems = MOODBOARD_IMAGES.map((item) => ({
      ...item,
      x: Math.random() * maxX * 2 - maxX,
      y: Math.random() * maxY * 2 - maxY,
    }));

    setItems(newItems);
  }, [hasValidSize, containerSize.width, containerSize.height]);

  return (
    <div {...props} className={cn(className)} data-slot="journey-moodboard">
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
              <MoodboardItemContent item={item} />
            </MoodBoard.Item>
          ))}
        </MoodBoard.Content>
      </MoodBoard>
    </div>
  );
};

interface MoodboardItemContentProps {
  item: MoodItem;
}

const MoodboardItemContent = ({ item }: MoodboardItemContentProps) => {
  return (
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

      {item.href && (
        <Link
          href={item.href}
          className={cn(
            "bg-primary text-background absolute top-0 right-0 grid size-8",
            "place-items-center opacity-0 transition-all duration-300 group-hover:opacity-100",
            "origin-top-right scale-0 group-hover:scale-100",
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${item.alt} in new tab`}
          tabIndex={0}
        >
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

