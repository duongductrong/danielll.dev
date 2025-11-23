import { Construction } from "@/components/widgets/construction";
import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";

const Page = () => {
  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Writing</PageSectionTitle>
        <PageSectionDescription>
          Discover my writing portfolio, where I share my thoughts, experiences,
          and insights on a variety of topics.
        </PageSectionDescription>
      </PageSectionHeader>

      <PageSectionContent>
        <Construction />
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
