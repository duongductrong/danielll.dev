"use client";

import Container from "@/components/container";
import SmootherScrollSection from "@/components/motions/smoother-scroll-section";
import ContactSection from "../_components/contact-section";
import FooterSection from "../_components/footer-section";

const DetailedFooterLayout = () => {
  return (
    <>
      <SmootherScrollSection className="py-32">
        <Container>
          <ContactSection />
        </Container>
      </SmootherScrollSection>
      <SmootherScrollSection className="py-12 border-t border-gray-300 dark:border-gray-800 flex items-center justify-center">
        <FooterSection />
      </SmootherScrollSection>
    </>
  );
};

export default DetailedFooterLayout;
