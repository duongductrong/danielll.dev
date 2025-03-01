import { useQueryState } from "nuqs";

export const useProjectTypeQuery = () => {
  const [projectType, setProjectType] = useQueryState("project-type", {
    defaultValue: "contribution",
  });

  return [projectType, setProjectType] as const;
};
