"use client";

import { AboutGetInTouch } from "../components/about-get-in-touch";
import { AboutHero } from "../components/about-hero";
import { AboutIntro } from "../components/about-intro";

export interface AboutViewProps {}

export const AboutView = (props: AboutViewProps) => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutGetInTouch />
    </>
  );
};
