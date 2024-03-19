// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Forge.sol";

contract Condominio {
    // Eventos
    event VotacaoEncerrada(uint256 indexed idVotacao);

    // Estruturas de dados
    struct Votacao {
        string pergunta;
        bool encerrada;
    }

    // Mapeamentos
    mapping(uint256 => Votacao) public votacoes;

    // Funções

    function publicarVotacaoLongoPrazo(Forge _forge, string memory _pergunta) public {
        // Publica a votação de longo prazo
        uint256 votacaoId = _forge.criarVotacao(_pergunta);
        votacoes[votacaoId] = Votacao(_pergunta, false);
    }

    function encerrarVotacao(Forge _forge, uint256 _idVotacao) public {
        // Encerra a votação
        votacoes[_idVotacao].encerrada = true;
        emit VotacaoEncerrada(_idVotacao);
    }
}
