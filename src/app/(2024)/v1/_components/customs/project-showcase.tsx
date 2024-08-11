import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ReactNode } from "react";

export interface ProjectShowCaseItemImage {
  type: "image";
  alt?: string;
  src: string;
}

export type ProjectShowCaseItem = ProjectShowCaseItemImage;

export interface ProjectShowCaseProps {
  title: string | ReactNode;
  description?: ReactNode;
  items?: ProjectShowCaseItem[];
}

export function ProjectShowCase({
  title,
  description,
  items,
}: ProjectShowCaseProps) {
  return (
    <section>
      <h2 className="text-2xl mb-4 font-medium leading-normal">{title}</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {items?.map((item, index) => (
            <CarouselItem key={index} className="basis-3/4 rounded-md">
              <Image
                className="w-full rounded-2xl h-full max-h-[550px] object-cover"
                alt={item.alt ?? "Project showcase thumbnail"}
                width={700}
                height={700}
                src={item.src}
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-12" />
        <CarouselNext className="right-12" />
      </Carousel>
      <p className="text-xl mt-4 text-muted-foreground font-light leading-normal">
        {description}
      </p>
    </section>
  );
}
