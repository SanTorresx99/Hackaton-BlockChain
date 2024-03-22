export const ABI_condominio = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_enderecoSindico",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "endereco",
            type: "address",
          },
          {
            internalType: "enum Condominio.TipoUsuario",
            name: "tipo",
            type: "uint8",
          },
        ],
        internalType: "struct Condominio.sTipoUsuario[]",
        name: "_usuarios",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "idVotacao",
        type: "uint256",
      },
    ],
    name: "VotacaoEncerrada",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_morador",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_apartamento",
        type: "uint256",
      },
    ],
    name: "adicionarMorador",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_visitante",
        type: "address",
      },
      {
        internalType: "address",
        name: "_apartamento",
        type: "address",
      },
    ],
    name: "adicionarVisitante",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "chaveApartamento",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "chaveCondominio",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "chaveProprietario",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "chaveSindico",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_enderecoCondominio",
        type: "address",
      },
    ],
    name: "definirEnderecoCondominio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idVotacao",
        type: "uint256",
      },
    ],
    name: "encerrarVotacao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enderecoSindico",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSindicoAddrees",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalDeVotacoes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsuarios",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "endereco",
            type: "address",
          },
          {
            internalType: "enum Condominio.TipoUsuario",
            name: "tipo",
            type: "uint8",
          },
        ],
        internalType: "struct Condominio.sTipoUsuario[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idVotacao",
        type: "uint256",
      },
    ],
    name: "getVotacao",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "pergunta",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "opcoes",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "totalVotos",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPresentes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAbstencoes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validade",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "encerrada",
            type: "bool",
          },
          {
            internalType: "address[]",
            name: "presentes",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "votou",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "votos",
            type: "address[]",
          },
        ],
        internalType: "struct Condominio.Votacao",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "moradores",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "moradoresPorApartamento",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "publicacoes",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "autor",
        type: "address",
      },
      {
        internalType: "string",
        name: "titulo",
        type: "string",
      },
      {
        internalType: "string",
        name: "descricao",
        type: "string",
      },
      {
        internalType: "enum Condominio.TipoPublicacao",
        name: "tipo",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "dataCriacao",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validade",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicacoesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_pergunta",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_opcoes",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_validade",
        type: "uint256",
      },
    ],
    name: "publicarVotacaoAssembleia",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tipoUsuario",
    outputs: [
      {
        internalType: "enum Condominio.TipoUsuario",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "usuarios",
    outputs: [
      {
        internalType: "address",
        name: "endereco",
        type: "address",
      },
      {
        internalType: "enum Condominio.TipoUsuario",
        name: "tipo",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "visitantesPorApartamento",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votacoes",
    outputs: [
      {
        internalType: "string",
        name: "pergunta",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalVotos",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalPresentes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAbstencoes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validade",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "encerrada",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votacoesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idVotacao",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_opcaoVoto",
        type: "string",
      },
    ],
    name: "votar",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
