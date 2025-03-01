"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps } from "react";
import { useProjectTypeQuery } from "../hooks/use-project-type-query";
import ProjectContributionGrid from "./project-contribution-grid";
import ProjectOpenSourceList from "./project-open-source-list";

export interface ProjectContentProps extends ComponentProps<"section"> {}

const ProjectContent = (props: ProjectContentProps) => {
  const [projectType] = useProjectTypeQuery();

  if (projectType === "contribution") {
    return <ProjectContributionGrid />;
  }

  return <ProjectOpenSourceList />;
};

export default ProjectContent;
