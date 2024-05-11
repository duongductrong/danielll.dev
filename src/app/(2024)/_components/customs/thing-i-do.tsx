import { cn } from "@/lib/utils/tailwind";
import { ComponentPropsWithoutRef } from "react";
import { ProjectShowCase, ProjectShowCaseItemImage } from "./project-showcase";

export interface ThingIDoProps extends ComponentPropsWithoutRef<"section"> {}

const ThingIDo = ({ className, ...props }: ThingIDoProps) => {
  return (
    <section {...props} className={cn(className)}>
      <h2 className="text-xl font-semibold leading-normal container-base py-0 mb-10">
        Selected works:
      </h2>

      <section className="flex flex-col gap-20 container">
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
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-orders.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-order-details.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-customers.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-content-home.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-content-editable.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-content-search.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-content-blog.png",
            },
            {
              type: "image",
              src: "/assets/projects/langfarm/langfarm-admin-content-blog-details.png",
            },
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
              src: "/assets/projects/saj/saj-users-management.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-group-management.png",
            },
            {
              type: "image",
              src: "/assets/projects/saj/saj-settings-profile.png",
            },
          ]}
        />
      </section>
    </section>
  );
};

export default ThingIDo;
