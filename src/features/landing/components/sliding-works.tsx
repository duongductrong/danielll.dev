/* eslint-disable react-hooks/exhaustive-deps */
import {
  BoundingBox,
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { slideItemVariants, slideVariants } from "../animate";

const items = [
  {
    image:
      "https://cdn.sanity.io/images/3vte03iz/production/88c89d0adf606ef4e2e5a06b2d1fe94e8e11ef37-1800x1800.png?auto=format&w=400&h=400",
    name: "Langfarm",
  },
  {
    image:
      "https://cdn.sanity.io/images/3vte03iz/production/c6b80d2852d439cb1eae43d8d9ef5044bab1b3ce-3000x3000.png?auto=format&w=400&h=400",
    name: "Casio Watches",
  },
  {
    image:
      "https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=400&h=400",
    name: "Ranhill saj",
  },
  {
    image:
      "https://cdn.sanity.io/images/3vte03iz/production/8326e452ed0f33067c42aabed5c18dfdd3d3be8f-2048x2048.png?auto=format&w=400&h=400",
    name: "Edgee",
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
        animate("button", { y: -100 }, { duration: 0.3 });
      }}
      onMouseLeave={() => {
        animate("button", { y: 0 });
      }}
    >
      <div className="group overflow-hidden rounded-2xl">
        <Image
          src={item.image}
          width={800}
          height={800}
          className="min-w-[300px] max-w-[33.068vw] pointer-events-none select-none duration-500 transition-all group-hover:scale-150 group-hover:rotate-[12deg]"
          alt="Image"
        />
      </div>

      <button className="bg-on-secondary mt-4 px-6 tracking-tighter py-4 rounded-full text-pretty font-headline leading-none uppercase font-semibold text-on-accent">
        <span className="translate-y-0.5 block">{item.name}</span>
      </button>
    </motion.div>
  );
};

export default SlidingWorks;
