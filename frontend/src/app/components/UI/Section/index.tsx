"use client";
import { reverse } from "dns";
import Image from "next/image";
import React, { ReactNode } from "react";
import Title from "../Title";
import { motion } from "framer-motion";

type Props = {
  imgSrc: string;
  title: string;
  reverse?: boolean;
  children: ReactNode;
  animate?: "right" | "left" | "scale";
  headerLevel: 1 | 2 | 3 | 4;
};

const CLASS_TITLE = "text-primary text-[32px] md:text-[64px]";

const variants = {
  none: {},
  left: { x: "0%" },
  right: { x: "0%" },
  scale: { scale: 1.0 },
};

const variantsInit = {
  none: {},
  left: { x: "-30%" },
  right: { x: "30%" },
  scale: { scale: 0.6 },
};

function Section(props: Props) {
  return (
    <motion.section
      variants={variants}
      initial={props.animate ? variantsInit[props.animate] : variants["none"]}
      whileInView={props.animate ? props.animate : "none"}
      // animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col my-4"
    >
      <Title headerLevel={props.headerLevel} title={props.title} invert="yes" />
      <div
        className={`flex flex-col md:flex-row ${props.reverse ? "md:flex-row-reverse" : ""} justify-between`}
      >
        <img src={props.imgSrc} alt="Logo" className="w-full md:w-[40%]" />
        <div className="md:max-w-[40%]">
          <Title
            headerLevel={props.headerLevel}
            title={props.title}
            invert="no"
          />
          <p>{props.children}</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Section;
