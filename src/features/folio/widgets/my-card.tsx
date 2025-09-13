"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { useEvent } from "react-use";
import { motion } from "motion/react";

const MyCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isCenter] = useState(false);

  useEvent("mousemove", (e) => {
    if (!cardRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();

    const [screenCenterX, screenCenterY] = [
      cardRect.left + cardRect.width / 2,
      window.innerHeight / 2,
    ];

    const [mouseX, mouseY] = [e.clientX, e.clientY];

    const [mouseOffsetX, mouseOffsetY] = [
      (mouseX - screenCenterX) / 30,
      ((mouseY - screenCenterY) / 20) * -1,
    ];

    cardRef.current?.style.setProperty("--tilt-x", `${mouseOffsetX}deg`);
    cardRef.current?.style.setProperty("--tilt-y", `${mouseOffsetY}deg`);
    cardRef.current.style.transform =
      "rotateX(var(--tilt-y)) rotateY(var(--tilt-x))";
  });

  return (
    <div className="fixed top-0 left-0 w-full h-screen hidden md:block pointer-events-none">
      <div
        style={{ perspective: "1000px" }}
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2",
          isCenter ? "top-1/2 left-1/2" : "top-[30%] left-[88vw] scale-[0.6]"
        )}
      >
        <motion.div
          ref={cardRef}
          className={cn(
            "relative w-[300px] h-[400px] rounded-2xl p-4 cursor-grab",
            "border-4 border-border bg-background flex flex-col gap-3",
            "shadow-2xl shadow-black/10 transition-all duration-300 ease-linear pointer-events-auto"
          )}
          onPointerDown={(event) =>
            event.currentTarget.classList.add("cursor-grabbing")
          }
          onPointerUp={(event) =>
            event.currentTarget.classList.remove("cursor-grabbing")
          }
          style={{
            transform: "rotateX(var(--tilt-y)) rotateY(var(--tilt-x))",
          }}
          drag
          dragElastic={1}
          dragConstraints={{
            bottom: 100,
            left: 0,
            right: 0,
            top: 100,
          }}
        >
          <div
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 h-[300vh] w-1 bg-secondary",
              "rounded-b-2xl -translate-y-full"
            )}
          />

          <div
            className={cn(
              "w-8 h-14 rounded-full border-4 border-primary absolute top-0 left-1/2 -translate-x-1/2",
              "transform-gpu -translate-y-8 z-50 rotate-[10deg]"
            )}
          />

          <div className="absolute size-8 rounded-full border-2 border-border top-2 left-1/2 -translate-x-1/2 bg-background"></div>
          <header className="flex items-center justify-between gap-2 mb-4">
            <p className="text-[10px] font-bold text-muted-foreground uppercase font-mono">
              27 July 2025
            </p>
            <p className="text-[10px] text-muted-foreground uppercase font-mono">
              HCM City, Vietnam
            </p>
          </header>

          <Image
            src="https://avatars.githubusercontent.com/u/39333905?v=4"
            width={200}
            height={200}
            className="w-full h-fit object-cover rounded-2xl pointer-events-none select-none"
            alt="Avatar"
            draggable={false}
          />

          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-bold font-mono uppercase">
              Duong Duc Trong
            </p>
            <p className="text-xs text-muted-foreground font-mono uppercase">
              Software Engineer
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyCard;
