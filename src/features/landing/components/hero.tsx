"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Pictures from "../components/pictures";

export interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <motion.section
      variants={{
        invisible: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="invisible"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col h-screen items-center"
    >
      <motion.p className="font-headline mt-8 text-sm text-center font-semibold uppercase text-on-accent">
        Viet Nam, Ho Chi Minh City
      </motion.p>
      <motion.p className="text-center text-[0.5625rem] font-normal uppercase text-on-secondary tracking-widest">
        duongductrong06@gmail.com
      </motion.p>

      <div className="w-full h-full flex justify-center items-center flex-col my-auto">
        <motion.div className="text-center">
          <motion.h1
            className={cn(
              "text-headline font-headline font-bold",
              "uppercase",
              "text-on-accent"
            )}
          >
            Daniel. D
          </motion.h1>

          <Pictures />

          <motion.div className="flex flex-col">
            <motion.p
              className={cn(
                "text-headline font-headline font-bold",
                "uppercase",
                "text-on-secondary"
              )}
            >
              Fullstack,
            </motion.p>
            <motion.p
              className={cn(
                "text-headline font-headline font-bold",
                "uppercase",
                "text-on-secondary"
              )}
            >
              Frontend Engineer
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <motion.p className="font-headline text-sm text-center font-semibold uppercase text-on-accent mt-auto">
        Get in touch by
      </motion.p>
      <motion.p className="text-center text-[0.5625rem] font-normal uppercase text-on-accent mb-11 tracking-widest mb-8">
        LinkedIn, Github, Dribbble, Resume, PDF
      </motion.p>
    </motion.section>
  );
};

export default Hero;
