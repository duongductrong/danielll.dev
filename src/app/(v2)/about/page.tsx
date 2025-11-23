"use client";

import { MoodBoard } from "@/components/widgets/mood-board";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";

const Page = () => {
  return (
    <PageSection display="fluid">
      <PageSectionHeader>
        <PageSectionTitle>About my journey</PageSectionTitle>
        <PageSectionDescription>
          Learn more about my background, experience, and what I&apos;m
          passionate about.
        </PageSectionDescription>
      </PageSectionHeader>

      <PageSectionContent className="lg:px-12">
        <MoodBoard>
          <MoodBoard.Content>
            <MoodBoard.Grid duration={1.2} />
          </MoodBoard.Content>
        </MoodBoard>
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
