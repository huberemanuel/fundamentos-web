import { Request, Response } from "express";
import Leitor from "../models/leitor";

class LeitorController {
    async create(request: Request, response: Response) {
        const {nome, livro_id} = request.body;
        try {
            const leitor = await Leitor.create({
                nome: nome,
                livro_id: livro_id,
            });
            response.status(201).json(leitor);
        }
        catch (error) {
            response.status(500).json({
                error: "Erro ao criar leitor",
                message: error
            });
        }
    }

    async readAll(request: Request, response: Response) {
        try {
            const leitores = await Leitor.find();
            response.json(leitores);
        } catch (error) {
            response.status(500).json({
                error: "Erro ao listar leitores",
                message: error
            });
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        try {
            await Leitor.findByIdAndDelete(id)
                .then((leitor) => {
                    if (leitor) {
                        response.status(200).json({
                            message: "Leitor deletado"
                        });
                    }
                    else {
                        response.status(404).json({
                            message: "Leitor não encontrado"
                        });
                    }
                });
        } catch (error) {
            response.status(500).json({
                error: "Erro ao deletar o leitor",
                message: error
            });
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, livro_id } = request.body;
        try {
            await Leitor.findByIdAndUpdate(id, {nome: nome, livro_id:livro_id}, {new: true})
                .then((leitor) => {
                    if (leitor) {
                        response.status(201).json(leitor);
                    }
                    else {
                        response.status(404).json({
                            message: "Leitor não encontrado"
                        });
                    }
                });
        } catch (error) {
            response.status(500).json({
                error: "Erro ao atualizar o leitor",
                message: error
            });
        }
    }
}

export default new LeitorController();