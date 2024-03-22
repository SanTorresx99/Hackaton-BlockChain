import React, { ReactNode } from "react";
import Title from "../UI/Title";
import { FaBeer } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import Vantagem from "./components/Vantagen";

const vangagens = [
  { icon: <HiOutlineLightningBolt />, text: "Rapido" },
  { icon: <HiOutlineLightningBolt />, text: "Seguro" },
  { icon: <HiOutlineLightningBolt />, text: "Moderno" },
  { icon: <HiOutlineLightningBolt />, text: "Facil" },
  { icon: <HiOutlineLightningBolt />, text: "Rapido" },
  { icon: <HiOutlineLightningBolt />, text: "Rapido" },
  { icon: <HiOutlineLightningBolt />, text: "Rapido" },
];

function Vantagens() {
  return (
    <div className="mx-[20px] md:mx-[40px]">
      <Title headerLevel={1} title="Vantagens" invert="ignore" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vangagens.map((vantagem) => (
          <Vantagem icon={vantagem.icon} text={vantagem.text} />
        ))}
      </div>
    </div>
  );
}

export default Vantagens;
