import { cn } from "@/lib/utils/tailwind";
import { ComponentPropsWithoutRef } from "react";
import { ProjectShowCase } from "./project-showcase";

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

        {/* <ProjectShowCase
          title={
            <>
              I helped Mercu shape their AI Assistant <br /> interface and
              refreshed the UI & UX
            </>
          }
          description={
            <>
              The AI assistant for growth-focused frontline workforces.
              <br /> Automate your hiring. Scale your onboarding, and make{" "}
              <br />
              knowledge and tools available to your employees. Instantly.
            </>
          }
          items={[
            {
              type: "image",
              src: "https://framerusercontent.com/images/xfSKv6TwzOwq0QregjNzIoC30n0.png?scale-down-to=2048",
            },
            {
              type: "image",
              src: "https://framerusercontent.com/images/xfSKv6TwzOwq0QregjNzIoC30n0.png?scale-down-to=2048",
            },
            {
              type: "image",
              src: "https://framerusercontent.com/images/xfSKv6TwzOwq0QregjNzIoC30n0.png?scale-down-to=2048",
            },
          ]}
        /> */}
      </section>
    </section>
  );
};

export default ThingIDo;
