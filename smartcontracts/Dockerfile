# Use a imagem Node.js como base
FROM node:20

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Instale as dependências
RUN npm install

EXPOSE 8545

# Comando padrão a ser executado quando o contêiner for iniciado
CMD ["npx", "hardhat", "node"]

# CMD [ "npx", "hardhat", "ignition", "deploy", "ignition/modules/Condominio.ts", "--network", "localhost" ]

