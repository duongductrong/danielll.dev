import { Text } from "@/components/ui/text";
import { motion } from "motion/react";

export const expertises = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "PHP"],
  },
  {
    name: "Libraries / Frameworks",
    items: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "Nest.js",
      "Express.js",
      "Laravel",
      "Tailwind CSS",
      "Ant.design",
    ],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Others",
    items: ["Git", "Agile", "Docker", "Vscode"],
  },
];

export interface ExpertiseProps {}

const Expertise = ({}: ExpertiseProps) => {
  return (
    <motion.section className="min-h-screen flex flex-col justify-center w-full py-8 px-4">
      <div className="mb-8 lg:mb-16 flex flex-col gap-2">
        <Text
          as={motion.h2}
          variant="title"
          className="uppercase text-on-accent text-center"
        >
          Expertise
        </Text>
        <Text
          as={motion.p}
          variant="subtitle"
          className="text-center text-on-accent"
        >
          Overview of my expertise and tools I use
        </Text>
      </div>

      <motion.div className="flex flex-col gap-4 max-w-[600px] w-full text-left mx-auto">
        {expertises.map((expertise) => (
          <div key={expertise.name} className="flex flex-col gap-2">
            <Text as="h3" variant="subtitle" className="font-semibold">
              {expertise.name}
            </Text>

            <div className="flex flex-wrap gap-2">
              {expertise.items.map((item, index, items) => (
                <Text key={item} as="span" className="text-sm" variant="body">
                  {item}
                  {index < items.length - 1 ? "," : ""}
                </Text>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Expertise;
