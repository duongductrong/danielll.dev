"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Labs = () => {
  const router = useRouter();
  const sayHello = "hello, i am Dan.".split(" ");

  return (
    <div className="font-geist-mono flex items-center justify-center h-lvh w-full bg-[#F7F6F4]">
      <div className="flex flex-col gap-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className="text-2xl font-semibold text-center flex-wrap justify-center -translate-y-8 flex gap-2"
        >
          {sayHello.map((text, idx, texts) => (
            <motion.span
              key={text}
              className="inline-flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx / texts.length }}
            >
              {text}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      <motion.div
        role="presentation"
        initial={{ opacity: 0, translateX: "-50%", transformOrigin: "bottom" }}
        animate={{ opacity: 1, translateX: "-50%" }}
        transition={{ duration: 1 }}
        className="group absolute bottom-1 left-1/2 max-w-[400px] cursor-pointer flex flex-col items-center"
      >
        <p className="group-hover:opacity-100 group-hover:visible invisible opacity-0 text-xs inline-flex items-center gap-1 mr-8 transition-all duration-300 ease-linear">
          visit labs <ArrowRight className="w-3 h-4" />{" "}
        </p>

        <div className="relative">
          <Image
            width={400}
            height={400}
            className="size-full"
            src="/assets/drawing-tree.png"
            alt=""
          />

          <div className="absolute transform -rotate-45 -top-4 -left-8 text-xs mr-8">
            <div className="flex flex-col items-center gap-3">
              try hover me? <ArrowDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-[30%] left-[60%] cursor-pointer"
        whileTap={{ opacity: 0.5, scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        exit={{ opacity: 0 }}
      >
        <Image
          width={100}
          height={100}
          src="/assets/drawing-cloud.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Labs;
