import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import ThingIDo from "@/features/folio/widgets/thing-i-do";

const Page = () => {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Work</PageSectionTitle>
        <PageSectionDescription>
          Explore my portfolio showcasing recent projects, a comprehensive list
          of contributions, and insights into my role and creative inspirations.
        </PageSectionDescription>
      </PageSectionHeader>

      <PageSectionContent>
        <ThingIDo container={false} showHeadline={false} />
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
