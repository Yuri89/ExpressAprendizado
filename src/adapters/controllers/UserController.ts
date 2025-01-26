import { Request, Response } from 'express';
import { UserModel } from '../../core/models/UserModel'; // Importe a classe User ou o modelo
import { UsersRepository } from '../repositories/UsersList';

// Simulação de banco de dados (em memória)
let users = UsersRepository;

export class UserController {
    // Listar todos os usuários
    static getAllUsers(req: Request, res: Response): any {

        try {
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            const paginatedUsers = users.slice(startIndex, endIndex);
            res.status(200).json(paginatedUsers);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar usuários" });
        }
    }

    // Buscar um usuário pelo ID
    static getUserById(req: Request, res: Response): any {
        const id = parseInt(req.params.id);
        const user = users.find((u: { getId: () => number; }) => u.getId() === id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.status(200).json(user);
    }

    // Criar um novo usuário
    static createUser(req: Request, res: Response): any {
        try {
            const { nome, email, register, worker } = req.body;

            // Validação simples
            if (!nome || !email || typeof worker !== 'boolean') {
                return res.status(400).json({ message: 'Dados inválidos.' });
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
            console.log(users);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao criar usuário" });
        }
    }
    static updateUser(req: Request, res: Response): any {
        const id = parseInt(req.params.id);
        const { nome, email, worker } = req.body;

        const user = users.find((u: { getId: () => number; }) => u.getId() === id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Atualiza os dados somente se forem enviados
        if (nome) user.setNome(nome);
        if (email) user.setEmail(email);
        if (typeof worker === 'boolean') user.setWorker(worker);

        res.status(200).json({ message: 'Usuário atualizado com sucesso.', user });
    }

    static deleteUser(req: Request, res: Response): any {
        const id = parseInt(req.params.id);

        const index = users.findIndex((u: { getId: () => number; }) => u.getId() === id);

        if (index === -1) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        users.splice(index, 1);
        return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    }
}
