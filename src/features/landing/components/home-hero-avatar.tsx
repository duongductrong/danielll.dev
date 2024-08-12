import { MotionImage } from "@/components/animates/motion-image";
import { cn } from "@/lib/utils/tailwind";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

export interface HomeHeroAvatarProps
  extends ComponentPropsWithoutRef<typeof motion.div> {}

export const HomeHeroAvatar = ({
  className,
  ...props
}: HomeHeroAvatarProps) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "select-none rounded-full flex items-center justify-center mt-10",
        "sm:absolute sm:bottom-[13.17vh] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:mt-0",
        "md:bottom-4",
        className
      )}
    >
      <MotionImage
        whileHover={{ scale: 1.125 }}
        whileTap={{ scale: 0.95 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        exit={{ opacity: 0, scale: 0, rotate: -360 }}
        transition={{ duration: 0.25 }}
        src="/assets/peeps-avatar-alpha-transparent.png"
        width={550}
        height={550}
        className={cn(
          "max-h-[37.5rem]",
          "h-[46vw] w-[35vw]",
          // "xs:h-[32.68vh] xs:w-[47vw]",
          // "md:h-[40.98vh] md:w-[40vw]",
          "sm:h-[300px] sm:w-[240px]",
          "lg.next:h-[14.5vw] lg.next:w-[12vw]",
          "object-cover rounded-md sm:mb-4 md:mb-16 lg:mb-4 cursor-pointer rounded-full grayscale",
          "border border-foreground/10 bg-foreground lg.next:bg-background"
        )}
        alt="Avatar"
        placeholder="blur"
        blurDataURL="/assets/peeps-avatar-alpha-transparent.png"
      />
    </motion.div>
  );
};
