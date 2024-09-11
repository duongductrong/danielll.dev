"use client";

import { cn } from "@/lib/utils/tailwind";
import { motion, Variants } from "framer-motion";
import { AudioWaveformIcon, BrainIcon } from "lucide-react";
import Image from "next/image";
import { HomeHeroAvatar } from "./home-hero-avatar";
import { HomeNavigation } from "./home-navigation";

const MotionImage = motion(Image);

const bigTextVariant: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: "easeInOut",
    },
  },
};

const bigTextChildVariant: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export interface HomeHeroPieceProps {}

export const HomeHero = (props: HomeHeroPieceProps) => {
  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="xs:mt-5 md:mt-0">
        <motion.h1
          variants={bigTextVariant}
          initial="initial"
          animate="visible"
          exit="initial"
          className="text-7xl md:text-[10.58vw] 4xl:text-[12.16rem] leading-tight xs:leading-normal font-gelatrial text-center overflow-hidden"
        >
          {"Daniel.".split("").map((char, idx) => (
            <motion.span
              key={idx}
              className={cn("inline-flex", char.includes("\n") ? "mr-10" : "")}
              variants={bigTextChildVariant}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          }}
          exit={{ opacity: 0 }}
          className="text-center text-foreground/80 md:mt-0"
        >
          A front-end developer. Passionate about open-source.
        </motion.p>

        <HomeNavigation className="mt-10 md:mt-10" />

        <HomeHeroAvatar />
      </div>

      <div
        className={cn(
          "flex items-center gap-4 justify-between",
          "pb-4 px-4 md:pb-24 md:px-8",
          "lg.next:pb-32 lg.next:px-32"
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-4 flex-col"
        >
          <BrainIcon className="w-6 h-6" />
          <p className="uppercase text-xxs text-center font-medium max-w-[250px]">
            Trong Duong (he/him) aka Dan is an frontend developer from Ho Chi
            Minh City, Vietnam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-4 flex-col"
        >
          <AudioWaveformIcon className="w-6 h-6" />
          <p className="uppercase text-xxs text-center font-medium max-w-[250px]">
            Passionate about creating unforgettable and beautiful digital
            <br className="hidden xs:block" />
            experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
