import { Request, Response } from "express";
import usuario from "../models/usuario";

class UsuarioController {
    async create(request: Request, response: Response) {
        const {nome} = request.body;
        try {
            const user = await usuario.create({
                nome: nome
            });
            response.status(201).json(user);
        }
        catch (error) {
            response.status(500).json({
                error: "Erro ao criar usuário",
            });
        }
    }

    async readAll(request: Request, response: Response) {
        try {
            const users = await usuario.find();
            response.json(users);
        } catch (error) {
            response.status(500).json({
                error: "Erro ao listar usuários",
                message: error
            });
        }
    }
    async delete(request: Request, response: Response) {
        try {
            const usuarios = await usuario.find();
            const lenghtUsuarios = usuarios.length

            const randomUsuario = usuarios[Math.floor(Math.random() * lenghtUsuarios)]

            await usuario.findByIdAndDelete(randomUsuario.id)
            response.sendStatus(204);
        } catch (error) {
            response.status(409).json({
                error: "Erro ao remover o usuário, não existem usuarios para deletar",
                message: error
            });
        } // E se ocorrer algum erro de comunicação com o banco? O erro seria 409, está correto?
    }
}

export default new UsuarioController();