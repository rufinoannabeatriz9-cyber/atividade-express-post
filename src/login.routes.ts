import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

// Dados corretos para o login
const usuarioCorreto = "admin";
const senhaCorreta = "123456";

// Rota POST /login
router.post("/login", (req: Request, res: Response) => {

    const { usuario, senha } = req.body;

    // Verifica se os campos foram preenchidos
    if (!usuario || !senha) {
        return res.status(400).json({
            erro: "Informe o usuário e a senha."
        });
    }

    // Verifica se usuário e senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        return res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            usuario: usuario
        });

    } else {

        return res.status(401).json({
            erro: "Usuário ou senha incorretos.",
            usuario: usuario
        });
    }
});

export default router;
