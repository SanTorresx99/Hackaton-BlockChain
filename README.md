Nearx Hackathon

Repositório criado para o Hackathon da Nearx com o objetivo de: Realizar o gerenciamento de votações de um condomínio usando a blockchain.

# Instalação

## Metamask

Para usar este repositório, é necessário configurar o MetaMask, adicionando a rede do Hardhat e as carteiras padrões do Hardhat.

### Adicionar a Rede Hardhat

1. Abra a extensão do MetaMask.
2. Clique no botão no canto superior esquerdo.
3. Clique no botão "Adicionar rede".
4. Clique no texto "Adicionar rede manualmente".
5. Preencha os campos:
   - Nome da Rede: Hardhat
   - Nova URL RPC: http://127.0.0.1:8545/
   - ID da Cadeia: 31337
   - Símbolo da Moeda: HardhatETH

### Adicionar Carteiras Padrões

1. Abra a extensão do MetaMask.
2. Clique no nome da sua conta.
3. Clique no botão "Adicionar conta ou carteira de hardware".
4. Clique em "Importar conta".
5. Insira as chaves privadas abaixo. As duas primeiras são de síndicos, as demais são de moradores.

0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6
0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a
0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba
0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e
0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

## Criar projeto pela source

Para clonar o repositório, você pode usar o seguinte comando no terminal

```
git clone https://github.com/SanTorresx99/Hackaton-BlockChain.git
```

### Front end

Rode os comandos

```
cd frontend
npm install
npm run dev
```

### Smartcontracts

Volte para a raiz do projeto

```
cd smartcontracts
npm install
npx hardhat node
```

Abra outro terminal e rodo o comando:

```
cd smartcontracts
npx hardhat hardhat ignition deploy ignition/modules/Condominio.ts --network localhost
```

# Testes

Para garantir o bom funcionamento e a segurança do projeto, foram criados testes para garantir sua integridade. Para executar os testes, siga as instruções abaixo:

1. Certifique-se de estar na pasta `smartcontracts` do projeto.

2. Execute o seguinte comando:

```
npx hardhat testnpx hardhat testnpx hardhat test
```

1. **Teste default**

   - O Síndico foi Definido?
   - Usuários Foram Criados?

2. **Votações**

   - Criação de votação por morador deve ser negada (56ms)
   - Votação com apenas uma opção deve ser negada
   - Criação de votação pelo síndico deve ser permitida
   - Votações com uma opção devem ser negadas
   - Total de votações
   - Acessar votação de id 1
   - Moradores não devem votar
   - Síndico não deve votar
   - Proprietário pode votar
   - Proprietário não pode votar em uma opção inválida
   - Proprietário não pode votar duas vezes

3. **Adicionar Moradores**

   - Adição de moradores pelo síndico deve ser negada
   - Adição de moradores por moradores deve ser negada
   - Adição de moradores por proprietário deve ser permitida

4. **Adicionar Visitantes**

   - Adição de visitantes pelo síndico deve ser negada
   - Adição de visitantes por moradores deve ser negada
   - Adição de visitantes por proprietário deve ser permitida

# Criadores

Fernando Barbosa - [Github](#) [LinkedIn](#)

Giovani Pedroso -[Github](https://github.com/Giovani-Pedroso/) [LinkedIn](https://www.linkedin.com/in/giovani-sant-ana/)

Sandor Torres -[Github](https://github.com/SanTorresx99/) [LinkedIn](https://www.linkedin.com/in/sandro-torres99)
