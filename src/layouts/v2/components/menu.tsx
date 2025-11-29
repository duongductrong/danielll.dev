"use client";

import { URLS } from "@/constants/url";
import { cn } from "@/lib/utils";
import { Portal } from "@radix-ui/react-portal";
import { ArrowRight, MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Link from "next/link";
import { ComponentProps, useEffect, useState } from "react";
import { useMedia } from "react-use";

export interface MenuProps extends ComponentProps<"ul"> {}

const MENU_ITEMS = [
  {
    label: "Work",
    href: URLS.WORK,
  },
  {
    label: "About",
    href: URLS.ABOUT,
  },
  {
    label: "Feed",
    href: URLS.FEED,
  },
  {
    label: "Writing",
    href: URLS.WRITING,
  },
];

const Menu = ({ className, ...props }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMedia("(max-width: 640px)", true);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen, isMobile]);

  return (
    <>
      <ul
        {...props}
        className={cn(
          "ml-auto hidden items-center justify-center gap-2 sm:flex",
          className,
        )}
      >
        {MENU_ITEMS.map((item, index) => (
          <li
            key={`menu-item-${index}`}
            className="text-foreground px-2 text-sm font-medium"
          >
            <Link href={item.href ?? ""} className="block w-full">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="ml-auto block cursor-pointer sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon className="size-6" />
        ) : (
          <MenuIcon className="size-6" />
        )}
      </button>

      {isMobile ? (
        <Portal>
          <AnimatePresence>
            {isOpen ? (
              <div className="fixed inset-0">
                <motion.div
                  className="bg-background/50 pointer-events-none fixed top-0 left-0 h-full w-full backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.8,
                    },
                  }}
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-20">
                  <motion.ul
                    variants={menuVariants}
                    className="flex w-full flex-col gap-6"
                    initial="invisible"
                    animate="visible"
                    exit="invisible"
                  >
                    {MENU_ITEMS.map((item, index) => (
                      <motion.li
                        variants={menuItemVariants}
                        transition={{
                          type: "spring",
                          restDelta: 0.001,
                          damping: 25,
                          stiffness: 300,
                          mass: 0.5,
                        }}
                        key={`menu-item-${index}`}
                        className="text-foreground font-title w-full px-2 text-4xl font-medium"
                      >
                        <Link
                          href={item.href ?? ""}
                          className="flex w-full items-center justify-between"
                          onClick={() => setIsOpen(false)}
                          scroll={false}
                        >
                          {item.label}
                          <ArrowRight className="size-6" />
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            ) : null}
          </AnimatePresence>
        </Portal>
      ) : null}
    </>
  );
};

const menuVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  invisible: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const menuItemVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  invisible: {
    opacity: 0,
    x: 100,
  },
};

export default Menu;
