import {
  PageSectionDescription,
  PageSectionHeader,
  PageSectionRoot,
  PageSectionTitle
} from "@/components/widgets/page-section";

const Page = () => {
  return (
    <PageSectionRoot>
      <PageSectionHeader>
        <PageSectionTitle>About my journey</PageSectionTitle>
        <PageSectionDescription>
          Learn more about my background, experience, and what I&apos;m
          passionate about.
        </PageSectionDescription>
      </PageSectionHeader>
    </PageSectionRoot>
  );
};

export default Page;
