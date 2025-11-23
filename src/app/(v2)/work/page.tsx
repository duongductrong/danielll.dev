import { ThunderIcon } from "@/components/icons/thunder-icon";
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
        <PageSectionTitle>Work</PageSectionTitle>
        <PageSectionDescription>
          Explore my portfolio showcasing recent projects, a comprehensive list
          of contributions, and insights into my role and creative inspirations.
        </PageSectionDescription>
      </PageSectionHeader>

      <PageSectionContent>
        <div className="grid place-items-center h-[60vh]">
          <ThunderIcon className="text-foreground size-64" />
        </div>
      </PageSectionContent>
    </PageSection>
  );
};

export default Page;
