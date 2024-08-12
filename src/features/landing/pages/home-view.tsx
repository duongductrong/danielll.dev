"use client";

import { HomeHero } from "../components/home-hero";

export interface HomeViewProps {}

export const HomeView = (props: HomeViewProps) => {
  return (
    <article className="h-[calc(100dvh-71px)] md:h-[calc(100dvh-116px)] w-full overflow-hidden">
      <HomeHero />
    </article>
  );
};
