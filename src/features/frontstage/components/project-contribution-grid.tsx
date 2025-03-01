/* eslint-disable @typescript-eslint/no-unused-vars */
import { projects } from "@/constants/project";
import ProjectCard from "./project-card";

export interface ProjectContributionGridProps {}

const ProjectContributionGrid = (props: ProjectContributionGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((prj) => (
        <ProjectCard
          key={prj.no}
          href={prj.url}
          description={prj.description}
          title={prj.title}
          url={prj.url}
          ogImage={prj.ogImage}
          status={prj.status}
        />
      ))}
    </div>
  );
};

export default ProjectContributionGrid;
