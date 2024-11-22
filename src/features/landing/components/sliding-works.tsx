/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRight } from "lucide-react";
import {
  BoundingBox,
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { slideItemVariants, slideVariants } from "../animate";

const items = [
  {
    image:
      "https://langfarm.com/_next/static/media/open-graph-image.d5bd20e4.png",
    name: "Langfarm",
    visit: "https://langfarm.com",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682125172457-db4ee420e7d2?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casio Watches",
    visit: "https://casio.anhkhue.com",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682125134530-bc5e20156616?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ranhill saj",
    visit: "#",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682125139523-92d7def89cd1?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Edgee",
    visit: "http://edgee.art",
  },
];

export interface SlidingWorksProps {}

const SlidingWorks = ({}: SlidingWorksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const controls = useDragControls();

  const slideX = useMotionValue(0);

  const [constraints, setConstraints] = useState<BoundingBox>({
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  });

  const handleUpdateConstraints = () => {
    if (containerRef.current) {
      const child = [
        ...(sliderRef.current?.children ?? []),
      ] as HTMLDivElement[];

      const scrollW = containerRef.current.scrollWidth;
      const w = Number(containerRef.current?.clientWidth);

      const gap = child?.[0]?.offsetLeft || 128;

      setConstraints((prev) => ({
        ...prev,
        left: (scrollW - w + gap) * -1,
      }));
    }
  };

  useEffect(() => {
    handleUpdateConstraints();

    window.addEventListener("resize", handleUpdateConstraints);

    return () => {
      window.removeEventListener("resize", handleUpdateConstraints);
    };
  }, [containerRef.current]);

  return (
    <motion.div
      ref={containerRef}
      onPointerDown={(e) => controls.start(e)}
      className="max-w-full py-10 overflow-hidden"
    >
      <motion.nav
        ref={sliderRef}
        drag="x"
        dragConstraints={constraints}
        dragControls={controls}
        dragListener={false}
        style={{
          x: slideX,
        }}
        variants={slideVariants}
        initial="invisible"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-row justify-start gap-[8.46vw] cursor-grab px-[8.46vw]"
      >
        {items.map((item, index) => {
          return <SlidingWork key={index} item={item} />;
        })}
      </motion.nav>
    </motion.div>
  );
};

export interface SlidingWorkProps {
  item: {
    image: string;
    name: string;
    visit?: string;
  };
}

export const SlidingWork = ({ item }: SlidingWorkProps) => {
  const [scope, animate] = useAnimate();
  return (
    <motion.div
      ref={scope}
      variants={slideItemVariants}
      className="shrink-0 flex-col flex items-center"
      onMouseEnter={() => {
        animate("[role=button]", { y: -100 }, { duration: 0.3 });
      }}
      onMouseLeave={() => {
        animate("[role=button]", { y: 0 });
      }}
    >
      <div className="group overflow-hidden rounded-2xl">
        <Image
          src={item.image}
          width={800}
          height={800}
          className="min-w-[300px] min-h-[300px] h-[33.068vw] w-[33.068vw] pointer-events-none select-none duration-500 transition-all group-hover:scale-150 group-hover:rotate-[12deg]"
          alt="Image"
        />
      </div>

      <Link
        href={item.visit ?? "#"}
        role="button"
        target={item.visit?.startsWith("https://") ? "_blank" : "_self"}
        className="bg-on-secondary mt-4 px-4 tracking-tighter py-3 rounded-full text-pretty font-headline leading-none uppercase font-semibold text-on-accent flex items-center gap-2"
      >
        <span className="translate-y-0.5 block">{item.name}</span>
        <div className="size-8 rounded-full flex items-center justify-center text-on-secondary bg-on-accent">
          <ArrowRight className="size-4" />
        </div>
      </Link>
    </motion.div>
  );
};

export default SlidingWorks;
