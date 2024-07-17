import Container from "@/components/container";
import { Flower } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface WorkViewPageProps {}

const WorkViewPage = (props: WorkViewPageProps) => {
  return (
    <div className="bg-labs-background text-labs-foreground">
      <Container
        variant="default"
        className="border-l border-r border-labs-border min-h-dvh py-10 px-10"
      >
        <h1 className="text-[18vw] font-gelatrial text-center mb-10">
          Casio
        </h1>

        <div className="flex items-center justify-between">
          <h2 className="max-w-[300px] text-2xl text-labs-muted">
            High-quality store showing casio branding.
          </h2>
          <div className="flex flex-col gap-2 items-end">
            <Link href="//langfarmstore.com" className="text-2xl">
              casio.anhkhue.com
            </Link>
            <p className="text-xl text-labs-muted">
              <Flower className="w-6 h-6" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkViewPage;
