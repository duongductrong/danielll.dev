"use client";

import { pageContent } from "@/enums/page-content";
import { urls } from "@/enums/urls";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, {
  CSSProperties,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react";

export interface LabPerspectiveProps extends PropsWithChildren {}

export const LabPerspective = ({ children }: LabPerspectiveProps) => {
  const [rotate, setRotate] = useState(0);

  const css = useMemo<CSSProperties>(
    () =>
      ({
        "--controls-rotate": `${rotate}deg`,
      } as CSSProperties),
    [rotate]
  );

  return (
    <div style={css} className="relative w-full min-h-dvh">
      {children}
      <LabRemoteControls rotate={rotate} setRotate={setRotate} />
      <LabNavigation />
    </div>
  );
};

export interface LabRemoteControlsProps {
  rotate: number;
  setRotate: Dispatch<SetStateAction<number>>;
}

export const LabRemoteControls = ({
  rotate,
  setRotate,
}: LabRemoteControlsProps) => {
  return (
    <div className="absolute top-4 right-4 bg-[#0F1314] p-2 pb-4 rounded-md border border-[#292D2E] w-[270px] min-h-[100px]">
      <h2 className="text-sm font-medium text-white mb-4">Controls</h2>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="#"
          className="text-[#B7B8BA] text-xs items-center gap-2 flex"
        >
          <span className="shrink-0 w-[85px]">X axis</span>
          <input
            type="range"
            className="appearance-none rounded-md h-[6px] w-full bg-white/50"
            disabled
          />
        </label>

        <label
          htmlFor="#"
          className="text-[#B7B8BA] text-xs items-center gap-2 flex"
        >
          <span className="shrink-0 w-[85px]">Y axis</span>
          <input
            type="range"
            className="appearance-none rounded-md h-[6px] w-full bg-white/50"
            disabled
          />
        </label>

        <label
          htmlFor="#"
          className="text-[#B7B8BA] text-xs items-center gap-2 flex"
        >
          <span className="shrink-0 w-[85px]">z Axis</span>
          <input
            type="range"
            className="appearance-none rounded-md h-[6px] w-full bg-white/50"
            disabled
          />
        </label>

        <label
          htmlFor="#"
          className="text-[#B7B8BA] text-xs items-center gap-2 flex"
        >
          <span className="shrink-0 w-[85px] whitespace-nowrap">
            Rotate <span className="text-[10px]">({rotate}deg)</span>
          </span>
          <input
            type="range"
            min={-360}
            max={360}
            value={rotate}
            onChange={(e) => setRotate(Number(e.target.value))}
            className="appearance-none rounded-md h-[6px] w-full bg-white/50"
          />
        </label>
      </div>
    </div>
  );
};

export interface LabNavigationProps {}

export const LabNavigation = (props: LabNavigationProps) => {
  return (
    <div className="absolute top-4 left-4">
      <Link
        href={urls.labs}
        className="px-2 h-8 gap-2 rounded-md bg-black block items-center justify-center flex text-sm"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
    </div>
  );
};
