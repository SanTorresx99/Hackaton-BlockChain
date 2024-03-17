// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Condominio {
    // Tipos de publicação do sindico
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
    mapping(address => address[]) public moradoresPorApartamento;
    mapping(address => address[]) public visitantesPorApartamento;
    address public enderecoCondominio;

    // Modificadores
    modifier apenasSindico() {
        require(tipoUsuario[msg.sender] == TipoUsuario.Sindico, "Apenas o Sindico pode realizar esta operacao");
        _;
    }

    modifier apenasProprietario() {
        require(tipoUsuario[msg.sender] == TipoUsuario.Proprietario, "Apenas Proprietarios podem votar");
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
        require(_opcoes.length > 1, "Deve haver pelo menos duas opcoes de voto");

        votacoesCount++;
        Votacao storage novaVotacao = votacoes[votacoesCount];
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
        novaPublicacao.descricao = "Votacao durante assembleia";
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
        require(_opcoes.length > 1, "Deve haver pelo menos duas opcoes de voto");

        votacoesCount++;
        Votacao storage novaVotacao = votacoes[votacoesCount];
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
        novaPublicacao.descricao = "Votacao de longo prazo";
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
        require(votacao.totalPresentes >= 2, "Devem estar presentes o Sindico e pelo menos um proprietario para encerrar a votacao");
        votacao.encerrada = true;
        emit VotacaoEncerrada(_idVotacao);
    }

    // Funções relacionadas a gestão dos moradores e visitantes

    /**
     * @dev Adiciona um morador a um apartamento
     * @param _morador Endereço do morador a ser adicionado
     * @param _apartamento Endereço do apartamento
     */
    function adicionarMorador(address _morador, address _apartamento) public apenasProprietario {
        require(moradoresPorApartamento[_apartamento].length < 2, "Ja foram adicionados 2 moradores para este apartamento");

        tipoUsuario[_morador] = TipoUsuario.Morador;
        moradores[_morador] = true;
        moradoresPorApartamento[_apartamento].push(_morador);
    }

    /**
     * @dev Adiciona um visitante a um apartamento
     * @param _visitante Endereço do visitante a ser adicionado
     * @param _apartamento Endereço do apartamento
     */
    function adicionarVisitante(address _visitante, address _apartamento) public {
        require(visitantesPorApartamento[_apartamento].length < 3, "Ja foram adicionados 3 visitantes para este apartamento");

        visitantesPorApartamento[_apartamento].push(_visitante);
    }

    /**
     * @dev Define o endereço do condomínio
     * @param _enderecoCondominio Endereço do condomínio
     */
    function definirEnderecoCondominio(address _enderecoCondominio) public apenasSindico {
        enderecoCondominio = _enderecoCondominio;
    }

    // Eventos
    event VotacaoEncerrada(uint256 indexed idVotacao);
}
//SandroTorres