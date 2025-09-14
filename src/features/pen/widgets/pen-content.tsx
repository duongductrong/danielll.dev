"use client";

import { CodePenContent } from "@/features/craft/components/codepen";
import { MDXContent } from "@content-collections/mdx/react";
import { CodeSpot, CodeSpotProps } from "@/features/craft/components/codespot";
import { PreviewTabs } from "@/features/craft/components/preview-tabs";
import {
  registryPreviewComponents,
  registrySourceCode,
} from "@/features/craft/registry";
import { Pen } from "content-collections";

export interface PenContentProps {
  pen: Pen;
}

const PenContent = ({ pen }: PenContentProps) => {
  return (
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
              registrySourceCode[component as keyof typeof registrySourceCode];

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
  );
};

export default PenContent;
