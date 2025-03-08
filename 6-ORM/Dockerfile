FROM node:current-alpine

#Define o diretório que a aplicação ficará dentro do container
WORKDIR /app

# Copiar os arquivos de dependências primeiro (para aproveitar cache)
COPY package.json package-lock.json ./

#Copia o conteúdo do diretório onde está o arquivo Dockerfile para o WORKDIR
COPY . .

#Executa o comando de instalação das dependências
RUN npm install

#Define a porta que permitirá ser acessada de fora do container
EXPOSE 3333

#Executa o comando de execução do servidor
#RUN npm run dev

CMD ["npm", "run", "dev"]