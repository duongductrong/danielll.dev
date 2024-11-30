import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "motion/react";
import { nanoid } from "nanoid";
import Image from "next/image";
import { ComponentProps } from "react";

const MotionImage = motion(Image);

interface Project {
  id: string;
  name: string;
  images: string[];
  visit?: string;
}

export interface ProjectProps {}

const projects: Project[] = [
  {
    id: nanoid(),
    name: "Lenis",
    images: [
      "https://plus.unsplash.com/premium_photo-1682125194375-1493119d0db0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565791380713-1756b9a05343?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125139523-92d7def89cd1?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    visit: "/",
  },
  {
    id: nanoid(),
    name: "Danielll",
    images: [
      "https://plus.unsplash.com/premium_photo-1682125159925-f8abacde80dd?q=80&w=2898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125304342-a49fba491087?q=80&w=2898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    visit: "https://danielll.dev",
  },
  {
    id: nanoid(),
    name: "Codestus",
    images: [
      "https://plus.unsplash.com/premium_photo-1682125172457-db4ee420e7d2?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125199596-acf7267a347c?q=80&w=2903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125134530-bc5e20156616?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    visit: "https://codestus.com",
  },
  // {
  //   id: nanoid(),
  //   name: "edgee",
  //   images: [
  //     "https://plus.unsplash.com/premium_photo-1682125199596-acf7267a347c?q=80&w=2903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1565791380713-1756b9a05343?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ],
  //   visit: "https://edgee.art"
  // },
];

const Project = ({}: ProjectProps) => {
  return (
    <motion.section className="min-h-screen flex flex-col justify-center w-full py-8">
      <div className="mb-11 flex flex-col gap-2">
        <Text
          as={motion.h2}
          variant="title"
          className="uppercase text-on-accent text-center"
        >
          More projects
        </Text>
        <Text
          as={motion.p}
          variant="subtitle"
          className="text-center text-on-accent"
        >
          Take a scroll, stay a while
        </Text>
      </div>

      <motion.div className="flex flex-col items-center">
        {projects.map((project) => (
          <ProjectItem
            initial={{ opacity: 0, scaleY: 0.8 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              transition: { type: "spring", damping: 8 },
            }}
            whileHover={{
              scaleX: 1.05,
              scaleY: 1,
              transition: { type: "spring", damping: 8 },
            }}
            key={project.id}
            item={project}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export interface ProjectItemProps extends ComponentProps<typeof motion.div> {
  item: Project;
}

export const ProjectItem = ({
  item,
  className,
  ...props
}: ProjectItemProps) => {
  const [scope, animate] = useAnimate();

  return (
    <motion.div
      {...props}
      ref={scope}
      className={cn("relative text-left inline-block w-fit", className)}
    >
      <motion.p
        className={cn(
          "text-lg font-bold uppercase font-headline tracking-tight text-on-accent cursor-pointer"
        )}
      >
        {item.name}
      </motion.p>
    </motion.div>
  );
};

export default Project;
