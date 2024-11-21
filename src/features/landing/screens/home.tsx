"use client";

import Hero from "@/features/landing/components/hero";
import FeatureWork from "@/features/landing/components/feature-work";
import Project from "@/features/landing/components/project";

export interface HomeProps {}

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureWork />
      <Project />
    </>
  );
};

export default Home;
