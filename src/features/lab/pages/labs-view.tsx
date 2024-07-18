import Container from "@/components/container";
import { pageContent } from "@/enums/page-content";
import { cn } from "@/lib/utils/tailwind";
import Image from "next/image";
import Link from "next/link";

export interface LabsViewPageProps {}

const LabsViewPage = (props: LabsViewPageProps) => {
  return (
    <div className="bg-background text-foreground">
      <Container
        variant="default"
        className="border-l border-r border-border min-h-dvh py-10 px-10"
      >
        <h1 className="text-[18vw] font-gelatrial text-center mb-10">Labs</h1>

        <div className="flex items-center justify-between mb-10">
          <h2 className="max-w-[300px] text-2xl text-muted">
            High-quality ui coding practice. Made by{" "}
            <Link
              href="https://twitter.com/duongductrong_"
              className="text-foreground"
            >
              Dan
            </Link>
          </h2>
          <div className="flex flex-col gap-2 items-end">
            <p className="text-2xl">dan/labs</p>
            <p className="text-xl text-muted">
              {pageContent.labs.length} items.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageContent.labs.map((labItem, index) => (
            <Link
              role="presentation"
              href={labItem.referenceSiteUrl}
              className={cn(
                "block relative",
                "rounded-2xl overflow-hidden w-full min-h-[300px] border border-border",
                "flex items-center justify-center cursor-pointer"
              )}
              key={labItem.id}
            >
              {labItem.thumbnail ? (
                <Image
                  src={labItem.thumbnail}
                  alt="Thumbnail"
                  width={800}
                  height={800}
                  className="w-full h-full absolute object-cover"
                />
              ) : null}
              <div className="absolute top-0 left-0 w-full h-full bg-background/80"></div>

              <h2 className="text-3xl font-geist-mono tracking-widest relative z-10">
                {labItem.title}
              </h2>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LabsViewPage;
