/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Condominio {
  export type STipoUsuarioStruct = {
    endereco: AddressLike;
    tipo: BigNumberish;
  };

  export type STipoUsuarioStructOutput = [endereco: string, tipo: bigint] & {
    endereco: string;
    tipo: bigint;
  };

  export type VotacaoStruct = {
    pergunta: string;
    opcoes: string[];
    totalVotos: BigNumberish;
    totalPresentes: BigNumberish;
    totalAbstencoes: BigNumberish;
    validade: BigNumberish;
    encerrada: boolean;
    presentes: AddressLike[];
    votou: AddressLike[];
    votos: AddressLike[];
  };

  export type VotacaoStructOutput = [
    pergunta: string,
    opcoes: string[],
    totalVotos: bigint,
    totalPresentes: bigint,
    totalAbstencoes: bigint,
    validade: bigint,
    encerrada: boolean,
    presentes: string[],
    votou: string[],
    votos: string[]
  ] & {
    pergunta: string;
    opcoes: string[];
    totalVotos: bigint;
    totalPresentes: bigint;
    totalAbstencoes: bigint;
    validade: bigint;
    encerrada: boolean;
    presentes: string[];
    votou: string[];
    votos: string[];
  };
}

export interface CondominioInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "adicionarMorador"
      | "adicionarVisitante"
      | "chaveApartamento"
      | "chaveCondominio"
      | "chaveProprietario"
      | "chaveSindico"
      | "definirEnderecoCondominio"
      | "encerrarVotacao"
      | "enderecoSindico"
      | "getSindicoAddrees"
      | "getTotalDeVotacoes"
      | "getUsuarios"
      | "getVotacao"
      | "moradores"
      | "moradoresPorApartamento"
      | "publicacoes"
      | "publicacoesCount"
      | "publicarVotacaoAssembleia"
      | "tipoUsuario"
      | "usuarios"
      | "visitantesPorApartamento"
      | "votacoes"
      | "votacoesCount"
      | "votar"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "VotacaoEncerrada"): EventFragment;

  encodeFunctionData(
    functionFragment: "adicionarMorador",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adicionarVisitante",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "chaveApartamento",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "chaveCondominio",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "chaveProprietario",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "chaveSindico",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "definirEnderecoCondominio",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encerrarVotacao",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enderecoSindico",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSindicoAddrees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDeVotacoes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUsuarios",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVotacao",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moradores",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "moradoresPorApartamento",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "publicacoes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "publicacoesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicarVotacaoAssembleia",
    values: [string, string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tipoUsuario",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "usuarios",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "visitantesPorApartamento",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votacoes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votacoesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votar",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "adicionarMorador",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adicionarVisitante",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chaveApartamento",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chaveCondominio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chaveProprietario",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chaveSindico",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "definirEnderecoCondominio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encerrarVotacao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enderecoSindico",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSindicoAddrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDeVotacoes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUsuarios",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotacao", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "moradores", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moradoresPorApartamento",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicacoes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicacoesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicarVotacaoAssembleia",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tipoUsuario",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usuarios", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "visitantesPorApartamento",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "votacoes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votacoesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "votar", data: BytesLike): Result;
}

export namespace VotacaoEncerradaEvent {
  export type InputTuple = [idVotacao: BigNumberish];
  export type OutputTuple = [idVotacao: bigint];
  export interface OutputObject {
    idVotacao: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Condominio extends BaseContract {
  connect(runner?: ContractRunner | null): Condominio;
  waitForDeployment(): Promise<this>;

  interface: CondominioInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  adicionarMorador: TypedContractMethod<
    [_morador: AddressLike, _apartamento: BigNumberish],
    [void],
    "nonpayable"
  >;

  adicionarVisitante: TypedContractMethod<
    [_visitante: AddressLike, _apartamento: AddressLike],
    [void],
    "nonpayable"
  >;

  chaveApartamento: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  chaveCondominio: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  chaveProprietario: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  chaveSindico: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  definirEnderecoCondominio: TypedContractMethod<
    [_enderecoCondominio: AddressLike],
    [void],
    "nonpayable"
  >;

  encerrarVotacao: TypedContractMethod<
    [_idVotacao: BigNumberish],
    [void],
    "nonpayable"
  >;

  enderecoSindico: TypedContractMethod<[], [string], "view">;

  getSindicoAddrees: TypedContractMethod<[], [string], "view">;

  getTotalDeVotacoes: TypedContractMethod<[], [bigint], "view">;

  getUsuarios: TypedContractMethod<
    [],
    [Condominio.STipoUsuarioStructOutput[]],
    "view"
  >;

  getVotacao: TypedContractMethod<
    [_idVotacao: BigNumberish],
    [Condominio.VotacaoStructOutput],
    "view"
  >;

  moradores: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  moradoresPorApartamento: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [string],
    "view"
  >;

  publicacoes: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, string, bigint, bigint, bigint] & {
        id: bigint;
        autor: string;
        titulo: string;
        descricao: string;
        tipo: bigint;
        dataCriacao: bigint;
        validade: bigint;
      }
    ],
    "view"
  >;

  publicacoesCount: TypedContractMethod<[], [bigint], "view">;

  publicarVotacaoAssembleia: TypedContractMethod<
    [_pergunta: string, _opcoes: string[], _validade: BigNumberish],
    [void],
    "nonpayable"
  >;

  tipoUsuario: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  usuarios: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { endereco: string; tipo: bigint }],
    "view"
  >;

  visitantesPorApartamento: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  votacoes: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint, boolean] & {
        pergunta: string;
        totalVotos: bigint;
        totalPresentes: bigint;
        totalAbstencoes: bigint;
        validade: bigint;
        encerrada: boolean;
      }
    ],
    "view"
  >;

  votacoesCount: TypedContractMethod<[], [bigint], "view">;

  votar: TypedContractMethod<
    [_idVotacao: BigNumberish, _opcaoVoto: string],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "adicionarMorador"
  ): TypedContractMethod<
    [_morador: AddressLike, _apartamento: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "adicionarVisitante"
  ): TypedContractMethod<
    [_visitante: AddressLike, _apartamento: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "chaveApartamento"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "chaveCondominio"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "chaveProprietario"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "chaveSindico"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "definirEnderecoCondominio"
  ): TypedContractMethod<
    [_enderecoCondominio: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "encerrarVotacao"
  ): TypedContractMethod<[_idVotacao: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enderecoSindico"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getSindicoAddrees"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getTotalDeVotacoes"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUsuarios"
  ): TypedContractMethod<[], [Condominio.STipoUsuarioStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getVotacao"
  ): TypedContractMethod<
    [_idVotacao: BigNumberish],
    [Condominio.VotacaoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "moradores"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "moradoresPorApartamento"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "publicacoes"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, string, bigint, bigint, bigint] & {
        id: bigint;
        autor: string;
        titulo: string;
        descricao: string;
        tipo: bigint;
        dataCriacao: bigint;
        validade: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "publicacoesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "publicarVotacaoAssembleia"
  ): TypedContractMethod<
    [_pergunta: string, _opcoes: string[], _validade: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tipoUsuario"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "usuarios"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { endereco: string; tipo: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "visitantesPorApartamento"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "votacoes"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint, boolean] & {
        pergunta: string;
        totalVotos: bigint;
        totalPresentes: bigint;
        totalAbstencoes: bigint;
        validade: bigint;
        encerrada: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "votacoesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votar"
  ): TypedContractMethod<
    [_idVotacao: BigNumberish, _opcaoVoto: string],
    [void],
    "payable"
  >;

  getEvent(
    key: "VotacaoEncerrada"
  ): TypedContractEvent<
    VotacaoEncerradaEvent.InputTuple,
    VotacaoEncerradaEvent.OutputTuple,
    VotacaoEncerradaEvent.OutputObject
  >;

  filters: {
    "VotacaoEncerrada(uint256)": TypedContractEvent<
      VotacaoEncerradaEvent.InputTuple,
      VotacaoEncerradaEvent.OutputTuple,
      VotacaoEncerradaEvent.OutputObject
    >;
    VotacaoEncerrada: TypedContractEvent<
      VotacaoEncerradaEvent.InputTuple,
      VotacaoEncerradaEvent.OutputTuple,
      VotacaoEncerradaEvent.OutputObject
    >;
  };
}