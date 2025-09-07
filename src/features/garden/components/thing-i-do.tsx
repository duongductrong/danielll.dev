/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { ProjectShowCase, ProjectShowCaseItemImage } from "./project-showcase";

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
        Langfarm e-commerce allows users to buy and pay online for Langfarm
        products. <br /> Easy order management with integrated admin page.
        Support for sales <br /> staff to control inventory, orders, customers,
        and products.
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
        A platform that allows users to create and management the report.
        <br />
        Easy to use with drag and drop feature. <br />
        Visualize data with charts and tables.
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
        The casio store allows users to buy and pay online for Casio. <br />
        Easy order management with integrated admin page. Support for sales
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
        A studio website for Edgee Art. <br />
        Introduce & promote the company's services.
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
        The landing-page of a company that provides services in Artificial
        Intelligence. <br />
        Introduce & promote the company's services.
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
      <h2 className="text-3xl font-semibold leading-normal py-0 mb-10">
        🔧 Selected works
      </h2>

      <section className="flex flex-col gap-20">
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
