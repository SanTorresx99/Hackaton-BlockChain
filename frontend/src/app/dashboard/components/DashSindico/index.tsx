import { ABI_condominio } from "@/app/utils/abi";
import { ethers } from "ethers";
import React, { useState } from "react";

type Props = {
  enderecoContrato: string;
};

function DashSindico(props: Props) {
  const [titulo, setTitulo] = useState("");
  const [opcoes, setOpcoes] = useState("");

  const handleTitulo = (event: any) => {
    setTitulo(event.target.value);
  };
  const handleOpcoes = (event: any) => {
    setOpcoes(event.target.value);
  };

  const handleVotacao = async () => {
    const tituloVotacao = titulo;
    const opcoesVotacao = opcoes.split(";");

    if (opcoesVotacao.length < 2) {
      alert("Coloque pelo menos 2 opcoes na votação");
      return;
    }

    if (!titulo) {
      alert("A votação presisa de um titulo");
      return;
    }
    try {
      const providerF = new ethers.BrowserProvider(window.ethereum);
      const signF = await providerF.getSigner();
      const contract = new ethers.Contract(props.enderecoContrato, ABI_condominio, signF);
      const siad = await contract.getSindicoAddrees();
      const reVota = await contract.publicarVotacaoAssembleia(tituloVotacao, opcoesVotacao, 10);
      console.log(reVota);
      setTitulo("");
      setOpcoes("");
      alert(`Votação criada`);
    } catch (err: any) {
      alert(`Ocorreu um erro ${err.reason}`);
    }
  };

  return (
    <div className="drop-shadow-lg p-4">
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Titulo da votação</span>
          </div>
          <input
            type="text"
            value={titulo}
            onChange={handleTitulo}
            placeholder="Titulo"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Opcoes (separe as opcoes com ;</span>
          </div>
          <input
            type="text"
            value={opcoes}
            onChange={handleOpcoes}
            placeholder="Titulo"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      <button className="btn btn-primary text-white w-full mt-2" onClick={handleVotacao}>
        Publicar Votação
      </button>
    </div>
  );
}

export default DashSindico;
