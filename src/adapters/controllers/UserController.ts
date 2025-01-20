import { Request, Response } from 'express';
import { UserModel } from '../../core/models/UserModel'; // Importe a classe User ou o modelo
import { UsersRepository } from '../repositories/UsersList';

// Simulação de banco de dados (em memória)
let users = UsersRepository;

export class UserController {
    // Listar todos os usuários
    static getAllUsers(req: Request, res: Response): void {
        res.status(200).json(users);
    }

    // Buscar um usuário pelo ID
    static getUserById(req: Request, res: Response): void {
        const id = parseInt(req.params.id);
        const user = users.find((u: { getId: () => number; }) => u.getId() === id);

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.status(200).json(user);
    }

    // Criar um novo usuário
    static createUser(req: Request, res: Response): void {
        const { nome, email, register, worker } = req.body;

        // Validação simples
        if (!nome || !email || typeof worker !== 'boolean') {
             res.status(400).json({ message: 'Dados inválidos.' });
        }

        const newUser = new UserModel(
            users.length + 1, // Gera um novo ID
            nome,
            email,
            new Date(register || Date.now()),
            worker
        );

        users.push(newUser);
        res.status(201).json(newUser);
    }

    // Atualizar um usuário existente
    static updateUser(req: Request, res: Response): void {
        const id = parseInt(req.params.id);
        const { nome, email, worker } = req.body;

        const user = users.find((u: { getId: () => number; }) => u.getId() === id);

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Atualiza os dados somente se forem enviados
        if (nome) user.setNome(nome);
        if (email) user.setEmail(email);
        if (typeof worker === 'boolean') user.setWorker(worker);

        res.status(200).json({ message: 'Usuário atualizado com sucesso.', user });
    }

    // Deletar um usuário pelo ID
    static deleteUser(req: Request, res: Response): void {
        const id = parseInt(req.params.id);

        const index = users.findIndex((u: { getId: () => number; }) => u.getId() === id);

        if (index === -1) {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        users.splice(index, 1);
        res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    }
}
