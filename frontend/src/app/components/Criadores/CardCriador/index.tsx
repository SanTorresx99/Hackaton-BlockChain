import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  img: string;
  nome: string;
  position: string;
  description: string;
  linkdin: string;
  github: string;
};
function CardCriador(props: Props) {
  return (
    <div className="flex flex-col items-center  md:w-[400px]  p-2 border rounded border-primary">
      <img className="rounded-md" height={300} width={300} src={props.img} />
      <p>{props.nome}</p>
      <p className="text-primary font-bold text-2xl">{props.position}</p>
      <p className="text-justify">{props.description}</p>
      <div className="flex  text-4xl w-[50%] justify-evenly text-blue-400">
        <a target="_blank" href={props.linkdin}>
          <FaLinkedin />
        </a>
        <a target="_blank" href={props.github}>
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default CardCriador;
