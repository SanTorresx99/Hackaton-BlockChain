"use client";
import { useEffect, useState } from "react";
import { Audio, Oval } from "react-loader-spinner";
import { BrowserProvider, ethers } from "ethers";
import { Signer } from "ethers";
import Modal from "../components/UI/Modal";
import CardInstallMetaMask from "./components/CardInstallMetaMask";
import { Contract } from "ethers";
import { Provider } from "ethers";
import { AbstractProvider } from "ethers";
import { ABI_condominio } from "@/app/utils/abi";
import { proxyToArr } from "../utils/fuctions";
import DashSindico from "./components/DashSindico";
import DashProprietario from "./components/DashProprietairo";

function Test() {
  // const ADD_CONTRACT = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const ADD_CONTRACT = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // const [isLoading, setIsLoading] = useState(true);
  // -2 Means is loading, -1 Means is configuring the contract, 0 is sindico, 1 proprietary, 2 morador
  const [typeOfUser, setTypeOfUser] = useState(-2);
  // const [typeOfUser, setTypeOfUser] = useState(-1| 0 | 1 | 2 | 3);
  const [modalOpen, setmodalOpen] = useState(false);
  const [input, setInput] = useState("0xa513e6e4b8f2a923d98304ec87f64353c4d5c853");

  let signer: Signer;
  let provider: any;

  useEffect(() => {
    async function int() {
      if (window.ethereum == null) {
        // alert("MetaMask not installed; using read-only defaults");
        setmodalOpen(true);
        provider = ethers.getDefaultProvider();
        return;
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);

        signer = await provider.getSigner();
        console.log("block number:", await provider.getBlockNumber());
        console.log("Balance:", await provider.getBalance("0x178860376CA5fDd44CA6579fEC60F57Fd5F92C17"));
        console.log(
          "transaction count:",
          await provider.getTransactionCount("0x178860376CA5fDd44CA6579fEC60F57Fd5F92C17"),
        );

        console.log("Adders:", await signer.getAddress());
        setTypeOfUser(-1);
      }
    }
    int();
  }, []);

  const sentEth = async () => {
    const tx = await signer.sendTransaction({
      to: "0x26A086c944BF43700D9053d1d4C9D5696b04B2DA",
      value: ethers.parseEther("0.001"),
    });

    // Often you may wish to wait until the transaction is mined
    const receipt = await tx.wait();
  };

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3

  const conectarContratoCondominio = async () => {
    const providerF = new ethers.BrowserProvider(window.ethereum);
    const signF = await providerF.getSigner();
    const addresUser = await signF.getAddress();

    let add: string = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    if (input != "") {
      add = input;
    }

    // Conecta ao contrato do condominio

    console.log(ADD_CONTRACT);
    const contract = new ethers.Contract(ADD_CONTRACT, ABI_condominio, providerF);
    const sindicoUser = await contract.getSindicoAddrees();
    const usuarios = await contract.getUsuarios();
    console.log("Sindico", sindicoUser);
    const usuariosArr = proxyToArr(usuarios);

    console.log(addresUser);
    for (let i in usuariosArr) {
      console.log("for in", usuariosArr[i]);
      console.log("for in", usuariosArr[i].addrs);

      // console.log(`${addresUser} == ${usuariosArr[i].addrs} is ${usuariosArr[i].addrs == addresUser}`);
      if (usuariosArr[i].addrs == addresUser) {
        const tipoUsuario = usuariosArr[i].type;
        let role;
        if (tipoUsuario == 0) {
          role = "Sindico";
        }
        if (tipoUsuario == 1) {
          role = "Proprietario";
        }
        if (tipoUsuario == 1) {
          role = "Morado";
        }

        alert(`Bem vindo caro ${role}`);
        setTypeOfUser(usuariosArr[i].type);
        return;
      }
    }
    alert("Usa carteira não esta registrada nesse condominio");
  };

  //
  if (typeOfUser == -2) {
    return (
      <main className="flex min-h-screen justify-center items-center">
        <div className="w-[200]">
          <Oval
            visible={true}
            height="200"
            width="200"
            color="#ff0000"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </main>
    );
  }

  if (typeOfUser == -1) {
    return (
      <main className="flex min-h-screen  justify-center items-center">
        <div className="flex flex-col w-[40%]">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                Digite o endereço do contrato do seu condominio - o padrao é<br />
              </span>
            </div>
            <p>
              <span className="text-sm">0x5FbDB2315678afecb367f032d93F642f64180aa3</span>
            </p>
            <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Endereço do condarto"
              className="input input-bordered w-full mb-2"
            />
          </label>
          <button className="btn btn-primary text-white" onClick={conectarContratoCondominio}>
            Procurar condominio
          </button>
        </div>

        <Modal isOpen={modalOpen}>
          <CardInstallMetaMask />
        </Modal>
      </main>
    );
  }

  if (typeOfUser == 0) {
    return (
      <main className="flex min-h-screen justify-center items-center">
        <div className="w-[200]">
          <DashSindico enderecoContrato={ADD_CONTRACT} />{" "}
        </div>
      </main>
    );
  }

  if (typeOfUser == 1) {
    return (
      <main className="flex min-h-screen justify-center items-center">
        <div className="w-[200]">
          <DashProprietario enderecoContrato={ADD_CONTRACT} />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen  justify-center items-center">
      <div className="flex flex-col w-[40%]">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">
              Digite o endereço do contrato do seu condominio - o padrao é<br />
            </span>
          </div>
          <p>
            <span className="text-sm">0x5FbDB2315678afecb367f032d93F642f64180aa3</span>
          </p>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Endereço do condarto"
            className="input input-bordered w-full mb-2"
          />
        </label>
        <button className="btn btn-primary text-white" onClick={conectarContratoCondominio}>
          Procurar condominio
        </button>
      </div>

      <Modal isOpen={modalOpen}>
        <CardInstallMetaMask />
      </Modal>
    </main>
  );
}

export default Test;
