"use client";

import { pageContent } from "@/enums/page-content";
import { urls } from "@/enums/urls";
import { cn } from "@/lib/utils/tailwind";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import { GridItems } from "../components/grid-items";
import { MotionContainer, item } from "../components/motion-container";

const MotionImage = motion(Image);

export interface HomeProps {}

const HomePage = (props: HomeProps) => {
  const participatedWorks = useMemo(
    () =>
      pageContent.participated.map((item) => ({
        name: item.id,
        accessible: item.accessible === "public",
        referenceUrl: item.referenceSiteUrl,
      })),
    []
  );

  const labs = useMemo(
    () =>
      pageContent.labs.slice(0, 6).map((item) => ({
        name: item.id,
        accessible: item.accessible === "public",
        referenceUrl: item.referenceSiteUrl,
      })),
    []
  );

  return (
    <div
      {...props}
      className={cn(
        "font-geist-sans flex items-center justify-center py-10 px-6 md:px-0",
        "min-h-dvh w-full bg-labs-background text-labs-foreground"
      )}
    >
      <MotionContainer>
        <div className="relative inline-flex">
          <MotionImage
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            src="/assets/peeps-avatar-alpha-transparent.png"
            width={80}
            height={80}
            className="w-10 h-10 object-cover rounded-md mb-4 bg-labs-foreground cursor-pointer"
            alt="Avatar"
          />

          <p
            className={cn(
              "text-sm font-geist-mono absolute -top-10 -right-16 whitespace-nowrap transform rotate-[30deg]",
              "flex items-center flex-col gap-2"
            )}
          >
            about me
            <ArrowDown className="w-4 h-4 mr-8" />
          </p>
        </div>
        <motion.h1 variants={item} className="text-2xl font-bold mb-4">
          Daniel <span className="text-sm">Trong Duong</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="text-2xl font-light text-labs-muted mb-10"
        >
          As a software developer, I build responsive designs, optimize web
          performance, ensure smooth experiences across devices, and collaborate
          with cross-functional teams using modern frameworks.
        </motion.p>

        <GridItems
          variants={item}
          label="Selected Participate Works"
          className="mb-4"
          items={participatedWorks}
        />

        <GridItems
          variants={item}
          label="Pen Labs"
          viewMoreLabel="See all"
          viewMoreTo={urls.labs}
          items={labs}
        />
      </MotionContainer>

      {/* <AnimatePresence>
        {selectedId && (
          <>
            <motion.div className="absolute text-black" layoutId={selectedId}>
              <motion.div className="relative z-10 w-[300px] h-[150px] bg-background overflow-hidden">
                <motion.h5>Category</motion.h5>
                <motion.h2>Title</motion.h2>
                <motion.button onClick={() => setSelectedId(null)}>
                  Close
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
              className="fixed top-0 left-0 w-full h-lvh bg-black/50"
            ></motion.div>
          </>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default HomePage;
