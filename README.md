# JSCommerce

Um sistema de e-commerce desenvolvido com Node.js e Express.

## 🚀 Tecnologias

- Node.js
- Express
- JWT (JSON Web Token)
- Multer (para upload de arquivos)
- Bcrypt (para criptografia)
- CORS
- Express Rate Limit

## 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Neto002/pd-backend-express-infnet
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
JWT_SECRET=seu_segredo_jwt
```

## 🚀 Executando o projeto

Para desenvolvimento:

```bash
npm run dev
```

Para produção:

```bash
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── controllers/    # Controladores da aplicação
├── data/          # Dados e configurações
├── middlewares/   # Middlewares personalizados
├── models/        # Modelos de dados
├── routes/        # Rotas da API
└── services/      # Serviços da aplicação
```

## 🔒 Segurança

- Autenticação via JWT
- Rate limiting para proteção contra ataques
- Criptografia de senhas com bcrypt
- Upload seguro de arquivos com Multer
