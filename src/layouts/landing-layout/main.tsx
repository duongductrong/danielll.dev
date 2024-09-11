"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export interface LandingMainProps extends PropsWithChildren {}

export const LandingMain = ({ children }: LandingMainProps) => {
  // const [isPresent, safeToRemove] = usePresence();
  // const [scope, animate] = useAnimate();

  // const paths = {
  //   step1: {
  //     unfilled: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
  //     inBetween: {
  //       curve1: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
  //       curve2: "M 0 100 V 50 Q 50 100 100 50 V 100 z",
  //     },
  //     filled: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
  //   },
  //   step2: {
  //     filled: "M 0 0 V 100 Q 50 100 100 100 V 0 z",
  //     inBetween: {
  //       curve1: "M 0 0 V 50 Q 50 0 100 50 V 0 z",
  //       curve2: "M 0 0 V 50 Q 50 100 100 50 V 0 z",
  //     },
  //     unfilled: "M 0 0 V 0 Q 50 0 100 0 V 0 z",
  //   },
  // };

  // useEffect(() => {
  //   const visible = async () => {
  //     // prettier-ignore
  //     animate([
  //       ["#motion>path", { d: paths.step1.unfilled }, { duration: 0.5 }],
  //       ["#motion>path", { d: paths.step1.inBetween.curve1 }, { duration: 0.5, ease: "easeIn" }],
  //       ["#motion>path", { d: paths.step1.filled }, { duration: 0.2, ease: "easeOut" }],
  //       ["#motion>path", { d: paths.step2.filled }, { duration: 0, stiffness: 0, damping: 0 }],
  //       ["#motion>path", { d: paths.step2.inBetween.curve1 }, { duration: 0.5, ease: "easeIn" }],
  //       ["#motion>path", { d: paths.step2.unfilled }, { duration: 0.2, ease: ["easeOut"], restDelta: 0.001 }],
  //     ])
  //   };

  //   const invisible = async () => {
  //     // prettier-ignore
  //     await animate([
  //       ["#motion>path", { d: paths.step2.unfilled }, { duration: 0.5 }],
  //       ["#motion>path", { d: paths.step2.inBetween.curve1 }, { duration: 0.5, ease: "easeIn" }],
  //       ["#motion>path", { d: paths.step2.filled }, { duration: 0.2, ease: ["easeOut"], restDelta: 0.001 }],
  //       ["#motion>path", { d: paths.step1.filled },  { duration: 0, stiffness: 0, damping: 0 }],
  //       ["#motion>path", { d: paths.step1.inBetween.curve1 }, { duration: 0.5, ease: "easeIn" }],
  //       ["#motion>path", { d: paths.step1.unfilled }, { duration: 0.2, ease: "easeOut" }],
  //     ])

  //     safeToRemove?.();
  //   };

  //   const reveal = async () => {
  //     if (isPresent) {
  //       await visible();
  //     } else {
  //       await invisible();
  //     }
  //   };

  //   reveal();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isPresent]);

  return (
    // ref={scope}
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}

      {/* <motion.svg
        id="motion"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          gridArea: "1 / 1 / 2 / 2",
        }}
      >
        <motion.path
          className="fill-primary"
          vector-effect="non-scaling-stroke"
          d={paths.step1.unfilled}
        />
      </motion.svg> */}
    </motion.main>
  );
};
