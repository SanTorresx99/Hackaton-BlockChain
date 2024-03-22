// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Condominio {
    // Tipos de publicação do síndico
    enum TipoPublicacao { Documento, NotasExplicativas, Convocacao, Votacao }

    // Estrutura de publicação
    struct Publicacao {
        uint256 id;
        address autor;
        string titulo;
        string descricao;
        TipoPublicacao tipo;
        uint256 dataCriacao;
        uint256 validade;
        mapping (address => bool) acessivel;
    }

    // Estrutura de voto
    struct OpcaoVoto {
        string opcao;
        uint256 contagemVotos;
    }

    struct Votacao {
        string pergunta;
        mapping (string => OpcaoVoto) opcoes;
        uint256 totalVotos;
        uint256 totalPresentes;
        uint256 totalAbstencoes;
        uint256 validade;
        bool encerrada;
        address[] presentes;
        mapping (address => bool) votou;
    }

    // Registro das publicações/voto
    mapping(uint256 => Publicacao) public publicacoes;
    mapping(uint256 => Votacao) public votacoes;
    uint256 public publicacoesCount;
    uint256 public votacoesCount;

    // Tipos de acessos e restrições
    enum TipoUsuario { Sindico, Proprietario, Morador, Visitante }
    mapping(address => TipoUsuario) public tipoUsuario;
    mapping(address => bool) public moradores;
    mapping(uint256 => address[]) public moradoresPorApartamento;
    mapping(address => address[]) public visitantesPorApartamento;
    mapping(address => address) public chaveCondominio;
    mapping(address => address) public chaveSindico;
    mapping(address => address) public chaveProprietario;
    mapping(address => address) public chaveApartamento;

    // Colocar como private dps
    struct sTipoUsuario{
      address endereco;
      TipoUsuario tipo;
    }

    // Enumeração dos apartamentos
    enum Apartamento { Apt01, Apt02, Apt03, Apt04, Apt05 }

    // Endereço do síndico
    address public immutable enderecoSindico;

    constructor(address _enderecoSindico, sTipoUsuario[] memory _usuarios ){
      enderecoSindico = _enderecoSindico;
    //
      for( uint256 i; i<_usuarios.length; i++ ){
        tipoUsuario[_usuarios[i].endereco] = _usuarios[i].tipo;
        usuarios.push(_usuarios[i]);
      }
    }

    // Modificadores
    modifier apenasSindico() {
        require(msg.sender == enderecoSindico, "Apenas o Sindico pode realizar esta operacao");
        _;
    }

    modifier apenasProprietario() {
        require(tipoUsuario[msg.sender] == TipoUsuario.Proprietario, "Apenas Proprietarios podem realizar esta operacao");
        _;
    }

    modifier votacaoAberta(uint256 _idVotacao) {
        require(!votacoes[_idVotacao].encerrada, "Esta votacao esta encerrada");
        _;
    }

    // Funções relacionadas a publicações e votações

    /**
     * @dev Publica uma votação durante uma assembleia
     * @param _pergunta Pergunta da votação
     * @param _opcoes Opções de voto
     * @param _validade Prazo de validade da votação
     */
    function publicarVotacaoAssembleia(string memory _pergunta, string[] memory _opcoes, uint256 _validade) public apenasSindico {
        require(_opcoes.length > 1, "Deve haver pelo menos duas opções de voto");

        votacoesCount++;
        Votacao storage novaVotacao = votacoes[votacoesCount];
        novaVotacao.id = votacoesCount;
        novaVotacao.pergunta = _pergunta;
        novaVotacao.totalVotos = 0;
        novaVotacao.totalPresentes = 0;
        novaVotacao.totalAbstencoes = 0;
        novaVotacao.validade = _validade;
        novaVotacao.encerrada = false;

        for (uint256 i = 0; i < _opcoes.length; i++) {
            novaVotacao.opcoes[_opcoes[i]].opcao = _opcoes[i];
            novaVotacao.opcoes[_opcoes[i]].contagemVotos = 0;
        }

        publicacoesCount++;
        Publicacao storage novaPublicacao = publicacoes[publicacoesCount];
        novaPublicacao.id = publicacoesCount;
        novaPublicacao.autor = msg.sender;
        novaPublicacao.titulo = _pergunta;
        novaPublicacao.descricao = "Votação durante assembleia";
        novaPublicacao.tipo = TipoPublicacao.Votacao;
        novaPublicacao.dataCriacao = block.timestamp;
        novaPublicacao.validade = _validade;
        novaPublicacao.acessivel[msg.sender] = true;
    }

    /**
     * @dev Publica uma votação de longo prazo
     * @param _pergunta Pergunta da votação
     * @param _opcoes Opções de voto
     * @param _validade Prazo de validade da votação
     */
    function publicarVotacaoLongoPrazo(string memory _pergunta, string[] memory _opcoes, uint256 _validade) public apenasSindico {
        require(_opcoes.length > 1, "Deve haver pelo menos duas opções de voto");

        votacoesCount++;
        Votacao storage novaVotacao = votacoes[votacoesCount];
        novaVotacao.id = votacoesCount;
        novaVotacao.pergunta = _pergunta;
        novaVotacao.totalVotos = 0;
        novaVotacao.totalPresentes = 0;
        novaVotacao.totalAbstencoes = 0;
        novaVotacao.validade = _validade;
        novaVotacao.encerrada = false;

        for (uint256 i = 0; i < _opcoes.length; i++) {
            novaVotacao.opcoes[_opcoes[i]].opcao = _opcoes[i];
            novaVotacao.opcoes[_opcoes[i]].contagemVotos = 0;
        }

        publicacoesCount++;
        Publicacao storage novaPublicacao = publicacoes[publicacoesCount];
        novaPublicacao.id = publicacoesCount;
        novaPublicacao.autor = msg.sender;
        novaPublicacao.titulo = _pergunta;
        novaPublicacao.descricao = "Votação de longo prazo";
        novaPublicacao.tipo = TipoPublicacao.Votacao;
        novaPublicacao.dataCriacao = block.timestamp;
        novaPublicacao.validade = _validade;
        novaPublicacao.acessivel[msg.sender] = true;
    }

    /**
     * @dev Encerra uma votação
          * @param _idVotacao ID da votação a ser encerrada
     */
    function encerrarVotacao(uint256 _idVotacao) public apenasSindico votacaoAberta(_idVotacao) {
        Votacao storage votacao = votacoes[_idVotacao];
        require(votacao.totalPresentes >= 2, "Devem estar presentes o Síndico e pelo menos um proprietário para encerrar a votação");
        votacao.encerrada = true;
        emit VotacaoEncerrada(_idVotacao);
        emitResultadoVotacao(_idVotacao);
    }

    /**
     * @dev Permite que um proprietário vote em uma opção de uma votação
     * @param _idVotacao ID da votação
     * @param _opcaoVoto Opção de voto selecionada
     */
    function votarProprietario(uint256 _idVotacao, string memory _opcaoVoto) public apenasProprietario votacaoAberta(_idVotacao) {
        Votacao storage votacao = votacoes[_idVotacao];
        require(votacao.opcoes[_opcaoVoto].contagemVotos >= 0, "Opção de voto inválida");
        require(!votacao.votou[msg.sender], "Você já votou nesta votação");

        votacao.totalVotos++;
        votacao.opcoes[_opcaoVoto].contagemVotos++;
        votacao.votou[msg.sender] = true;

        emit VotoRegistrado(_idVotacao, msg.sender, _opcaoVoto);
    }

    /**
     * @dev Publica o resultado de uma votação encerrada
     * @param _idVotacao ID da votação
     */
    function emitResultadoVotacao(uint256 _idVotacao) internal {
        Votacao storage votacao = votacoes[_idVotacao];
        require(votacao.encerrada, "A votação ainda está aberta");

        // Emitir evento com o resultado da votação
        emit ResultadoVotacao(_idVotacao, votacao.totalVotos, votacao.opcoes);
    }

    // Eventos
    event VotacaoEncerrada(uint256 indexed idVotacao);
    event VotoRegistrado(uint256 indexed idVotacao, address indexed votante, string opcaoVoto);
    event ResultadoVotacao(uint256 indexed idVotacao, uint256 totalVotos, mapping (string => OpcaoVoto) opcoes);
}