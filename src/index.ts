import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-Vindo à minha API com TypeScript!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: \n\n   127.0.0.1:${port}\n   localhost:${port}\n\npara cancelar ctrl + C`)
})