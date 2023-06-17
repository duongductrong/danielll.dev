"use client";

import Smoother from "@/components/motions/smoother";
import FooterSection from "../_components/footer-section";

const DetailedFooterLayout = () => {
  return (
    <Smoother.ScrollSection className="border-t border-gray-300 dark:border-gray-800 flex items-center justify-center h-[120px]">
      <FooterSection />
    </Smoother.ScrollSection>
  );
};

export default DetailedFooterLayout;
