"use client";

import Container from "@/components/container";
import { pageContent } from "@/enums/page-content";
import { cn } from "@/lib/utils/tailwind";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface LabsViewPageProps {}

const LabsViewPage = (props: LabsViewPageProps) => {
  const MotionCard = motion(Link);

  return (
    <div className="bg-background text-foreground">
      <Container
        variant="default"
        className="border-l border-r border-border min-h-dvh py-10 px-6"
      >
        <h1 className="text-[18vw] font-gelatrial text-center mb-10">Labs</h1>

        <div className="flex items-center justify-between mb-10">
          <h2 className="max-w-[300px] text-2xl text-muted">
            High-quality ui coding practice. Made by{" "}
            <Link
              href="https://twitter.com/duongductrong_"
              className="text-foreground"
            >
              Dan
            </Link>
          </h2>
          <div className="flex flex-col gap-2 items-end">
            <p className="text-2xl">dan/labs</p>
            <p className="text-xl text-muted">
              {pageContent.labs.length} items.
            </p>
          </div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageContent.labs.map((labItem, index) => (
            <MotionCard
              role="presentation"
              href={labItem.referenceSiteUrl}
              className={cn(
                "block relative",
                "rounded-2xl overflow-hidden w-full min-h-[350px] border border-border",
                "flex items-center justify-center cursor-pointer"
              )}
              key={labItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >
              {labItem.thumbnail ? (
                <div
                  className="w-full h-full absolute top-0 left-0"
                  // px-20 py-6
                  // style={{
                  //   backgroundImage:
                  //     "linear-gradient(105deg, #005EFE 15%, #45B4FC, #E7A7E4, #D58100, #9F1602, #180001, #AB0501, #DA0301)",
                  // }}
                >
                  <Image
                    src={labItem.thumbnail}
                    alt="Thumbnail"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ) : null}

              {/* Overlays */}
              <div className="absolute top-0 left-0 w-full h-full bg-background/80"></div>

              <h2 className="text-3xl font-geist-mono tracking-widest relative z-10">
                {labItem.title}
              </h2>
            </MotionCard>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default LabsViewPage;
