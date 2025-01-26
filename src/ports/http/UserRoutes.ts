import { Router } from "express";
import { UserController } from "../../adapters/controllers/UserController";

const router = Router();

// Rota para listar todos os usuários
router.get("/users", UserController.getAllUsers);

// Rota para buscar um usuário pelo ID
router.get("/users/:id", UserController.getUserById);

// Rota para criar um novo usuário
router.post("/users", UserController.createUser);

// Rota para atualizar um usuário existente
router.put("/users/:id", UserController.updateUser);

// Rota para deletar um usuário
router.delete("/users/:id", UserController.deleteUser);

export default router;
