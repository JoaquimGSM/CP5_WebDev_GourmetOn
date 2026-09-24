# GourmetOn

O GourmetOn é uma landing page desenvolvida para o Checkpoint 05 da disciplina de Web Development.

A aplicação permite explorar diferentes opções de pratos utilizando dados fornecidos pela API Spoonacular. O usuário pode escolher a quantidade de pratos que deseja visualizar e realizar novas buscas de forma dinâmica.

## Integrantes

- Joaquim Gaspardo Souza Moura — RM 572208
- Felipe Kenji Takata — RM 568739
- Gabriel Ferreira Flausino — RM 572486
- Gustavo Ducatti — RM 570932

## Funcionalidades

- Busca de pratos utilizando a API Spoonacular
- Escolha da quantidade de pratos exibidos
- Exibição dinâmica das informações com React
- Imagens e informações obtidas diretamente da API
- Navegação por seções com scroll suave
- Menu fixo
- Layout responsivo
- Formulário de contato
- Seção de depoimentos
- Integração com Font Awesome para ícones

## Tecnologias

- React
- Vite
- JavaScript
- Tailwind CSS
- Fetch API
- Spoonacular API
- Font Awesome
- Vercel

## Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── Apresentacao.jsx
│   ├── CardComida.jsx
│   ├── Contato.jsx
│   ├── Depoimentos.jsx
│   ├── Footer.jsx
│   ├── Funcionalidades.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── Pratos.jsx
├── services/
│   └── comidasApi.js
├── App.jsx
├── index.css
└── main.jsx
```

## API

O projeto utiliza a Spoonacular API para buscar informações sobre diferentes pratos.

Para executar o projeto, crie um arquivo `.env.local` na raiz:

```env
VITE_SPOONACULAR_API_KEY=SUA_CHAVE_AQUI
```

O arquivo `.env.example` mostra a variável necessária sem expor a chave da API.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/JoaquimGSM/CP5_WebDev_GourmetOn.git
```

Entre na pasta:

```bash
cd CP5_Web_Dev
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env.local` e adicione sua chave da Spoonacular.

Depois execute:

```bash
npm run dev
```

## Deploy

A aplicação foi publicada utilizando a Vercel.

**Deploy:** https://cp-5-web-dev-gourmet-on.vercel.app/

**Repositório:** https://github.com/JoaquimGSM/CP5_WebDev_GourmetOn

## Disciplina

Web Development with JS

FIAP — Engenharia de Software

Checkpoint 05 — 2026