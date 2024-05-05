import { cn } from "@/lib/utils/tailwind";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export interface ThingIDoProps extends ComponentPropsWithoutRef<"section"> {}

const ThingIDo = ({ className, ...props }: ThingIDoProps) => {
  return (
    <section {...props} className={cn(className)}>
      <h2 className="text-xl font-semibold leading-normal container-base mb-10">
        Thing I do:
      </h2>
      <article className="container grid grid-cols-12 gap-10">
        <Image
          src="https://framerusercontent.com/images/aV2RPo3qOkvQPUqCW81LmgNyQ.png?scale-down-to=2048"
          width={500}
          height={500}
          alt="Project 1"
          className="col-span-12 rounded-2xl w-full h-full object-cover md:col-span-6"
        />
        <Image
          src="https://framerusercontent.com/images/aV2RPo3qOkvQPUqCW81LmgNyQ.png?scale-down-to=2048"
          width={500}
          height={500}
          alt="Project 1"
          className="col-span-12 rounded-2xl w-full h-full object-cover md:col-span-6"
        />
        <Image
          src="https://framerusercontent.com/images/aV2RPo3qOkvQPUqCW81LmgNyQ.png?scale-down-to=2048"
          width={500}
          height={500}
          alt="Project 1"
          className="col-span-12 rounded-2xl w-full h-full object-cover"
        />
      </article>
    </section>
  );
};

export default ThingIDo;
