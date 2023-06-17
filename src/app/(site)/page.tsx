"use client";

import Button from "@/components/buttons/button";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import RotatePersonal from "@/components/rotate-personal";
import ContactSection from "./_components/contact-section";

export default function Home() {
  return (
    <>
      <Smoother.ScrollSection className="h-[calc(100vh-72px)] flex items-center justify-center">
        <Container className="relative">
          <p className="mb-12 text-lg font-semibold">HEY THERE!</p>
          <h2 className="text-6xl mb-10 font-bold leading-tight">
            I am a Front-end Developer <br />
            with a passion for <br />
            open source.
          </h2>
          <p className="text-xl font-normal mb-16">
            I develope websites that gets you real results.
          </p>
          <Button rounded="base" color="base" className="min-w-[170px]">
            Let me help you
          </Button>

          <RotatePersonal className="absolute bottom-12 right-8" />
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="h-[50vh] flex items-center justify-center">
        <Container className="relative">
          <p className="mb-12 text-lg font-semibold">MY EXPERTISE</p>
          <h2 className="text-4xl mb-12 font-normal leading-tight">
            With three years of experience, <br /> I specialize in building
            comprehensive online solutions <br /> for the many domains.
          </h2>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection asHorizontalScroll>
        <div className="flex gap-4">
          <div className="flex-1 min-w-[500px] h-[500px] bg-slate-950 dark:bg-slate-50"></div>
          <div className="flex-1 min-w-[500px] h-[500px] bg-slate-950 dark:bg-slate-50"></div>
          <div className="flex-1 min-w-[500px] h-[500px] bg-slate-950 dark:bg-slate-50"></div>
          <div className="flex-1 min-w-[500px] h-[500px] bg-slate-950 dark:bg-slate-50"></div>
          <div className="flex-1 min-w-[500px] h-[500px] bg-slate-950 dark:bg-slate-50"></div>
        </div>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-32">
        <Container>
          <ContactSection />
        </Container>
      </Smoother.ScrollSection>
    </>
  );
}
