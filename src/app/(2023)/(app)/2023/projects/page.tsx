/* eslint-disable react/no-unescaped-entities */
"use client";

import ThreeDInteractionCard from "@/components/cards/threed-interaction-card";
import Container from "@/components/container";
import SmootherScrollSection from "@/components/motions/smoother-scroll-section";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";
import { pageContent } from "@/enums/page-content";

export interface ProjectListProps {}

const ProjectList = (props: ProjectListProps) => {
  return (
    <>
      <SmootherScrollSection className="w-full min-h-[calc(50vh-72px)] flex items-center justify-center">
        <Container>
          <TextLegend className="mb-12">Portfolio</TextLegend>
          <TextMain className="mb-10">My recent works</TextMain>
          <TextDescription>
            I've helped many clients scale and accelerate their businesses over
            the past few years and here is a handpicked selection of my best
            work.
          </TextDescription>
        </Container>
      </SmootherScrollSection>

      <SmootherScrollSection className="py-24">
        <Container className="flex flex-col gap-32">
          {pageContent.PROJECTS.map((project) => (
            <ThreeDInteractionCard
              key={project.id}
              title={project.title}
              description={project.description}
              source={project.image}
              referenceSiteUrl={`/projects/${project.slug}`}
            />
          ))}
        </Container>
      </SmootherScrollSection>
    </>
  );
};

export default ProjectList;
