"use client";
import React from "react";

import Slider from "react-slick";
import SlideClientes from "./components/SlideClientes";

const clientes = [
  { nomeCliente: "fut0", imgSrc: "./clientes/1.png" },
  { nomeCliente: "fut1", imgSrc: "./clientes/2.png" },
  { nomeCliente: "fut2", imgSrc: "./clientes/3.png" },
];

function NossoCliente() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="mx-[20px] md:mx-[40px] my-[40px]">
        <Slider {...settings}>
          {clientes.map((cliente) => (
            <SlideClientes
              imgSrc={cliente.imgSrc}
              nomeCliente={cliente.nomeCliente}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NossoCliente;
