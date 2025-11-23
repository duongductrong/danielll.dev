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
    ogImage: "/assets/images/premium_photo-1682125191965-80aef56da033.avif",
  },
  {
    no: "02",
    title: "Ranhill SAJ",
    category: "Drag",
    description: "A dashboard to visualize sensor reports for RanhillSAJ.",
    url: "#",
    role: "Frontend Developer",
    ogImage: "/assets/images/premium_photo-1682125191965-80aef56da033.avif",
  },
  {
    no: "03",
    title: "Casio Watch",
    category: "ecom",
    description: "A small e-commerce platform for Casio Watch Anh Khue.",
    url: "https://casio.anhkhue.com",
    role: "FullStack Developer",
    ogImage: "/assets/images/premium_photo-1682125191965-80aef56da033.avif",
  },
  {
    no: "04",
    title: "Edgee art",
    category: "studio",
    description: "A studio website for Edgeea Art.",
    url: "https://edgee.art",
    role: "FullStack Developer",
    ogImage: "/assets/images/edgee-art-og-image.webp",
  },
];

export interface FeatureWorkProps {}

const FeatureWork = ({}: FeatureWorkProps) => {
  return (
    <motion.section
      className={cn(
        "flex min-h-[80vh] w-full flex-col justify-center pt-24 lg:min-h-[115vh]",
        "mx-auto max-w-[95%] rounded-3xl bg-black",
      )}
    >
      <motion.header className="mb-11 flex flex-col gap-2">
        <Text
          as={motion.h2}
          variant="title"
          className="text-on-primary text-center uppercase"
        >
          Feature work
        </Text>
        <Text
          as={motion.p}
          variant="subtitle"
          className="text-on-secondary text-center"
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
              ogImage={project.ogImage}
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
  ogImage: string;
}

export const FeatureWorkItem = ({
  index: no,
  isOdd,
  title,
  description,
  url,
  ogImage,
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
        "bg-primary flex flex-col gap-20 overflow-hidden px-[6.34vw] pt-40",
        isOdd ? "rounded-3xl bg-black" : "bg-on-primary",
      )}
    >
      <Text
        as={motion.p}
        variant="body"
        className={cn(
          "mb-4 tracking-widest",
          isOdd ? "text-on-primary" : "text-on-accent",
        )}
      >
        ({no})
      </Text>
      <Text
        as={motion.h2}
        variant="headline"
        className={cn(
          "text-on-secondary text-center uppercase",
          isOdd ? "text-on-primary" : "text-on-accent",
        )}
        style={{
          y: textYSpring,
        }}
      >
        {title}
      </Text>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <Text
          as={MotionLink as any}
          target="_blank"
          variant="title"
          className={cn(
            "flex items-center text-left tracking-normal uppercase italic",
            isOdd ? "text-on-primary" : "text-on-accent",
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
            isOdd ? "text-on-primary" : "text-on-accent",
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
        className="absolute bottom-0 left-1/2 overflow-hidden rounded-md lg:h-[23.14vw] lg:w-[16.53vw]"
      >
        <Image
          src={ogImage}
          alt="Thumbnail"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default FeatureWork;
