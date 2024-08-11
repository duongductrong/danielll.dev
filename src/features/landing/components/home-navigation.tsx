"use client";

import { urls } from "@/enums/urls";
import { cn } from "@/lib/utils/tailwind";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

const items = [
  {
    id: "about",
    label: "About",
    path: urls.landing.about,
  },
  {
    id: "works",
    label: "Works",
    path: urls.landing.works,
  },
  {
    id: "labs",
    label: "Labs",
    path: urls.landing.labs,
  },
];

const selectItemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.15,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export interface HomeNavigationProps
  extends ComponentPropsWithoutRef<typeof motion.div> {}

export const HomeNavigation = ({
  className,
  ...props
}: HomeNavigationProps) => {
  // const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);

  // const handleOnMouseEnter = (index: number) => {
  //   const func: ReactEventHandler<HTMLAnchorElement> = (ev) => {
  //     ev.preventDefault();

  //     setSelectedItemIndex(index);
  //   };

  //   return func;
  // };

  // const handleOnMouseLeave = () => {
  //   setSelectedItemIndex(-1);
  // };

  // const selectedItem = items?.[selectedItemIndex];

  return (
    <motion.nav
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        // "fixed top-[55%] left-0 w-full text-center",
        "flex items-center justify-evenly gap-4 px-8",
        className
      )}
    >
      {/* {selectedItem ? (
        <motion.div
          className={cn(
            "z-0 w-full bg-black absolute top-1/2 left-0 transform -translate-y-1/2",
            "transition-all duration-300 ease-in-out",
            "flex items-center justify-center overflow-hidden mix-blend-difference"
          )}
          initial={{ height: 0 }}
          animate={{ height: "100px" }}
        >
          <motion.p
            className={cn(
              "select-none",
              "font-gelatrial",
              "text-8xl",
              "text-white pointer-events-none z-0"
            )}
            variants={selectItemVariants}
            initial="hidden"
            animate="visible"
          >
            {selectedItem?.label.split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                variants={itemVariant}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      ) : null} */}

      {items.map(({ id, label, path }, idx) => {
        const no = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;
        return (
          <Link
            href={path}
            key={id}
            className="group text-xs z-10 flex flex-col gap-1 min-w-[50px] items-center md:items-start"
            // onMouseEnter={handleOnMouseEnter(idx)}
            // onMouseLeave={handleOnMouseLeave}
          >
            <span
              className={cn(
                "font-geist-mono",
                "text-foreground/50"
                // selectedItem
                //   ? "text-background/50 transition-all duration-300"
                //   : "text-foreground/50"
              )}
            >
              {no}
            </span>
            <p
              className={cn(
                "inline-block"
                // selectedItem
                //   ? "text-background transition-all duration-300"
                //   : ""
              )}
            >
              {label}
            </p>
            <div className="h-[1px] w-0 group-hover:w-full bg-foreground transition-all duration-300"></div>
          </Link>
        );
      })}
    </motion.nav>
  );
};
