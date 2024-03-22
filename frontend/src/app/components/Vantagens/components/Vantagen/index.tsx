"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  icon: ReactNode;
  text: string;
};
function Vantagem(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.4, y: "60%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center text-primary text-[34px]  border border-primary rounded"
    >
      <div className="flex items-center ">
        <div className="mr-2">{props.icon}</div>
        {props.text}
      </div>
    </motion.div>
  );
}

export default Vantagem;
