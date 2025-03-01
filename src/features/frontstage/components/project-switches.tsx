"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { useProjectTypeQuery } from "../hooks/use-project-type-query";

export interface ProjectSwitchesProps {}

const ProjectSwitches = (props: ProjectSwitchesProps) => {
  const [projectType, setProjectType] = useProjectTypeQuery();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={projectType === "contribution" ? "default" : "ghost"}
        onClick={() => setProjectType("contribution")}
      >
        Contribution
      </Button>
      <Button
        variant={projectType === "open-source" ? "default" : "ghost"}
        onClick={() => setProjectType("open-source")}
      >
        Open-source
      </Button>
    </div>
  );
};

export default ProjectSwitches;
