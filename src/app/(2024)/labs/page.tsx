"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { motion } from "framer-motion";

const Labs = () => {
  const sayHello = "hi, im Dan".split(" ");
  const welcome = "welcome to my home.".split(" ");

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
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className="text-2xl font-semibold text-center max-w-[400px] flex-wrap justify-center -translate-y-8 flex gap-2"
        >
          {welcome.map((text, idx, texts) => (
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          width={400}
          height={400}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          src="/assets/drawing-tree.png"
          alt=""
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-[30%] left-[60%] cursor-pointer"
        // transition={{ duration: 2 }}
        whileTap={{ opacity: 0.5, scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
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
