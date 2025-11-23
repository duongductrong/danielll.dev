import { Construction } from "@/components/widgets/construction";
import {
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionRoot,
  PageSectionTitle,
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

      <PageSectionContent>
        <Construction />
      </PageSectionContent>
    </PageSectionRoot>
  );
};

export default Page;
