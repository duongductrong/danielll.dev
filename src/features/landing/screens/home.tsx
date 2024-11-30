"use client";

import Hero from "@/features/landing/components/hero";
import About from "../components/about";
import Expertise from "../components/expertise";
import FeatureWork from "../components/feature-work";

export interface HomeProps {}

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeatureWork />
      {/* <FeatureWork /> */}
      <Expertise />
    </>
  );
};

export default Home;
