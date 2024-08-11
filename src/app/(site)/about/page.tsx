"use client";

import { ComingSoon } from "@/components/blocks/coming-soon";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

const Page = () => {
  return <ComingSoon />;
};

export default Page;
