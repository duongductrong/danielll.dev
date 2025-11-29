import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import {
  JourneyMoodboard,
  JourneyStory,
  MakingStuffs,
  Recommendations,
} from "@/screens/about";

const Page = () => {
  return (
    <>
      <PageSection display="fluid" className="mb-12">
        <PageSectionHeader>
          <PageSectionTitle>About my journey</PageSectionTitle>
          <PageSectionDescription>
            Learn more about my background, experience, and what I&apos;m
            passionate about.
          </PageSectionDescription>
        </PageSectionHeader>

        <PageSectionContent className="lg:px-12">
          <JourneyMoodboard />
        </PageSectionContent>
      </PageSection>

      <PageSection as="article" variant="default" className="mb-32">
        <JourneyStory />
      </PageSection>

      <MakingStuffs className="mb-32" />

      <Recommendations />
    </>
  );
};

export default Page;
