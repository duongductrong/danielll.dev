"use client";

import {
  CodePen,
  CodePenContent,
  CodePenTitle,
} from "@/features/craft/components/codepen";
import { CodeSpot, CodeSpotProps } from "@/features/craft/components/codespot";
import { PreviewTabs } from "@/features/craft/components/preview-tabs";
import {
  registryPreviewComponents,
  registrySourceCode,
} from "@/features/craft/registry";
import { MDXContent } from "@content-collections/mdx/react";
import { allPens } from "content-collections";
import { format } from "date-fns";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const pen = allPens.find((pen) => pen._meta.path === id);
  const router = useRouter();

  if (!pen) {
    notFound();
  }

  return (
    <CodePen className="py-24">
      <CodePenTitle
        onBack={() => router.back()}
        title={pen.title}
        summary={pen.summary}
        date={format(pen.date.toISOString(), "MMMM d, yyyy")}
      />
      <CodePenContent>
        <MDXContent
          key={pen._meta.path}
          code={pen.mdx}
          components={{
            Preview: ({ component }: { component: string }) => {
              const Component =
                registryPreviewComponents[
                  component as keyof typeof registryPreviewComponents
                ];

              const sourceCode =
                registrySourceCode[
                  component as keyof typeof registrySourceCode
                ];

              return Component ? (
                <PreviewTabs
                  component={Component}
                  code={sourceCode}
                  filename={`${component}.tsx`}
                />
              ) : null;
            },
            CodeSpot: ({ children, ...props }: CodeSpotProps) => {
              return <CodeSpot {...props}>{children}</CodeSpot>;
            },
          }}
        />
      </CodePenContent>
    </CodePen>
  );
};

export default Page;
