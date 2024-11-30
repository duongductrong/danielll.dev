/* eslint-disable @typescript-eslint/no-unused-vars */

import { Text } from "@/components/ui/text";
import { motion } from "motion/react";

export interface AboutProps {}

const About = (props: AboutProps) => {
  return (
    <div className="min-h-[115vh] flex justify-center flex-col w-full py-8 px-4">
      <div>
        <Text
          as={motion.p}
          variant="subtitle"
          className="text-center text-on-accent max-w-[600px] mx-auto mb-4"
        >
          Based in Ho Chi Minh City, Vietnam.
        </Text>

        <Text
          as={motion.h2}
          variant="title"
          className="uppercase text-on-accent text-center mb-10"
        >
          About me
        </Text>

        <Text
          as={motion.p}
          className="text-center text-on-accent leading-8 max-w-[600px] mx-auto"
        >
          With <b>4+ years of expertise</b> in developing & integrating web
          applications, excel in crafting dynamic and visually stunning web
          pages.
        </Text>
        <Text
          as={motion.p}
          className="text-center text-on-accent leading-8 max-w-[600px] mx-auto mt-10"
        >
          I am always eager to learn new technologies and improve, making me
          adaptable to any environment. I am passionate about building impactful
          solutions that solve real-world problems and look forward to
          contributing to innovative projects in a supportive and
          growth-oriented workplace
        </Text>
      </div>
    </div>
  );
};

export default About;
