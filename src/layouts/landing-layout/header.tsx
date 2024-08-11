"use client";

import { urls } from "@/enums/urls";
import { cn } from "@/lib/utils/tailwind";
import { AnimatePresence, motion } from "framer-motion";
import { BotIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MotionLink = motion(Link);
const MotionImage = motion(Image);

export interface LandingHeaderProps {}

export const LandingHeader = (props: LandingHeaderProps) => {
  const pathname = usePathname();

  const isHome = pathname === urls.landing.home;

  return (
    <header
      className={cn(
        "sticky top-0 left-0 py-2 sm:py-5 px-4 md:py-10 md:px-8",
        "flex items-center justify-between overflow-hidden",
        "z-50 transform-gpu will-change-transform text-foreground transition-all duration-300"
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="flex items-center gap-4 leading-snug w-full max-w-[20%]"
      >
        {isHome ? (
          <BotIcon className="w-6 h-6 shrink-0" />
        ) : (
          <AnimatePresence>
            <MotionImage
              whileHover={{ scale: 1.125 }}
              whileTap={{ scale: 0.95 }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              transition={{ duration: 0.5 }}
              src="/assets/peeps-avatar-alpha-transparent.png"
              width={40}
              height={40}
              className={cn(
                "size-8 object-cover rounded-md cursor-pointer rounded-full grayscale",
                "border border-foreground/10"
              )}
              alt="Avatar"
              placeholder="blur"
              blurDataURL="/assets/peeps-avatar-alpha-transparent.png"
            />
          </AnimatePresence>
        )}
        <p className="text-xxs invisible sm:visible">
          Open for any <br /> collaborations and freelance.
        </p>
      </motion.div>

      <MotionLink
        href={urls.landing.home}
        className="text-3xl font-bold font-gelatrial cursor-pointer"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        Daniel
      </MotionLink>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="max-w-[20%] w-full text-right text-xxs"
      >
        {isHome ? (
          "Folio v1.0"
        ) : (
          <div
            className={cn(
              "size-6 grid grid-cols-2 ml-auto cursor-pointer place-items-center",
              "transform hover:rotate-90 origin-center transition-all duration-300 ease-in-out"
            )}
          >
            <div className="size-1 rounded-full bg-foreground" />
            <div className="size-1 rounded-full bg-foreground" />
            <div className="size-1 rounded-full bg-foreground" />
            <div className="size-1 rounded-full bg-foreground" />
          </div>
        )}
      </motion.div>
    </header>
  );
};
