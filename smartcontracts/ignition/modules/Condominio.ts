import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";

enum TipoUsuario {
  Sindico,
  Proprietario,
  Morador,
  Visitante,
}

const HARD_ADDR = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
  "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
  "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
  "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
  "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
];

const CondominioModule = buildModule("CondominioVai1", (m) => {
  let signers: any = null;

  const condominio = m.contract("Condominio", [
    HARD_ADDR[0],
    [
      { endereco: HARD_ADDR[0], tipo: TipoUsuario.Sindico },
      { endereco: HARD_ADDR[1], tipo: TipoUsuario.Sindico },
      { endereco: HARD_ADDR[2], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[3], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[4], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[5], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[6], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[7], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[8], tipo: TipoUsuario.Proprietario },
      { endereco: HARD_ADDR[9], tipo: TipoUsuario.Morador },
    ],
  ]);

  return { condominio };
});

export default CondominioModule;
