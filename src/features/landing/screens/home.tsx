"use client";

import Hero from "@/features/landing/components/hero";
import About from "../components/about";
import FeatureWork from "../components/feature-work";
import Project from "../components/project";

export interface HomeProps {}

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeatureWork />
      {/* <FeatureWork /> */}
      <Project />
    </>
  );
};

export default Home;
