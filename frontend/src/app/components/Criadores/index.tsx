import React from "react";
import CardCriador from "./CardCriador";

const criadores = [
  {
    nome: "Giovani Sant'Ana",
    position: "Front end",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid ",
    img: "/criadores/giovani.jpg",
    linkdin: "https://www.linkedin.com/in/giovani-sant-ana/",
    github: "https://github.com/Giovani-Pedroso/",
  },
  {
    nome: "Sandor Torres",
    position: "Engeheiro de blockchain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid ",
    img: "/criadores/sandor.jpg",
    linkdin: "#",
    github: "https://github.com/SanTorresx99/",
  },
  {
    nome: "Fernando Barbosa",
    position: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid ",
    img: "https://picsum.photos/200",
    linkdin: "#",
    github: "https://github.com/cyraxtrade",
  },
];

function Criadores() {
  return (
    <div className="mx-[20px] md:mx-[40px] mb-9  ">
      <div className="  grid grid-cols-3 place-items-center gap-4">
        {criadores.map(criador => (
          <CardCriador
            linkdin={criador.linkdin}
            github={criador.github}
            nome={criador.nome}
            position={criador.position}
            img={criador.img}
            description={criador.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Criadores;
