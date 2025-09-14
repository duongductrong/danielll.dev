"use server";

import { CodePen } from "@/features/craft/components/codepen";
import PenContent from "@/features/pen/widgets/pen-content";
import PenHeader from "@/features/pen/widgets/pen-header";
import { allPens } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const pen = allPens.find((pen) => pen._meta.path === id);
  return {
    title: pen?.title,
    description: pen?.summary,
    openGraph: {
      type: "article",
      authors: [pen?.author],
      publishedTime: pen?.date.toISOString(),
      title: pen?.title,
      description: pen?.summary,
      siteName: `${pen?.title} - Trong Duong`,
      url: `https://trongduong.com/pens/${id}`,
      locale: "en_US",
    },
  } as Metadata;
};

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const pen = allPens.find((pen) => pen._meta.path === id);

  if (!pen) {
    notFound();
  }

  return (
    <CodePen className="py-24">
      <PenHeader pen={pen} />
      <PenContent pen={pen} />
    </CodePen>
  );
};

export default Page;
