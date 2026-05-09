import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SnapzyDockProps {
  shouldReduceMotion?: boolean;
}

export function SnapzyDock({ shouldReduceMotion }: SnapzyDockProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  const springTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 320, damping: 24 };

  const fadeTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.25, ease: "easeOut" };

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Dock Icon */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            layoutId="snapzy-icon"
            onClick={open}
            className="group relative cursor-pointer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.12, y: -3 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
            transition={springTransition}
            aria-label="Open Snapzy details"
          >
            <img
              src="/images/apps/snapzy/brand-logo.png"
              alt=""
              className="size-10 rounded-xl object-cover shadow-[0_8px_24px_-6px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]"
            />
            {/* macOS-style running indicator */}
            <span className="absolute -bottom-1.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-black/25 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Dialog Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/[0.12] backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              onClick={close}
              aria-hidden="true"
            />

            {/* Centered card container */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              onClick={close}
            >
              <motion.div
                className="relative w-full max-w-[400px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.82, y: 30 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.88, y: 20 }
                }
                transition={springTransition}
                role="dialog"
                aria-modal="true"
                aria-label="About Snapzy"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top background area with subtle pattern */}
                <div className="relative h-36 bg-[#f2f2f2]">
                  <svg
                    className="absolute inset-0 h-full w-full opacity-[0.35]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="snapzy-dots"
                        width="18"
                        height="18"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="0.8" fill="#a3a3a3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#snapzy-dots)" />
                  </svg>

                  {/* Overlapping app icon */}
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
                    <motion.img
                      layoutId="snapzy-icon"
                      src="/images/apps/snapzy/brand-logo.png"
                      alt="Snapzy"
                      className="size-[72px] rounded-2xl object-cover shadow-[0_12px_32px_-8px_rgba(0,0,0,0.25)] ring-[5px] ring-white"
                      transition={springTransition}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-7 pt-11 text-center">
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    Snapzy
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-400">
                    Beautiful screen capture for macOS
                  </p>

                  <p className="mt-4 text-[13px] leading-relaxed text-neutral-500">
                    A native macOS app for screenshots, screen recordings, and
                    annotations. Edit, share, and organize your captures with
                    blazing speed. Open source and free forever.
                  </p>

                  {/* Feature tags */}
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {["Screenshot", "Recording", "Annotate", "OCR"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center justify-center gap-2.5">
                    <a
                      href="https://snapzy.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-[13px] font-medium text-white transition-all hover:bg-black active:scale-95"
                    >
                      Visit site
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="opacity-60"
                      >
                        <path
                          d="M3 9L9 3M9 3H4.5M9 3V7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/duongductrong/Snapzy"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-5 py-2 text-[13px] font-medium text-neutral-700 transition-all hover:bg-neutral-200 active:scale-95"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-60"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
