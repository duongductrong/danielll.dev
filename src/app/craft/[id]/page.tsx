"use client";

import {
  CodePen,
  CodePenContent,
  CodePenTitle,
} from "@/features/craft/components/codepen";
import { CodeSpot } from "@/features/craft/components/codespot";
import { registryPreviewComponents } from "@/features/craft/registry";
import { MDXContent } from "@content-collections/mdx/react";
import { allPens } from "content-collections";
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
        date={pen.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })}
      />
      <CodePenContent>
        <MDXContent
          key={pen._meta.path}
          code={pen.mdx}
          components={{
            Preview: ({ component }: { component: string }) => {
              const Comp =
                registryPreviewComponents[
                  component as keyof typeof registryPreviewComponents
                ];

              return <CodeSpot>{Comp ? <Comp /> : null}</CodeSpot>;
            },
          }}
        />
      </CodePenContent>
    </CodePen>
  );
};

export default Page;
