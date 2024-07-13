/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils/tailwind";
import { ComponentPropsWithoutRef } from "react";

export interface AboutProps extends ComponentPropsWithoutRef<"section"> {}

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section {...props} className={cn("container", className)}>
      <h2 className="text-3xl font-semibold leading-normal py-0 mb-10">
        About me
      </h2>
      <p className="text-base font-normal leading-normal text-muted-foreground">
        I'm Trong (or Dan), a Frontend Engineer with over 3 years of experience.
        Specializing in Web application, Landing page, I craft highly usable
        interfaces and design systems tailored to your needs.
        <br />
        <br />
        Driven by a passion for usability, I deliver unique solutions infused
        with beautiful and responsive design.
      </p>
    </section>
  );
};

export default About;
