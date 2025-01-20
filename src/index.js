"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = require("./adapters/views/main");
const app = (0, express_1.default)();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    const hostname = "localhost";
    const htmlContent = main_1.main;
    res.send(htmlContent); // Envia o HTML com os dados embutidos
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: \n\n   ${host}:${port}\n\nPara cancelar, pressione Ctrl + C`);
});
