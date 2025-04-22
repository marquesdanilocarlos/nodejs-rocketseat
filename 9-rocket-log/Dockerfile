FROM node:current-alpine

ARG PORT
ENV PORT=${PORT}

# Define o diretório de trabalho
WORKDIR /app

# Instala dependências do sistema para Prisma
RUN apk add --no-cache \
  bash \
  curl \
  python3 \
  openssl \
  openssl-dev \
  libc6-compat

# Copia apenas os arquivos de dependência primeiro para melhor aproveitamento do cache
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Define a engine correta para o Prisma no Alpine
ENV PRISMA_CLI_BINARY_TARGETS=linux-musl

# Gera o Prisma Client
RUN npx prisma generate

# Expõe a porta
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]