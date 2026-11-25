# atividade-express-post
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0A3D91,50:1565C0,100:42A5F5&height=220&section=header&text=Atividade%20Express%20POST&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Desenvolvimento%20de%20APIs%20com%20Node.js%20%7C%20TypeScript%20%7C%20Express.js&descSize=18&descAlignY=60&animation=fadeIn" alt="Cabeçalho" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=800&color=1E88E5&center=true&vCenter=true&width=700&lines=Rotas+POST+com+Express.js+%F0%9F%9A%80;Dados+via+req.body+%E2%86%92+resposta+em+JSON;Valida%C3%A7%C3%A3o+e+tratamento+de+erros+%E2%9C%85;Testado+com+Postman+%F0%9F%A7%AA" alt="Typing SVG" />
</a>

<br/>

![Node.js](https://img.shields.io/badge/Node.js-0D47A1?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-1565C0?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-1976D2?style=for-the-badge&logo=express&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-1E88E5?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-2196F3?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-42A5F5?style=for-the-badge&logo=github&logoColor=white)

![SENAI](https://img.shields.io/badge/SENAI-2026-0A3D91?style=flat-square)
![Curso](https://img.shields.io/badge/Curso-T%C3%A9cnico%20em%20Desenvolvimento%20de%20Sistemas-1565C0?style=flat-square)
![Método](https://img.shields.io/badge/M%C3%A9todo-POST-1E88E5?style=flat-square)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-42A5F5?style=flat-square)

</div>

---

## 🧭 Navegação rápida

<div align="center">

| | | |
|:---:|:---:|:---:|
| [📘 Sobre](#-sobre-o-projeto) | [🎯 Objetivos](#-objetivos) | [🛠️ Tecnologias](#️-tecnologias-utilizadas) |
| [🧩 Atividades](#-atividades-desenvolvidas) | [🗂️ Estrutura](#️-estrutura-do-projeto) | [⚙️ Como executar](#️-como-executar-o-projeto) |
| [🧪 Postman](#-testes-com-postman) | [🎓 Aprendizados](#-aprendizados) | [👩‍💻 Autora](#-autora) |

</div>

---

## 📘 Sobre o projeto

Este repositório reúne atividades práticas criadas para **aprender e aplicar os conceitos de criação de APIs** com **Node.js**, **TypeScript** e o framework **Express.js**.

Foram implementadas rotas do tipo **POST**, que recebem informações enviadas pelo cliente no corpo da requisição (*body*), processam os dados e devolvem respostas em **JSON**.

A atividade também trabalha:

- 🗃️ organização de projetos
- 🛡️ tratamento de erros
- ✅ validação de informações
- 🧪 testes de requisições com o Postman

> 💡 **Resumo em uma linha:** o cliente envia dados → a API valida e processa → devolve uma resposta em JSON.

### 🔄 Como funciona o fluxo de uma requisição POST

```mermaid
sequenceDiagram
    autonumber
    participant C as 🧑‍💻 Cliente (Postman)
    participant S as 🖥️ Servidor Express
    participant R as 📍 Rota POST
    C->>S: POST /rota + JSON no body
    S->>R: Encaminha a requisição
    R->>R: Lê req.body e valida os dados
    alt Dados válidos
        R-->>C: Resposta de sucesso (JSON)
    else Dados inválidos
        R-->>C: Mensagem de erro (JSON)
    end
```

---

## 🎯 Objetivos

<details open>
<summary><b>📌 Clique para abrir ou fechar a lista de objetivos</b></summary>
<br/>

- [x] Compreender o funcionamento do protocolo HTTP e do método POST
- [x] Criar e configurar um servidor utilizando Express.js
- [x] Desenvolver rotas para receber e processar informações
- [x] Trabalhar com requisições e respostas utilizando TypeScript
- [x] Utilizar o `req.body` para acessar os dados enviados pelo cliente
- [x] Implementar validações e tratamento de possíveis erros
- [x] Testar endpoints utilizando o Postman
- [x] Praticar a organização e o versionamento de código com Git e GitHub

</details>

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|:---|:---|
| ![Node.js](https://img.shields.io/badge/-Node.js-0D47A1?logo=nodedotjs&logoColor=white) | Ambiente de execução JavaScript |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-1565C0?logo=typescript&logoColor=white) | Tipagem estática e desenvolvimento do código |
| ![Express](https://img.shields.io/badge/-Express.js-1976D2?logo=express&logoColor=white) | Criação do servidor e gerenciamento de rotas |
| ![Postman](https://img.shields.io/badge/-Postman-1E88E5?logo=postman&logoColor=white) | Testes das requisições HTTP |
| ![Git](https://img.shields.io/badge/-Git-2196F3?logo=git&logoColor=white) | Controle de versão |
| ![GitHub](https://img.shields.io/badge/-GitHub-42A5F5?logo=github&logoColor=white) | Armazenamento e compartilhamento do projeto |

---

## 🧩 Atividades desenvolvidas

> 👇 Clique em cada atividade para ver os detalhes.

<details>
<summary><b>🔹 Atividade 01 – Rota <code>POST /mensagem</code></b></summary>
<br/>

Rota que recebe **três informações** no corpo da requisição:

| Campo | Descrição |
|:---|:---|
| `nome` | Nome da pessoa |
| `idade` | Idade da pessoa |
| `time` | Time favorito |

Com os dados recebidos, a API **constrói uma frase personalizada** e a retorna ao cliente.

![POST](https://img.shields.io/badge/M%C3%A9todo-POST-1565C0?style=flat-square)
![Endpoint](https://img.shields.io/badge/Endpoint-%2Fmensagem-42A5F5?style=flat-square)

**Exemplo de requisição (JSON):**

```json
{
  "nome": "Anna",
  "idade": 16,
  "time": "Corinthians"
}
```

</details>

<details>
<summary><b>🔐 Atividade 02 – Rotas POST de autenticação</b></summary>
<br/>

Estrutura de autenticação por meio de uma rota POST, que recebe as informações necessárias para **verificar um login**.

O exercício pratica:

- 📥 recebimento de dados
- ✅ validação das informações enviadas
- 💬 retorno de mensagens de sucesso ou erro

![POST](https://img.shields.io/badge/M%C3%A9todo-POST-1565C0?style=flat-square)
![Endpoint](https://img.shields.io/badge/Endpoint-conforme%20a%20implementa%C3%A7%C3%A3o-42A5F5?style=flat-square)

</details>

<details>
<summary><b>🎮 Atividade 03 – Rotas POST com Player</b></summary>
<br/>

Rotas para realizar operações relacionadas a um jogador (*Player*), trabalhando com **informações e regras de negócio**.

A atividade pratica:

- 📥 recebimento de dados
- 🧮 manipulação das informações do jogador
- ⚠️ tratamento de situações inválidas

As operações são organizadas em **endpoints específicos**, de acordo com a implementação do projeto.

</details>

---

## 🗂️ Estrutura do projeto

A organização dos arquivos facilita a manutenção e a compreensão do código.

```text
atividade-express-post/
│
├── 📁 src/
│   ├── 📄 app.ts
│   │
│   ├── 📁 models/
│   │
│   └── 📁 routes/
│
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 tsconfig.json
└── 📄 README.md
```

> ℹ️ *A estrutura pode variar conforme a organização final dos três exercícios.*

---

## ⚙️ Como executar o projeto

É necessário ter o **Node.js** instalado.

<details open>
<summary><b>🚀 Passo a passo</b></summary>
<br/>

**1️⃣ Clone o repositório**

```bash
git clone URL_DO_REPOSITORIO
```

**2️⃣ Entre na pasta do projeto**

```bash
cd atividade-express-post
```

**3️⃣ Instale as dependências**

```bash
npm install
```

**4️⃣ Execute o servidor**

```bash
npm run dev
```

✅ Com o servidor rodando, já é possível fazer as requisições pelo **Postman**.

</details>

---

## 🧪 Testes com Postman

Os testes foram feitos no **Postman**, ferramenta que envia requisições HTTP e mostra as respostas da API.

<details>
<summary><b>📋 Ver o passo a passo dos testes</b></summary>
<br/>

1. Inicie o servidor pelo terminal.
2. Abra o Postman.
3. Selecione o método **POST**.
4. Informe o endereço da rota desejada.
5. Acesse a opção **Body**.
6. Selecione **raw** e escolha o formato **JSON**.
7. Insira os dados necessários.
8. Clique em **Send** para enviar a requisição.
9. Verifique a resposta e o código de status retornado.

</details>

<details>
<summary><b>💻 Prefere o terminal? Exemplo com cURL</b></summary>
<br/>

Teste da Atividade 01 (ajuste a porta conforme o seu projeto):

```bash
curl -X POST http://localhost:PORTA/mensagem \
  -H "Content-Type: application/json" \
  -d '{"nome": "Anna", "idade": 16, "time": "Corinthians"}'
```

</details>

---

## 🎓 Aprendizados

Com esta atividade foi possível entender melhor como funciona a **comunicação entre cliente e servidor** por meio de requisições HTTP.

```mermaid
mindmap
  root((Back-End))
    Rotas
      POST
      Express.js
    Dados
      req.body
      Validação
    Qualidade
      Tratamento de erros
      TypeScript
    Ferramentas
      Postman
      Git e GitHub
```

Também foram praticados conceitos importantes do desenvolvimento **Back-End**:

- 🛣️ criação de rotas
- 📦 recebimento de dados pelo `req.body`
- ⚡ uso do Express.js
- 🔷 tipagem com TypeScript
- 🛡️ tratamento de erros

Os exercícios ajudaram a desenvolver a **lógica de programação** e a entender como uma API recebe informações, executa operações e devolve respostas ao cliente.

---

## 🏁 Considerações finais

A atividade foi importante para aprofundar os conhecimentos sobre desenvolvimento de APIs com **Express.js** e **TypeScript**. Na prática, foram trabalhadas a criação de rotas POST, a manipulação de dados enviados pelo cliente e a realização de testes com o Postman.

Além disso, o desenvolvimento contribuiu para melhorar a **organização do código**, a **identificação de erros** e a compreensão da comunicação entre aplicações. Esses conhecimentos são fundamentais para seguir avançando no desenvolvimento Back-End e na construção de aplicações mais completas.

---

## 👩‍💻 Autora

<div align="center">

**Anna Beatriz Rufino De Araújo**

![Instituição](https://img.shields.io/badge/Institui%C3%A7%C3%A3o-SENAI%20Dr.%20Celso%20Charuri-0A3D91?style=for-the-badge)
![Turma](https://img.shields.io/badge/Turma-I1HSD%20SENAI%202026-1976D2?style=for-the-badge)
![Ano](https://img.shields.io/badge/Ano-2026-42A5F5?style=for-the-badge)

<br/>

⭐ *Se este projeto te ajudou, deixe uma estrela no repositório!* ⭐

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:42A5F5,50:1565C0,100:0A3D91&height=120&section=footer" alt="Rodapé" />

</div>
