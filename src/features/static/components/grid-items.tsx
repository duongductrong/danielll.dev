import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, CircleDot } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from "react";

const MotionLink = motion(Link);

export interface GridItem {
  id: string;
  name: string;
  accessible: boolean;
  referenceUrl: string;
  thumbnail?: string | StaticImageData;
}

export interface GridItemsProps
  extends ComponentPropsWithoutRef<typeof motion.div> {
  label: string;
  items: GridItem[];

  viewMoreTo?: string;
  viewMoreLabel?: string;

  preview?: boolean;
}

export const GridItems = forwardRef<
  ElementRef<typeof motion.div>,
  GridItemsProps
>(
  (
    {
      variants,
      label,
      items,
      viewMoreTo,
      viewMoreLabel,
      preview = false,
      ...props
    },
    ref
  ) => {
    const [hoverId, setHoverId] = useState<string | null>(null);

    return (
      <motion.div {...props} variants={variants} ref={ref}>
        <p className="flex justify-between items-center gap-4 text-xs font-normal text-muted mb-3 uppercase">
          {label}

          {viewMoreLabel ? (
            <Link href={viewMoreTo ?? "#"}>{viewMoreLabel}</Link>
          ) : null}
        </p>
        <div className="grid grid-cols-2 gap-x-4">
          {items.map((item) => {
            const enablePreview = preview && item.id === hoverId;

            return (
              <MotionLink
                key={item.id}
                variants={variants}
                role="navigation"
                aria-label={item.name}
                className="group relative flex items-center justify-between py-2 min-h-11 border-b border-border"
                href={item.referenceUrl}
                onHoverStart={() => setHoverId(item.id)}
                onHoverEnd={() => setHoverId(null)}
              >
                {item.name}
                {item.accessible ? (
                  <ChevronRight className="size-4 text-muted group-hover:text-muted/70" />
                ) : (
                  <CircleDot className="size-4 text-muted group-hover:text-muted/70" />
                )}

                <AnimatePresence>
                  {enablePreview && item.thumbnail ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: 0,
                        top: 0,
                        // clipPath: `polygon(37% 56%, 71% 53%, 70% 74%, 36% 68%)`,
                      }}
                      animate={{
                        opacity: 1,
                        top: -50,
                        // clipPath: `polygon(0 0, 98% 21%, 88% 94%, 9% 71%)`,
                      }}
                      exit={{ opacity: 0, rotate: 0, top: 0 }}
                      className="absolute top-0 right-0 w-[100px] h-[75px] rounded-md overflow-hidden pointer-events-none"
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </MotionLink>
            );
          })}
        </div>
      </motion.div>
    );
  }
);
GridItems.displayName = "GridItems";
