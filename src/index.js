"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    const hostname = "localhost";
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Servidor</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            button { margin: 5px; padding: 10px; font-size: 16px; }
            select { margin: 5px; padding: 5px; font-size: 16px; }
        </style>
    </head>
    <body>
        <h1>Bem-vindo ao Servidor!</h1>
        <p>Servidor rodando em: <span>${hostname}:${port}</span></p>

        <h2>Botões de Contagem</h2>
        <p id="counter">Contagem: 0</p>
        <button onclick="increment()">Incrementar</button>
        <button onclick="decrement()">Decrementar</button>

        <h2>Exibir Data Atual</h2>
        <button onclick="showDate()">Mostrar Data</button>
        <p id="date"></p>

        <h2>Exemplo de Select</h2>
        <select id="options" onchange="selectOption()">
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
            <option value="3">Opção 3</option>
        </select>
        <p id="selected-option">Nenhuma opção selecionada</p>

        <script>
            // Contador
            let count = 0;
            function increment() {
                count++;
                document.getElementById("counter").textContent = "Contagem: " + count;
            }
            function decrement() {
                count--;
                document.getElementById("counter").textContent = "Contagem: " + count;
            }

            // Mostrar Data
            function showDate() {
                const currentDate = new Date();
                document.getElementById("date").textContent = "Data atual: " + currentDate.toLocaleString();
            }

            // Selecionar Opção
            function selectOption() {
                const select = document.getElementById("options");
                const selectedOption = select.options[select.selectedIndex].text;
                document.getElementById("selected-option").textContent = "Você selecionou: " + selectedOption;
            }
        </script>
    </body>
    </html>
    `;
    res.send(htmlContent); // Envia o HTML com os dados embutidos
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: \n\n   ${host}:${port}\n\nPara cancelar, pressione Ctrl + C`);
});
