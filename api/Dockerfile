# Use a imagem oficial do Node.js como base
FROM node:18

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

RUN npm build

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação vai rodar (3001 neste caso)
EXPOSE 3001

# Inicie a aplicação
CMD [ "npm", "start" ]
