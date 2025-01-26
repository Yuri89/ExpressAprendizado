import express from "express";
import userRoutes from "./ports/http/UserRoutes"; // Importa as rotas de usuários
import { main } from "./adapters/views";

const app = express();
app.use(express.json()); 

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

// Rota principal para carregar a página HTML
app.get("/", async (req, res) => {
  try {
    const htmlContent = await main();
    res.send(htmlContent); // Envia o conteúdo HTML como resposta
  } catch (error) {
    res.status(500).send("Erro ao carregar a página");
  }
});

// Conecta as rotas de usuários
app.use("/api", userRoutes); // Prefixa as rotas de usuários com /api

app.listen(port, () => {
  console.log(`Servidor rodando em: http://${host}:${port}`);
});
