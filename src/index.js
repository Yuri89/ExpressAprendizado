"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Bem-Vindo à minha API com TypeScript!');
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: \n\n   127.0.0.1:${port}\n   localhost:${port}\n\npara cancelar ctrl + C`);
});
