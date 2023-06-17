"use client";

import Smoother from "@/components/motions/smoother";
import HeaderSection from "../_components/header-section";

const DetailedHeaderLayout = () => {
  return (
    <Smoother.ScrollSection className="h-[72px] flex items-center">
      <HeaderSection />
    </Smoother.ScrollSection>
  );
};

export default DetailedHeaderLayout;
