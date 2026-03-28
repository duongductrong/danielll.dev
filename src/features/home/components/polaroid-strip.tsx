import { useState } from "react";
import { motion } from "motion/react";

type MemoryCard = {
  src: string;
  alt: string;
  rotation: number;
  offsetY: number;
};

const MEMORY_CARDS: Array<MemoryCard> = [
  {
    src: "/images/memories/memory-01.jpg",
    alt: "Memory photo 1",
    rotation: -11,
    offsetY: 14,
  },
  {
    src: "/images/memories/memory-02.jpg",
    alt: "Memory photo 2",
    rotation: -7,
    offsetY: 7,
  },
  {
    src: "/images/memories/memory-03.jpg",
    alt: "Memory photo 3",
    rotation: -4,
    offsetY: 4,
  },
  {
    src: "/images/memories/memory-04.jpg",
    alt: "Memory photo 4",
    rotation: -1,
    offsetY: 2,
  },
  {
    src: "/images/memories/memory-05.jpg",
    alt: "Memory photo 5",
    rotation: 2,
    offsetY: 4,
  },
  {
    src: "/images/memories/memory-06.jpg",
    alt: "Memory photo 6",
    rotation: 6,
    offsetY: 7,
  },
  {
    src: "/images/memories/memory-07.jpg",
    alt: "Memory photo 7",
    rotation: 10,
    offsetY: 14,
  },
];

type PolaroidStripProps = {
  shouldReduceMotion?: boolean | null;
};

export function PolaroidStrip({ shouldReduceMotion = false }: PolaroidStripProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const stripVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
            delayChildren: 0.06,
            staggerChildren: 0.045,
          },
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.18, ease: [0.33, 1, 0.68, 1] },
        },
      };
  const cardEntryVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, scale: 0.985 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          scale: 0.995,
          transition: { duration: 0.18, ease: [0.33, 1, 0.68, 1] },
        },
      };

  return (
    <motion.div
      variants={stripVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative mt-7 sm:mt-8"
    >
      <div className="absolute inset-x-8 -bottom-4 h-7 rounded-full bg-black/10 blur-xl" />

      <motion.ul
        className="relative mx-auto flex w-[min(95vw,560px)] items-end justify-center pb-2"
        aria-label="Memory polaroids"
      >
        {MEMORY_CARDS.map((card, index) => {
          const isActive = activeIndex === index;
          const y = card.offsetY + (isActive ? -10 : 0);
          const rotate = isActive ? card.rotation * 0.55 : card.rotation;
          const scale = isActive ? 1.03 : 1;

          return (
            <motion.li
              key={card.src}
              variants={cardEntryVariants}
              className="-mx-[9px] sm:-mx-[11px]"
              style={{ zIndex: isActive ? 40 : index + 10 }}
            >
              <motion.button
                type="button"
                aria-label={`Focus ${card.alt}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                onClick={() =>
                  setActiveIndex((currentIndex) =>
                    currentIndex === index ? null : index,
                  )
                }
                className="block cursor-pointer rounded-[3px] bg-[#f5f5f3] p-[8px] pb-[26px] shadow-[0_10px_22px_rgba(10,10,10,0.16)] transition-[transform,box-shadow,filter] duration-300 ease-out select-none hover:shadow-[0_15px_28px_rgba(10,10,10,0.22)] focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none"
                style={{ transformOrigin: "center bottom" }}
                animate={{ y, rotate, scale }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 240, damping: 24, mass: 0.7 }
                }
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  draggable={false}
                  className="h-[100px] w-[88px] object-cover sm:h-[120px] sm:w-[115px]"
                />
              </motion.button>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
