import { expect } from "chai";
import hre from "hardhat";
import { time } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import exp from "constants";

enum TipoUsuario {
  Sindico,
  Proprietario,
  Morador,
  Visitante,
}

let contractContominio: any = null;
let signers: any = null;

before(async function () {
  signers = await hre.ethers.getSigners();
  console.log(signers);

  contractContominio = await hre.ethers.deployContract("Condominio", [
    signers[0],
    [
      { endereco: signers[1].address, tipo: TipoUsuario.Sindico },
      { endereco: signers[2].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[3].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[4].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[5].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[6].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[7].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[8].address, tipo: TipoUsuario.Proprietario },
      { endereco: signers[9].address, tipo: TipoUsuario.Morador },
    ],
  ]);

  contractContominio.publicarVotacaoAssembleia(
    "Biscoito ou Bolacha",
    ["Bolacha", "Biscoito"],
    10
  );

  contractContominio.publicarVotacaoAssembleia(
    "Qual a melhor fruta",
    ["Laranja", "Banana", "Uva"],
    10
  );
});

describe("Teste default", function () {
  it("O Sindico foi Definido?", async function () {
    const addressSindico = await contractContominio.getSindicoAddrees();
    expect(addressSindico).to.equal(signers[0].address);
  });

  it("Usuarios Foram criados", async function () {
    const usuarios = await contractContominio.getUsuarios();
    expect(usuarios.length).to.equal(9);
  });
});

describe("Votações", function () {
  it("Criação de votação por morador deve ser negada", async function () {
    await expect(
      contractContominio
        .connect(signers[1])
        .publicarVotacaoAssembleia(
          "Biscoito ou Bolacha",
          ["Bolacha", "Biscoito"],
          10
        )
    ).to.be.revertedWith("Apenas o Sindico pode realizar esta operacao");
  });

  it("Votação com apenas uma opção deve ser negada", async function () {
    await expect(
      contractContominio
        .connect(signers[0])
        .publicarVotacaoAssembleia("Biscoito ou Bolacha", ["Bolacha"], 10)
    ).to.be.revertedWith("Deve haver pelo menos duas opcoes de voto");
  });

  it("Criação de votação pelo sindico deve ser permitida", async function () {
    await expect(
      contractContominio
        .connect(signers[0])
        .publicarVotacaoAssembleia(
          "Biscoito ou Bolacha",
          ["Bolacha", "Biscoito"],
          10
        )
    );
  });

  it("Votacoes com uma opcao deve ser negada", async function () {
    await expect(
      contractContominio
        .connect(signers[0])
        .publicarVotacaoAssembleia("Biscoito ou Bolacha", ["Bolacha"], 10)
    ).to.be.revertedWith("Deve haver pelo menos duas opcoes de voto");
  });

  it("Total de votações", async function () {
    await expect(
      contractContominio
        .connect(signers[0])
        .publicarVotacaoAssembleia("Biscoito ou Bolacha", ["Bolacha"], 10)
    ).to.be.revertedWith("Deve haver pelo menos duas opcoes de voto");
  });

  it("Acessar votação de id 1", async function () {
    const re = await contractContominio.connect(signers[1]).getVotacao(1);

    // await expect(
    // ).to.be.revertedWith("Deve haver pelo menos duas opcoes de voto");
  });

  // it("Proprietarios podem votar", async function () {
  //   await expect(contractContominio.connect(signers[9]).votarProprietario(10));
  // });
  //
  it("Moradores não devem votar", async function () {
    await expect(
      contractContominio.connect(signers[9]).votar(1, "Bolacha")
    ).to.be.revertedWith("Apenas Proprietarios podem realizar esta operacao");
  });

  it("Sindico não deve votar", async function () {
    await expect(
      contractContominio.connect(signers[0]).votar(1, "Bolacha")
    ).to.be.revertedWith("Apenas Proprietarios podem realizar esta operacao");
  });

  it("Proprietari pode votar", async function () {
    const re = await contractContominio.connect(signers[2]).votar(1, "Bolacha");
  });

  it("Proprietari não pode votar em uma opcao invaliada", async function () {
    await expect(
      contractContominio.connect(signers[3]).votar(1, "Panqueca")
    ).to.be.revertedWith("Opcao de voto invalida");
  });

  it("Proprietari não pode votar duas vezes", async function () {
    await expect(
      contractContominio.connect(signers[2]).votar(1, "Panqueca")
    ).to.be.revertedWith("Esse proprietario ja votou");
  });
});

describe("Adicionar moradores", function () {
  it("Adição de moradores pelo sindico deve ser negada", async function () {
    await expect(
      contractContominio.connect(signers[0]).adicionarMorador(signers[10], 0)
    ).to.be.revertedWith("Apenas Proprietarios podem realizar esta operacao");
  });

  it("Adição de moradores por moradores deve ser negada", async function () {
    await expect(
      contractContominio.connect(signers[9]).adicionarMorador(signers[10], 0)
    ).to.be.revertedWith("Apenas Proprietarios podem realizar esta operacao");
  });

  it("Adição de moradores por proprietario deve ser permitida", async function () {
    await expect(
      contractContominio.connect(signers[3]).adicionarMorador(signers[10], 0)
    );
  });
});

describe("Adicionar visitantes", function () {
  it("Adição de moradores pelo sindico deve ser negada", async function () {
    await expect(
      contractContominio.connect(signers[0]).adicionarMorador(signers[10], 0)
    ).to.be.revertedWith("Apenas Proprietarios podem realizar esta operacao");
  });

  it("Adição de moradores por moradores deve ser negada", async function () {
    await expect(
      contractContominio.connect(signers[9]).adicionarMorador(signers[10], 0)
    ).to.be.revertedWith("Apenas Proprietarios podem realizar esta operacao");
  });

  it("Adição de moradores por proprietario deve ser permitida", async function () {
    await expect(
      contractContominio.connect(signers[3]).adicionarMorador(signers[10], 0)
    );
  });
});
