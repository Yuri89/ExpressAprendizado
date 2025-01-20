import express from "express";
import { main } from "./adapters/views";

const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
      const htmlContent = await main();
      res.send(htmlContent);  // Envia o conteúdo HTML como resposta
    } catch (error) {
      res.status(500).send('Erro ao carregar a página');
    }
  });
  


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${host}:${port}`);
});
