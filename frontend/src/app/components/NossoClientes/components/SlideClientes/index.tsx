import React from "react";

type Props = {
  imgSrc: string;
  nomeCliente: string;
};

function SlideClientes(props: Props) {
  return (
    <div>
      <img src={props.imgSrc} alt={`Image to client ${props.nomeCliente}`} />
    </div>
  );
}

export default SlideClientes;
