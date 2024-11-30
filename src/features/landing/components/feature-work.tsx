import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMedia } from "react-use";

const MotionLink = motion(Link);

export const projects = [
  {
    no: "01",
    title: "Lang farm",
    category: "ecom",
    description:
      "A popular e-commerce platform specializing in local farm products.",
    url: "https://langfarm.com",
    role: "FullStack Developer",
  },
  {
    no: "02",
    title: "Ranhill SAJ",
    category: "Drag",
    description: "A dashboard to visualize sensor reports for RanhillSAJ.",
    url: "#",
    role: "Frontend Developer",
  },
  {
    no: "03",
    title: "Casio Watch",
    category: "ecom",
    description: "A small e-commerce platform for Casio Watch Anh Khue.",
    url: "https://casio.anhkhue.com",
    role: "FullStack Developer",
  },
];

export interface FeatureWorkProps {}

const FeatureWork = ({}: FeatureWorkProps) => {
  return (
    <motion.section
      className={cn(
        "min-h-[80vh] lg:min-h-[115vh] flex flex-col justify-center w-full pt-24",
        "bg-black rounded-3xl max-w-[95%] mx-auto"
      )}
    >
      <motion.header className="mb-11 flex flex-col gap-2">
        <Text
          as={motion.h2}
          variant="title"
          className="uppercase text-on-primary text-center"
        >
          Feature work
        </Text>
        <Text
          as={motion.p}
          variant="subtitle"
          className="text-center text-on-secondary"
        >
          Selected works recently working and notable projects.
        </Text>
      </motion.header>

      <main className="block">
        {projects.map((project, index) => {
          const isOdd = index % 2 === 0;
          return (
            <FeatureWorkItem
              key={project.no}
              index={project.no}
              isOdd={isOdd}
              title={project.title}
              category={project.category}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </main>
    </motion.section>
  );
};

export interface FeatureWorkItemProps {
  index: string;
  isOdd: boolean;
  title: string;
  category: string;
  description: string;
  url: string;
}

export const FeatureWorkItem = ({
  index: no,
  isOdd,
  title,
  description,
  url,
}: FeatureWorkItemProps) => {
  const isMobile = useMedia("(max-width: 1024px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "start -50%"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(no, latest);
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["25%", "30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-12deg", "0deg"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["-100%", "10%"]);
  const textYReverse = useTransform(scrollYProgress, [0, 1], ["100%", "10%"]);

  const imageYSpring = useSpring(imageY, { damping: 10, stiffness: 40 });
  const textYSpring = useSpring(textY, { damping: 10, stiffness: 40 });
  const textYReverseSpring = useSpring(textYReverse, {
    damping: 10,
    stiffness: 40,
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky top-[-50%] min-h-screen",
        "flex flex-col gap-20 bg-primary pt-40 px-[6.34vw] overflow-hidden",
        isOdd ? "bg-black rounded-3xl" : "bg-on-primary"
      )}
    >
      <Text
        as={motion.p}
        variant="body"
        className={cn(
          "tracking-widest mb-4",
          isOdd ? "text-on-primary" : "text-on-accent"
        )}
      >
        ({no})
      </Text>
      <Text
        as={motion.h2}
        variant="headline"
        className={cn(
          "uppercase text-on-secondary text-center",
          isOdd ? "text-on-primary" : "text-on-accent"
        )}
        style={{
          y: textYSpring,
        }}
      >
        {title}
      </Text>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <Text
          as={MotionLink}
          target="_blank"
          variant="title"
          className={cn(
            "uppercase text-left tracking-normal italic flex items-center",
            isOdd ? "text-on-primary" : "text-on-accent"
          )}
          href={url}
          style={
            isMobile
              ? {}
              : {
                  y: textYReverseSpring,
                }
          }
        >
          Visit <MoveUpRight className="size-4" />
        </Text>

        <Text
          as="p"
          variant="body"
          className={cn(
            "max-w-[300px] text-center lg:text-left",
            isOdd ? "text-on-primary" : "text-on-accent"
          )}
        >
          {description}
        </Text>
      </div>

      <motion.div
        style={{
          y: imageYSpring,
          x: "-50%",
          rotate,
        }}
        className="lg:w-[16.53vw] lg:h-[23.14vw] absolute bottom-0 left-1/2 rounded-md overflow-hidden"
      >
        <Image
          src="/assets/images/premium_photo-1682125191965-80aef56da033.avif"
          alt="Thumbnail"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default FeatureWork;
