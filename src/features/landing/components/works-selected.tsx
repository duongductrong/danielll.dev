"use client";

import { Button } from "@/components/ui/button";
import { pageContent } from "@/enums/page-content";
import { cn } from "@/lib/utils/tailwind";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { ComponentPropsWithoutRef, memo, useRef } from "react";

const MotionImage = motion(Image);

export interface WorkSelectedProps {}

export const WorksSelected = (props: WorkSelectedProps) => {
  const containerRef = useRef(null);
  const layoutRef = useRef(null);

  return (
    <motion.section ref={containerRef} className="min-h-[300vh]">
      <motion.div
        ref={layoutRef}
        className="sticky top-16 left-0 py-8 px-8 flex flex-col gap-8 h-full"
      >
        {pageContent.participated.map((participated, idx) => (
          <WorkSelectedItem
            key={participated.id}
            participated={participated}
            index={idx}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export interface WorkSelectedItemProps {
  index: number;
  participated: (typeof pageContent.participated)[0];
}

const WorkSelectedItem = memo(
  ({ participated, index }: WorkSelectedItemProps) => {
    const itemRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: itemRef,
      offset: ["center end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={itemRef}
        key={participated.id}
        initial={{ scale: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        style={
          {
            scale: scale,
          } as MotionStyle
        }
        className={cn(
          "sticky top-16 flex items-center justify-center",
          "shrink-0 h-[calc(100vh-4rem)] w-full rounded-lg group",
          " overflow-hidden",
          isEven
            ? "bg-foreground text-background"
            : "bg-primary text-foreground"
        )}
      >
        {participated.thumbnail ? (
          <MotionImage
            alt={participated.title}
            src={participated.thumbnail}
            width={600}
            height={400}
            className={cn(
              "grayscale w-[70%] h-[80%] opacity-25 object-cover object-top pointer-events-none",
              "transform-none will-change-transform group-hover:scale-105 transition-all duration-300"
            )}
          />
        ) : null}

        <div className="absolute">
          <p className="text-5xl font-gelatrial mb-4">{participated.title}</p>
          <p className="text-base font-geist-mono mb-10">
            {participated.description}
          </p>

          <div className="flex justify-evenly items-center">
            <WorkSelectedMark />
            <WorkSelectedViewButton
              className={isEven ? "text-background" : "text-foreground"}
            />
          </div>
        </div>
      </motion.div>
    );
  }
);

WorkSelectedItem.displayName = "WorkSelectedItem";

const WorkSelectedMark = () => {
  return <div className="bg-background size-8 animate-spin-slow" />;
};

export interface WorkSelectedViewButtonProps
  extends ComponentPropsWithoutRef<typeof Button> {}

const WorkSelectedViewButton = ({
  className,
  ...props
}: WorkSelectedViewButtonProps) => {
  return (
    <Button
      {...props}
      variant="link"
      className={cn("flex items-center gap-2 text-background", className)}
    >
      View project <ArrowRightIcon className="size-5" />
    </Button>
  );
};
