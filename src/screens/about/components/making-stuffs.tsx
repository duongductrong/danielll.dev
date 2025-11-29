import {
  PageSection,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface MakingStuffsProps extends ComponentProps<"div"> {}

export const MakingStuffs = ({ className, ...props }: MakingStuffsProps) => {
  return (
    <PageSection as="article" {...props} className={cn(className)} data-slot="making-stuffs">
      <PageSectionHeader variant="title">
        <PageSectionTitle>I love making stuffs</PageSectionTitle>
        <PageSectionDescription>
          Alongside my day job, I like to spend part of my free time into
          various projects, adding features to my personal website, creating
          tools for engineers.
        </PageSectionDescription>
      </PageSectionHeader>
    </PageSection>
  );
};
