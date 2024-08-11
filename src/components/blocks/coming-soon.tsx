"use client";

import { cn } from "@/lib/utils/tailwind";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export const ComingSoon = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[80dvh] w-full">
      <div className="flex items-center flex-col lg:flex-row gap-4">
        <motion.h2 className="text-7xl md:text-[5vw] leading-tight xs:leading-normal font-gelatrial text-center overflow-hidden">
          Coming
        </motion.h2>
        <MotionImage
          exit={{ opacity: 0, scale: 0, rotate: -360 }}
          transition={{ duration: 0.25 }}
          src="/assets/peeps-avatar-alpha-transparent.png"
          width={550}
          height={550}
          className={cn(
            "h-[46vw] w-[35vw] max-w-[270px] max-h-[350px]",
            "object-cover rounded-md cursor-pointer rounded-full grayscale",
            "border border-foreground/10 bg-foreground"
          )}
          alt="Avatar"
          placeholder="blur"
          blurDataURL="/assets/peeps-avatar-alpha-transparent.png"
        />
        <motion.h2 className="text-7xl md:text-[5vw] leading-tight xs:leading-normal font-gelatrial text-center overflow-hidden">
          Soon...
        </motion.h2>
      </div>
    </div>
  );
};
