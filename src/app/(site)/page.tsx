"use client";

import Button from "@/components/buttons/button";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import RotatePersonal from "@/components/rotate-personal";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";

export default function Home() {
  return (
    <>
      <Smoother.ScrollSection className="h-[calc(100vh-72px)] flex items-center justify-center">
        <Container className="relative">
          <TextLegend className="mb-12">HEY THERE!</TextLegend>
          <TextMain className="mb-10">
            I am a Front-end Developer <br />
            with a passion for <br />
            open source.
          </TextMain>
          <TextDescription className="mb-16">
            I develope websites that gets you real results.
          </TextDescription>
          <Button rounded="base" color="base" className="min-w-[170px]">
            Let me help you
          </Button>

          <RotatePersonal className="absolute bottom-12 right-8" />
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="h-[50vh] flex items-center justify-center">
        <Container className="relative">
          <TextLegend className="mb-12">MY EXPERTISE</TextLegend>
          <h2 className="text-4xl mb-12 font-normal leading-normal	">
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
    </>
  );
}
