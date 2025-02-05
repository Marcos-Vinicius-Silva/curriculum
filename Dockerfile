# Usar imagem com Node.js específico
FROM node:18.19.1

# Definir o diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar restante do código
COPY . .

# Expor porta
EXPOSE 4200

# Comando para iniciar o servidor Angular
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
