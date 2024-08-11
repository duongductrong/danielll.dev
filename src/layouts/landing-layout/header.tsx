"use client";

import { urls } from "@/enums/urls";
import { BotIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/tailwind";

const MotionLink = motion(Link);

export interface LandingHeaderProps {}

export const LandingHeader = (props: LandingHeaderProps) => {
  const pathname = usePathname();

  const isHome = pathname === urls.landing.home;

  return (
    <header
      className={cn(
        "sticky top-0 left-0 py-10 px-8",
        "flex items-center justify-between overflow-hidden",
        "z-50 transform-gpu will-change-transform text-foreground"
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="flex items-center gap-4 leading-snug w-full max-w-[20%]"
      >
        {/* <BrandIcon className="w-6 h-6" /> */}
        <BotIcon className="w-6 h-6 shrink-0" />
        <p className="text-xxs">
          Open for any <br /> collaborations and offers
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
          "Folio Vol.02"
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
