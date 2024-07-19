"use client";

import { cn } from "@/lib/utils/tailwind";
import { Pause, Play } from "lucide-react";
import { CSSProperties, PropsWithChildren, useEffect, useState } from "react";

import "./index.scss";

export const Radio3d = () => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className={cn("radio-3d ", isPlay ? "active" : "")}>
      <div className="back"></div>
      <div className="side left"></div>
      <div className="side bottom"></div>
      <div className="side top">
        <div className="bordered"></div>
      </div>
      <div className="face">
        <div className="compact-disc">
          <div className="compact-disc-bg">
            <div className="compact-disc-circle"></div>
            <div className="compact-disc-circle"></div>
            <div className="compact-disc-line"></div>
          </div>

          <div className="compact-disc-door">
            <div className="top"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="front-inside"></div>
          </div>
        </div>

        <div className="loudspeaker">
          {Array(81)
            .fill(1)
            .map((_, idx) => (
              <div key={idx} />
            ))}
        </div>

        <div className="control">
          <div></div>
          <div></div>
          <div></div>
          <div
            className="play flex items-center justify-center"
            onClick={() => setIsPlay((prev) => !prev)}
          >
            {isPlay ? <Pause /> : <Play />}
          </div>
        </div>
      </div>
      <div className="side right">
        <div className="volume">
          <div className="volume-top"></div>
          <div className="volume-center"></div>
          <div className="volume-side"></div>
        </div>
        <div className="bordered"></div>
      </div>

      <div className="shadow"></div>
    </div>
  );
};

export interface RadioPerspectiveProps extends PropsWithChildren {}

export const RadioPerspective = ({ children }: RadioPerspectiveProps) => {
  const [depth, setDepth] = useState(50);

  const handleWheel = (event: globalThis.WheelEvent) => {
    const deltaY = (event as any).wheelDeltaY;

    setDepth((prevDepth) => prevDepth + (deltaY > 0 ? 100 : -100));
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      style={{ "--depth": `${depth}px` } as CSSProperties}
      className="radio-3d-perspective"
    >
      {children}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p>
          wheel {">"} depth: {depth}px
        </p>
      </div>
    </div>
  );
};
