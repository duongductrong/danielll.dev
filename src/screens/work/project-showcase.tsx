import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface ProjectShowCaseItemImage {
  type: "image";
  alt?: string;
  src: string;
}

export type ProjectShowCaseItem = ProjectShowCaseItemImage;

export interface ProjectShowCaseProps {
  title: string | ReactNode;
  href?: string | null;
  description?: ReactNode;
  items?: ProjectShowCaseItem[];
}

export function ProjectShowCase({
  title,
  href,
  description,
  items,
}: ProjectShowCaseProps) {
  return (
    <section>
      <h3 className="text-base mb-4 font-semibold leading-normal flex items-center">
        {title}
        {href ? (
          <Link
            href={href}
            className="text-sm leading-normal text-primary text-lg uppercase inline-block ml-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit site"
          >
            <ArrowUpRight className="size-4" />
          </Link>
        ) : null}
      </h3>

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
                height={200}
                src={item.src}
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-12" />
        <CarouselNext className="right-12" />
      </Carousel>
      <p className="mt-4 text-muted-foreground font-light leading-normal">
        {description}
      </p>
    </section>
  );
}
