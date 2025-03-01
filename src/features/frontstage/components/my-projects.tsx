import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import ProjectContent from "./project-content";
import ProjectSwitches from "./project-switches";

export interface MyProjectsProps extends ComponentProps<"section"> {}

const MyProjects = ({ className, ...props }: MyProjectsProps) => {
  return (
    <section {...props} className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Text variant="body" className="text-muted-foreground">
          Explore my curated portfolio of key projects.
        </Text>

        <ProjectSwitches />
      </div>

      <ProjectContent />
    </section>
  );
};

export default MyProjects;
