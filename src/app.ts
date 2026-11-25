
import express from "express";

import mensagemRoutes from "./mensagem.routes.js";
import somaRoutes from "./soma.routes.js";
import loginRoutes from "./login.routes.js";

const app = express();

const PORT = 3000;

// Permite receber dados em JSON
app.use(express.json());

// Conecta as rotas
app.use(mensagemRoutes);
app.use(somaRoutes);
app.use(loginRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

    console.log("Rotas disponíveis:");
    console.log(`POST http://localhost:${PORT}/mensagem`);
    console.log(`POST http://localhost:${PORT}/soma`);
    console.log(`POST http://localhost:${PORT}/login`);
});
