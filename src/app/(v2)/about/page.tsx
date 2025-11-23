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
        <PageSectionTitle>About me</PageSectionTitle>
        <PageSectionDescription>
          Learn more about my background, experience, and what I&apos;m
          passionate about.
        </PageSectionDescription>
      </PageSectionHeader>
    </PageSection>
  );
};

export default Page;
