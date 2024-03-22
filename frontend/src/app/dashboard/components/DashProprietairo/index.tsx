import { ABI_condominio } from "@/app/utils/abi";
import { proxyToArr, proxyToArrVo } from "@/app/utils/fuctions";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { AiTwotoneInteraction } from "react-icons/ai";
import CardVotacao from "./CardVotacao";

type Props = {
  enderecoContrato: string;
};

function DashProprietario(props: Props) {
  const [votacoes, setVotacoes] = useState<any>([]);
  const [titulo, setTitulo] = useState("");
  const [opcoes, setOpcoes] = useState("");
  const [myAddres, setMyAdrres] = useState("");

  useEffect(() => {
    const getVotacoes = async () => {
      const providerF = new ethers.BrowserProvider(window.ethereum);
      const signF = await providerF.getSigner();
      setMyAdrres(await signF.getAddress());
      const contract = new ethers.Contract(props.enderecoContrato, ABI_condominio, signF);
      const totalDeVotacoes = await contract.getTotalDeVotacoes();
      console.log(totalDeVotacoes);
      let vo = [];

      for (let i = 1; i < totalDeVotacoes; i++) {
        const votacaoI = await contract.getVotacao(i);
        let tmp = proxyToArrVo(votacaoI);
        vo.push({ ...tmp, votacoesId: i });
        console.log("---------");
      }
      console.log(vo);
      setVotacoes(vo);
    };
    getVotacoes();
  }, []);

  const handleTitulo = (event: any) => {
    setTitulo(event.target.value);
  };
  const handleOpcoes = (event: any) => {
    setOpcoes(event.target.value);
  };

  if (votacoes.length == 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="drop-shadow-lg p-4">
      {votacoes.map((votacao: any) => {
        return (
          <CardVotacao
            myAdd={myAddres}
            votou={votacao.votaram}
            enderecoContrato={props.enderecoContrato}
            key={votacao.votacoesId}
            id={votacao.votacoesId}
            titulo={votacao.pergunta}
            opcoes={votacao.opcoes}
          />
        );
      })}
    </div>
  );
}

export default DashProprietario;
