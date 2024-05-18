/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils/tailwind";
import { ComponentPropsWithoutRef } from "react";
import { ProjectShowCase } from "./project-showcase";

export interface ThingIDoProps extends ComponentPropsWithoutRef<"section"> {}

const ThingIDo = ({ className, ...props }: ThingIDoProps) => {
  return (
    <section {...props} className={cn("container", className)}>
      <h2 className="text-3xl font-semibold leading-normal py-0 mb-10">
        Selected works:
      </h2>

      <section className="flex flex-col gap-20">
        <ProjectShowCase
          title={
            <>
              I helped Langfarm build their UX/UI and <br /> integrate features
              for their brand.
            </>
          }
          description={
            <>
              Langfarm e-commerce allows users to buy and pay online for
              Langfarm products. <br /> Easy order management with integrated
              admin page. Support for sales <br /> staff to control inventory,
              orders, customers, and products.
            </>
          }
          items={[
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-home.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-store.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-blog.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-blog-detail.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-product-detail.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-login.png",
            },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-orders.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-order-details.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-customers.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-content-home.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-content-editable.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-content-search.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-content-blog.png",
            // },
            // {
            //   type: "image",
            //   src: "/assets/projects/langfarm/langfarm-admin-content-blog-details.png",
            // },
          ]}
        />

        <ProjectShowCase
          title={
            <>
              A dashboard builder platform can drag and drop <br /> charts and
              table report.
            </>
          }
          description={
            <>
              A platform that allows users to create and management the report.
              <br />
              Easy to use with drag and drop feature. <br />
              Visualize data with charts and tables.
            </>
          }
          items={[
            {
              type: "image",
              src: "/assets/projects/saj/saj-login.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-dashboard.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-dashboard-builder.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-dashboard-api.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-dashboard-alert.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-users-management.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-group-management.png",
            },
          ]}
        />

        <ProjectShowCase
          title={
            <>
              A Casio store popular in Japan. <br /> I and team helped them
              build their <br /> a system to manage their store at VietNam.
            </>
          }
          description={
            <>
              The casio store allows users to buy and pay online for Casio.{" "}
              <br />
              Easy order management with integrated admin page. Support for
              sales
            </>
          }
          items={[
            {
              type: "image",
              src: "/assets/projects/casio/casio-login.png",
            },
            {
              type: "image",
              src: "/assets/projects/casio/casio-signup.png",
            },
            {
              type: "image",
              src: "/assets/projects/casio/casio-home.png",
            },
            {
              type: "image",
              src: "/assets/projects/casio/casio-product-details.png",
            },
            {
              type: "image",
              src: "/assets/projects/casio/casio-products.png",
            },
            {
              type: "image",
              src: "/assets/projects/casio/casio-news.png",
            },
            {
              type: "image",
              src: "/assets/projects/casio/casio-stores.png",
            },
          ]}
        />

        <ProjectShowCase
          title={
            <>
              A landing page for a company that provides <br /> services in
              Artificial Intelligence
            </>
          }
          description={
            <>
              The landing-page of a company that provides services in Artificial
              Intelligence. <br />
              Introduce & promote the company's services.
            </>
          }
          items={[
            {
              type: "image",
              src: "/assets/projects/surumi/surumi-home.png",
            },
            {
              type: "image",
              src: "/assets/projects/surumi/surumi-home-2.png",
            },
            {
              type: "image",
              src: "/assets/projects/surumi/surumi-about.png",
            },
            {
              type: "image",
              src: "/assets/projects/surumi/surumi-products.png",
            },
            {
              type: "image",
              src: "/assets/projects/surumi/surumi-news.png",
            },
            {
              type: "image",
              src: "/assets/projects/surumi/surumi-contact.png",
            },
          ]}
        />
      </section>
    </section>
  );
};

export default ThingIDo;
