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
    visit: "https://codestus.com"
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
        <motion.h2 className="text-title font-headline uppercase font-bold text-on-accent text-center">
          More projects
        </motion.h2>
        <motion.p className="text-base font-headline font-medium text-center text-on-accent">
          Take a scroll, stay a while
        </motion.p>
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
              scaleX: 1.1,
              scaleY: 0.95,
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
      className={cn("relative text-center inline-block w-fit", className)}
    >
      <motion.p
        className={cn(
          "text-headline uppercase font-black tracking-tight text-on-accent/50 cursor-pointer",
          "hover:text-on-accent transition-all duration-300"
        )}
        onMouseEnter={() => {
          const childItems = [
            ...scope.current.querySelectorAll("img"),
          ] as HTMLElement[];

          childItems.forEach((child) => {
            const offsetY = Math.random() * 10 > 5 ? 1 : -1;
            const offsetX = Math.random() * 10 > 5 ? 1 : -1;
            const offsetR = Math.random() * 10 > 5 ? 1 : -1;
            const y = Math.random() * 30 * offsetY;
            const x = Math.random() * 10 * offsetX;
            const rotate = Math.random() * 30 * offsetR;
            animate(
              child,
              {
                opacity: 1,
                visibility: "visible",
                transform: `translate(${x}px,${y}px) rotate(${rotate}deg) scale(1)`,
                transformOrigin: "center",
              },
              {
                type: "spring",
                damping: 10,
              }
            );
          });
        }}
        onMouseLeave={() =>
          animate("img", {
            opacity: 0,
            visibility: "hidden",
            rotate: `0deg`,
            transform: `translate(0px,0px) rotate(0deg) scale(0)`,
            transformOrigin: "center",
          })
        }
      >
        {item.name}

        {/* Left */}
        <MotionImage
          src={item.images[0]}
          width={150}
          height={150}
          className="size-[9.92vw] pointer-events-none select-none shadow-2xl rounded-2xl origin-center absolute -left-[35%] -top-[40%]"
          alt={item.name}
          initial={{ opacity: 0, visibility: "hidden" }}
        />

        {/* Right */}
        <MotionImage
          src={item.images[1]}
          width={150}
          height={150}
          className="size-[9.92vw] pointer-events-none select-none shadow-2xl rounded-2xl origin-center absolute -right-[35%] -top-[60%]"
          alt={item.name}
          initial={{ opacity: 0, visibility: "hidden" }}
        />

        {/* Center */}
        <MotionImage
          src={item.images[2]}
          width={150}
          height={150}
          className="size-[9.92vw] pointer-events-none select-none shadow-2xl rounded-2xl origin-center absolute left-[35%] -top-[200%]"
          alt={item.name}
          initial={{ opacity: 0, visibility: "hidden" }}
        />
      </motion.p>
    </motion.div>
  );
};

export default Project;
