import { ABI_condominio } from "@/app/utils/abi";
import { ethers } from "ethers";
import React, { useState } from "react";

type Props = {
  titulo: string;
  id: number;
  myAdd: string;
  opcoes: string[];
  enderecoContrato: string;
  votou: string[];
};
function CardVotacao(props: Props) {
  const [jaVotou, setJavotou] = useState(false);

  const handleButton = async (opcao: string) => {
    try {
      const providerF = new ethers.BrowserProvider(window.ethereum);
      const signF = await providerF.getSigner();
      const contract = new ethers.Contract(props.enderecoContrato, ABI_condominio, signF);
      const siad = await contract.getSindicoAddrees();
      const re = await contract.votar(props.id, opcao);
      alert(`Voce votou`);
      setJavotou(true);
    } catch (err: any) {
      console.log(err);
      alert(`Ocorreu um erro ${err.reason}`);
    }
  };

  if (props.votou.includes(props.myAdd)) return;

  if (jaVotou) return;

  return (
    <div className="flex flex-col my-2">
      <p>{props.titulo}</p>
      <div className="flex flex-row flex-wrap">
        {props.opcoes.map((opcao: string) => {
          return (
            <button className="btn btn-primary text-white w-[40%] mr-2 mb-2" onClick={() => handleButton(opcao)}>
              {opcao}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CardVotacao;
