"use client";

import { CodePenContent } from "@/features/craft/components/codepen";
import { CodeSpot, CodeSpotProps } from "@/features/craft/components/codespot";
import { PreviewTabs } from "@/features/craft/components/preview-tabs";
import {
  registryPreviewComponents,
  registrySourceCode,
} from "@/features/craft/registry";
import { MDXContent } from "@content-collections/mdx/react";
import { Pen } from "content-collections";

export interface PenContentProps {
  pen: Pen;
  className?: string;
}

const PenContent = ({ pen }: PenContentProps) => {
  return (
    <CodePenContent>
      <MDXContent
        key={pen._meta.path}
        code={pen.mdx}
        components={{
          Preview: ({
            component,
            className,
          }: {
            component: string;
            className?: string;
          }) => {
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
                className={className}
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
