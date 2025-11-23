import {
  PageSection,
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
    </PageSection>
  );
};

export default Page;
