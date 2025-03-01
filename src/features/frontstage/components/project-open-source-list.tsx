/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from "@/components/ui/text";
import { openSources } from "@/constants/project";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export interface ProjectOpenSourceListProps {}

const ProjectOpenSourceList = (props: ProjectOpenSourceListProps) => {
  return (
    <div role="list" className="flex flex-col gap-4">
      {openSources.map((source) => (
        <Link
          href={source.url}
          target="_blank"
          role="listitem"
          className="flex items-center justify-between"
          key={source.no}
        >
          <Text
            as="span"
            variant="body"
            className="font-medium underline underline-offset-4"
          >
            {source.title}
          </Text>

          <div className="flex items-center">
            <Text variant="caption" className="text-muted-foreground">
              Github
            </Text>
            <MoveUpRight className="size-2 text-muted-foreground ml-1" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectOpenSourceList;
