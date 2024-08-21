"use client";

import { ReactLenis } from "@/lib/lenis";
import { AboutGetInTouch } from "../components/about-get-in-touch";
import { AboutHero } from "../components/about-hero";
import { AboutIntro } from "../components/about-intro";

export interface AboutViewProps {}

export const AboutView = (props: AboutViewProps) => {
  return (
    <ReactLenis className="will-change-transform" root>
      <AboutHero />
      <AboutIntro />
      <AboutGetInTouch />
    </ReactLenis>
  );
};
