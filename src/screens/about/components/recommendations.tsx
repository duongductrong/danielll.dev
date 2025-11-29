import {
  PageSection,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface RecommendationsProps extends ComponentProps<"div"> {}

export const Recommendations = ({
  className,
  ...props
}: RecommendationsProps) => {
  return (
    <PageSection
      {...props}
      className={cn(className)}
      data-slot="recommendations"
    >
      <PageSectionHeader variant="title">
        <PageSectionTitle>Recommendations</PageSectionTitle>
        <PageSectionDescription>
          Throughout my career, I&apos;ve had the privilege of working with
          talented professionals who have shared their perspectives on our
          collaborations. Here&apos;s what they have to say.
        </PageSectionDescription>
      </PageSectionHeader>
    </PageSection>
  );
};

