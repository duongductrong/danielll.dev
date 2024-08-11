"use client";

import { useEffect } from "react";
import { HomeHero } from "../components/home-hero";

export interface HomeViewProps {}

export const HomeView = (props: HomeViewProps) => {
  // useEffect(() => {
  //   document.body.classList.add("overflow-hidden");

  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []);

  return (
    <article className="h-[calc(100dvh-71px)] md:h-[calc(100dvh-116px)] w-full overflow-hidden">
      <HomeHero />
    </article>
  );
};
