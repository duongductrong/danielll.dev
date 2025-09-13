/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { ProjectShowCase, ProjectShowCaseItemImage } from "./project-showcase";
import { Text } from "@/components/ui/text";

export interface ThingIDoProps extends ComponentPropsWithoutRef<"section"> {}

// Define a type for project data
export type Project = {
  title: React.ReactNode;
  description: React.ReactNode;
  items: ProjectShowCaseItemImage[];
  website?: string | null;
};

// Store all project data in a variable
const projects: Project[] = [
  {
    title: <>Langfarm</>,
    description: (
      <>
        As a key member of the development team, I contributed to the
        development of Langfarm e-commerce, architecting and implementing the
        core features of the platform.
      </>
    ),
    website: "https://langfarm.com",
    items: [
      {
        type: "image" as const,
        src: "/assets/projects/langfarm/langfarm-home.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/langfarm/langfarm-store.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/langfarm/langfarm-blog.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/langfarm/langfarm-blog-detail.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/langfarm/langfarm-product-detail.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/langfarm/langfarm-admin-login.png",
      },
    ],
  },
  {
    title: <>Ranhil SAJ</>,
    website: null,
    description: (
      <>
        As a frontend engineer of this project, I collaborated with the team in
        Malaysia to build a platform that allows users to create and management
        the sensor report.
      </>
    ),
    items: [
      { type: "image" as const, src: "/assets/projects/saj/saj-dashboard.png" },
      {
        type: "image" as const,
        src: "/assets/projects/saj/saj-dashboard-builder.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/saj/saj-dashboard-api.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/saj/saj-dashboard-alert.png",
      },
    ],
  },
  {
    title: <>Anh Khue Casio</>,
    website: "https://casio.anhkhue.com",
    description: (
      <>
        As a fullstack engineer of this project, I collaborated with the team in
        Vietnam to build a platform that allows users to buy and pay online for
        Casio.
      </>
    ),
    items: [
      { type: "image" as const, src: "/assets/projects/casio/casio-login.png" },
      {
        type: "image" as const,
        src: "/assets/projects/casio/casio-signup.png",
      },
      { type: "image" as const, src: "/assets/projects/casio/casio-home.png" },
      {
        type: "image" as const,
        src: "/assets/projects/casio/casio-product-details.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/casio/casio-products.png",
      },
      { type: "image" as const, src: "/assets/projects/casio/casio-news.png" },
      {
        type: "image" as const,
        src: "/assets/projects/casio/casio-stores.png",
      },
    ],
  },
  {
    title: <>Edgee Art.</>,
    website: "https://edgee.art",
    description: (
      <>
        As a freelance fullstack engineer of this project, I helped founder of
        Edgee Art to build a portfolio website for his art studio.
      </>
    ),
    items: [
      {
        type: "image" as const,
        src: "/assets/projects/edgee/edgee-art-home.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/edgee/edgee-art-home-2.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/edgee/edgee-art-home-3.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/edgee/edgee-art-studio.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/edgee/edgee-art-work.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/edgee/edgee-art-talk.png",
      },
    ],
  },
  {
    title: <>Surumi</>,
    website: null,
    description: (
      <>
        As a freelance frontend engineer of this project, I helped Surumi to
        build a landing page for their company.
      </>
    ),
    items: [
      {
        type: "image" as const,
        src: "/assets/projects/surumi/surumi-home.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/surumi/surumi-home-2.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/surumi/surumi-about.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/surumi/surumi-products.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/surumi/surumi-news.png",
      },
      {
        type: "image" as const,
        src: "/assets/projects/surumi/surumi-contact.png",
      },
    ],
  },
];

const ThingIDo = ({ className, ...props }: ThingIDoProps) => {
  return (
    <section {...props} className={cn("container", className)}>
      <Text as="h2" variant="headline">
        Projects
      </Text>
      <Text as="p" variant="body" className="mb-4 text-muted-foreground">
        Some of my projects that I have worked on as a software engineer.
      </Text>

      <section className="flex flex-col gap-10">
        {projects.map((project, idx) => (
          <ProjectShowCase
            key={idx}
            title={project.title}
            description={project.description}
            items={project.items}
            href={project.website}
          />
        ))}
      </section>
    </section>
  );
};

export default ThingIDo;
