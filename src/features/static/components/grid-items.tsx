import { pageContent } from "@/enums/page-content";
import { motion } from "framer-motion";
import { ChevronRight, CircleDot } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export interface GridItem {
  name: string;
  accessible: boolean;
  referenceUrl: string;
}

export interface GridItemsProps
  extends ComponentPropsWithoutRef<typeof motion.div> {
  label: string;
  items: GridItem[];

  viewMoreTo?: string;
  viewMoreLabel?: string;
}

export const GridItems = forwardRef<
  ElementRef<typeof motion.div>,
  GridItemsProps
>(({ variants, label, items, viewMoreTo, viewMoreLabel, ...props }, ref) => {
  return (
    <motion.div {...props} variants={variants} ref={ref}>
      <p className="flex justify-between items-center gap-4 text-xs font-normal text-muted mb-3 uppercase">
        {label}

        {viewMoreLabel ? (
          <Link href={viewMoreTo ?? "#"}>{viewMoreLabel}</Link>
        ) : null}
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        {items.map((item, idx) => {
          const MotionLink = motion(Link);
          return (
            <MotionLink
              key={idx}
              variants={variants}
              role="navigation"
              aria-label={item.name}
              className="flex items-center justify-between py-2 min-h-11 border-b border-border"
              href={item.referenceUrl}
            >
              {item.name}
              {item.accessible ? (
                <ChevronRight className="size-4 text-muted" />
              ) : (
                <CircleDot className="size-4 text-muted" />
              )}
            </MotionLink>
          );
        })}
      </div>
    </motion.div>
  );
});
GridItems.displayName = "GridItems";
