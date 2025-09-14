"use client";

import { CodePenTitle } from "@/features/craft/components/codepen";
import { Pen } from "content-collections";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export interface PenHeaderProps {
  pen: Pen;
}

const PenHeader = ({ pen }: PenHeaderProps) => {
  const router = useRouter();
  return (
    <CodePenTitle
      onBack={() => router.back()}
      title={pen.title}
      summary={pen.summary}
      date={format(pen.date.toISOString(), "MMMM d, yyyy")}
    />
  );
};

export default PenHeader;
