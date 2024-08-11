"use client";

import { cn } from "@/lib/utils/tailwind";
import { AnimatePresence, motion, TargetAndTransition } from "framer-motion";
import { XIcon } from "lucide-react";
import { useMemo } from "react";
import { useMedia } from "react-use";
import { LandingMenuList } from "./menu-list";
import { useLandingMenu } from "./use-landing-menu";
import Link from "next/link";

export interface LandingMenuProps {}

export const LandingMenu = (props: LandingMenuProps) => {
  const isOpen = useLandingMenu((state) => state.isOpen);
  const isSmallDevice = useMedia("(max-width: 768px)");

  const { closeMenu } = useLandingMenu(({ closeMenu }) => ({ closeMenu }));

  const initialTrans = useMemo<any>(
    () =>
      (isSmallDevice ? { opacity: 0 } : { x: "100%" }) as TargetAndTransition,
    [isSmallDevice]
  );

  const animateTrans = useMemo<TargetAndTransition>(
    () => (isSmallDevice ? { opacity: 1 } : { x: 0 }),
    [isSmallDevice]
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.6 } }}
            className="fixed top-0 left-0 w-full h-dvh bg-foreground/80 z-50"
            onClick={closeMenu}
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.aside
            initial={initialTrans}
            animate={animateTrans}
            exit={{
              ...initialTrans,
              transition: { delay: 0.6, duration: 0.3 },
            }}
            transition={{ ease: "easeInOut" }}
            className={cn(
              "right-0 top-0 fixed w-full md:w-[350px] h-dvh",
              "bg-foreground p-8 text-background z-50",
              "flex flex-col"
            )}
          >
            <motion.header className="text-3xl font-gelatrial mb-10 flex items-center justify-end gap-4">
              <p>Daniel.</p>

              <XIcon
                className="size-6 cursor-pointer"
                aria-label="Close button"
                role="button"
                onClick={closeMenu}
              />
            </motion.header>

            <LandingMenuList />

            <footer className="mt-auto text-xxs font-geist-mono">
              <p>
                Email:{" "}
                <Link href="mailto:duongductrong06@gmail.com">
                  duongductrong06@gmail.com
                </Link>
              </p>
              <p>
                Github:{" "}
                <Link href="//github.com/duongductrong">
                  git:duongductrong06
                </Link>
              </p>
              <p>Built with ❤️ by Trong Duong {"<Daniel />"}.</p>
            </footer>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
};
