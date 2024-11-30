"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Pictures from "../components/pictures";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

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
        <Link
          target="_blank"
          className="inline-flex items-center gap-1"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/duongductrong/"
        >
          LinkedIn
        </Link>
        ,{" "}
        <Link
          target="_blank"
          className="inline-flex items-center gap-1"
          rel="noopener noreferrer"
          href="https://github.com/duongductrong"
        >
          Github
        </Link>
        ,{" "}
        <Link
          target="_blank"
          className="inline-flex items-center gap-1"
          rel="noopener noreferrer"
          href="https://danielll.dev"
        >
          Website
        </Link>
        ,{" "}
        <Link
          target="_blank"
          className="inline-flex items-center gap-1"
          rel="noopener noreferrer"
          href="/assets/documents/Fullstack Developer - Duong Duc Trong - 2000.pdf"
        >
          Resume PDF
        </Link>
      </motion.p>
    </motion.section>
  );
};

export default Hero;
