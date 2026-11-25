
import { Router } from "express";

const router = Router();

// Rota para receber os dados
router.post("/mensagem", (req, res) => {

    try {

        // Recebe os dados enviados pelo cliente
        const { nome, idade, time } = req.body;

        // Verifica se os campos foram preenchidos
        if (!nome || idade === undefined || !time) {
            return res.status(400).json({
                erro: "Informe nome, idade e time favorito."
            });
        }

        // Verifica se a idade é numérica
        if (
            typeof idade !== "number" ||
            !Number.isFinite(idade) ||
            idade < 0
        ) {
            return res.status(400).json({
                erro: "A idade precisa ser um número válido."
            });
        }

        // Monta a mensagem
        const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

        // Retorna a mensagem
        return res.status(200).json({
            mensagem: mensagem
        });

    } catch (error) {

        // Trata possíveis erros
        return res.status(500).json({
            erro: "Erro interno ao processar a mensagem."
        });
    }

});

export default router;
