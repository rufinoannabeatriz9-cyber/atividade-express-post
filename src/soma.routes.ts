
import { Router } from "express";

const router = Router();

// Rota para realizar a soma
router.post("/soma", (req, res) => {

    try {

        // Recebe os três números
        const { numero1, numero2, numero3 } = req.body;

        // Armazena os números em um vetor
        const numeros = [numero1, numero2, numero3];

        // Verifica se os campos foram preenchidos
        if (numeros.some(numero => numero === undefined)) {
            return res.status(400).json({
                erro: "Informe os três números."
            });
        }

        // Verifica se todos os valores são numéricos
        if (!numeros.every(
            numero => typeof numero === "number" && Number.isFinite(numero)
        )) {
            return res.status(400).json({
                erro: "Todos os valores precisam ser números."
            });
        }

        // Realiza a soma
        const resultado = numero1 + numero2 + numero3;

        // Retorna o resultado
        return res.status(200).json({
            numero1,
            numero2,
            numero3,
            resultado
        });

    } catch (error) {

        // Trata possíveis erros
        return res.status(500).json({
            erro: "Erro interno ao realizar a soma."
        });
    }

});

export default router;
