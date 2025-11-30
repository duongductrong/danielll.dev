import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ContactLinks } from "./contact-links";

export interface JourneyStoryProps extends ComponentProps<"article"> {}

export const JourneyStory = ({ className, ...props }: JourneyStoryProps) => {
  return (
    <article
      {...props}
      className={cn("max-w-3xl", className)}
      data-slot="journey-story"
    >
      <p className="text-muted-foreground text-sm">My Journey</p>
      <p className="mb-12 text-base font-semibold">
        Starting point, focus, and personal life
      </p>

      <h2 className="font-title mb-8 text-4xl">
        I&apos;m a software engineer and maker with a focus on developer
        experience.
      </h2>

      <p className="text-paragraph mb-4 text-lg">
        My journey into software engineering began with a curiosity about how
        things work under the hood. What started as tinkering with code quickly
        evolved into a passion for creating meaningful digital experiences.
        I&apos;ve always been drawn to the intersection of design and
        functionality, where elegant solutions meet real user needs.
      </p>

      <p className="text-paragraph text-lg">
        Beyond the keyboard, I value balance and continuous growth. I&apos;m an
        avid learner who thrives on exploring new technologies and
        methodologies. When I&apos;m not coding, you&apos;ll find me
        contributing to open-source projects, mentoring fellow developers, or
        simply enjoying life&apos;s moments with family and friends. I believe
        that the best work comes from a well-rounded life.
      </p>

      <ContactLinks className="my-8" />
    </article>
  );
};
