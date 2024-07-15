"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export interface LabsTemplateProps extends PropsWithChildren {}

const LabsTemplate = ({ children }: LabsTemplateProps) => {
  return (
    <motion.div
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default LabsTemplate;
