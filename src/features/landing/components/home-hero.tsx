"use client";

import { cn } from "@/lib/utils/tailwind";
import { motion, Variants } from "framer-motion";
import { AudioWaveformIcon, BrainIcon } from "lucide-react";
import Image from "next/image";
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
          className="text-7xl md:text-[10.58vw] leading-tight xs:leading-normal font-gelatrial text-center overflow-hidden"
        >
          {"Daniel\n.".split("").map((char, idx) => (
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
          a software engineer, a tiny thing on this planet.
        </motion.p>

        <HomeNavigation className="mt-10 md:mt-10" />
      </div>

      <div className="flex items-center justify-between pb-4 px-4 md:pb-24 md:px-8 lg:pb-32 lg:px-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-4 flex-col"
        >
          <BrainIcon className="w-6 h-6" />
          <p className="uppercase text-xxs text-center font-medium max-w-[250px]">
            Trong Duong (he/him) aka Dan is an independent developer from Ho Chi
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
            <br className="hidden sm:block" />
            experiences.
          </p>
        </motion.div>
      </div>

      <motion.div
        className={cn(
          "absolute bottom-[13.17vh] md:bottom-4 left-1/2 transform -translate-x-1/2",
          "select-none rounded-full"
        )}
      >
        <MotionImage
          whileHover={{ scale: 1.125 }}
          whileTap={{ scale: 0.95 }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          // initial={{ opacity: 0, scale: 0, rotate: 360 }}
          // animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: -360 }}
          transition={{ duration: 0.25 }}
          src="/assets/peeps-avatar-alpha-transparent.png"
          width={550}
          height={550}
          className={cn(
            "h-[46vw] w-[35vw]",
            "xs:h-[32.68vh] xs:w-[47vw]",
            "md:h-[40.98vh] md:w-[40vw]",
            "lg.next:h-[14.5vw] lg.next:w-[12vw]",
            "object-cover rounded-md sm:mb-4 md:mb-44 lg.next:mb-4 cursor-pointer rounded-full grayscale",
            "border border-foreground/10 bg-foreground lg.next:bg-background"
          )}
          alt="Avatar"
          placeholder="blur"
          blurDataURL="/assets/peeps-avatar-alpha-transparent.png"
        />
      </motion.div>
    </div>
  );
};
