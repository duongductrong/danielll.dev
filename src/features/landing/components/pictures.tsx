/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from "@/lib/utils";
import { motion, useAnimate, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { MouseEvent, useEffect, useRef } from "react";
import { pictureItemVariant, pictureVariants } from "../animate";

export interface PicturesProps {}

const Pictures = ({}: PicturesProps) => {
  const [scope] = useAnimate();

  const items = [
    {
      image:
        "https://cdn.sanity.io/images/3vte03iz/production/88c89d0adf606ef4e2e5a06b2d1fe94e8e11ef37-1800x1800.png?auto=format&w=400&h=400",
      className: "bg-accent",
    },
    {
      image:
        "https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=400&h=400",
      className: "bg-primary",
    },
    {
      image:
        "https://cdn.sanity.io/images/3vte03iz/production/c6b80d2852d439cb1eae43d8d9ef5044bab1b3ce-3000x3000.png?auto=format&w=400&h=400",
      className: "bg-neutral-500",
    },
    {
      image:
        "https://cdn.sanity.io/images/3vte03iz/production/8326e452ed0f33067c42aabed5c18dfdd3d3be8f-2048x2048.png?auto=format&w=400&h=400",
      className: "bg-secondary",
    },
  ];

  return (
    <motion.div
      ref={scope}
      variants={pictureVariants}
      initial="invisible"
      whileInView="visible"
      className="flex items-center justify-center my-12 [&>*]:-ml-[6.174vw] md:[&>*]:-ml-[4.174vw] [&>*:fist-child]:-ml-0"
    >
      {items.map((item, index) => (
        <PictureItem item={item} index={index} key={index} />
      ))}
    </motion.div>
  );
};

export interface PictureItemProps {
  item: {
    image: string;
    className?: string;
  };
  index: number;
}

export const PictureItem = ({ item, index }: PictureItemProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  const constraint = useRef({ top: 0, left: 0, right: 0, bottom: 0 });

  const handleMouseMove = (ev: MouseEvent<HTMLDivElement>) => {
    const self = {
      left: ev.currentTarget.offsetLeft,
      top: ev.currentTarget.offsetTop,
      bottom:
        ev.currentTarget.offsetTop +
        ev.currentTarget.getBoundingClientRect().height,
      right:
        ev.currentTarget.offsetLeft +
        ev.currentTarget.getBoundingClientRect().width,
      width: ev.currentTarget.getBoundingClientRect().width,
      height: ev.currentTarget.getBoundingClientRect().height,

      getMiddlePoint() {
        return { y: this.height / 2, x: this.width / 2 };
      },

      getMousePos() {
        return {
          x: ev.clientX - this.left,
          y: ev.clientY - this.top,
        };
      },

      constraints() {
        return {
          top: this.top + 20,
          right: this.right + 20,
          bottom: this.bottom + 20,
          left: this.left + 20,
        };
      },

      getMouseOffsetChanges() {
        const mousePos = this.getMousePos();
        const midPoint = this.getMiddlePoint();

        const offsetX =
          mousePos.x < midPoint.x
            ? mousePos.x - midPoint.x
            : -(midPoint.x - mousePos.x);

        const offsetY =
          mousePos.y < midPoint.y
            ? mousePos.y - midPoint.y
            : -(midPoint.y - mousePos.y);

        return {
          x:
            (offsetX < 0 && offsetX < constraint.current.left) ||
            (offsetX > 0 && offsetX > constraint.current.right)
              ? 0
              : offsetX,
          y:
            (offsetY < 0 && offsetY < constraint.current.top) ||
            (offsetY > 0 && offsetY > constraint.current.bottom)
              ? 0
              : offsetY,
        };
      },
    };

    const cal = self.getMouseOffsetChanges();

    mouseX.set(cal.x);
    mouseY.set(cal.y);
  };

  const handleMouseOut = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleUpdateConstraints = () => {
    if (nodeRef.current) {
      const ev = nodeRef.current;
      const boundedRect = ev.getBoundingClientRect();
      const offset = 10;

      constraint.current = {
        left: -boundedRect.width - offset,
        top: -boundedRect.height - offset,
        bottom: boundedRect.height + offset,
        right: boundedRect.width + offset,
      };
    }
  };

  const xSpring = useSpring(mouseX, {
    restDelta: 0.001,
    stiffness: 140,
    restSpeed: 0.001,
  });

  const ySpring = useSpring(mouseY, {
    restDelta: 0.001,
    stiffness: 140,
    restSpeed: 0.001,
  });

  useEffect(() => {
    handleUpdateConstraints();

    window.addEventListener("resize", handleUpdateConstraints);

    return () => {
      window.removeEventListener("resize", handleUpdateConstraints);
    };
  }, [nodeRef.current]);

  return (
    <motion.div
      variants={pictureItemVariant()}
      className={cn(
        "size-[12.69vw] min-w-[100px] min-h-[100px] rounded-2xl overflow-hidden",
        item.className
      )}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={nodeRef}
      style={{ x: xSpring, y: ySpring, z: index }}
      // style={{ x: mouseX, y: mouseY }}
      // transition={{
      //   type: "spring",
      //   duration: 0.8,
      // }}
    >
      <Image
        src={item.image}
        alt="Picture"
        width={200}
        height={200}
        className="pointer-events-none select-none w-full h-full"
      />
    </motion.div>
  );
};

export default Pictures;
