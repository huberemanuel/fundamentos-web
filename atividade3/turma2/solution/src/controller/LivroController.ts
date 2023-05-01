import { Request, Response } from "express";
import Livro from "../models/livro";

class LivroController {
    async create(request: Request, response: Response) {
        const {nome, autor, ano, estoque} = request.body;
        try {
            const livro = await Livro.create({
                nome: nome,
                autor: autor,
                ano: ano,
                estoque: estoque
            });
            response.status(201).json(livro);
        }
        catch (error) {
            response.status(500).json({
                error: "Erro ao criar livro",
                message: error
            });
        }
    }

    async readAll(request: Request, response: Response) {
        try {
            const livros = await Livro.find();
            response.json(livros);
        } catch (error) {
            response.status(500).json({
                error: "Erro ao listar livros",
                message: error
            });
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        try {
            await Livro.findByIdAndDelete(id)
                .then((livro) => {
                    if (livro) {
                        response.status(200).json({
                            message: "Livro deletado"
                        });
                    }
                    else {
                        response.status(404).json({
                            message: "Livro não encontrado"
                        });
                    }
                });
        } catch (error) {
            response.status(500).json({
                error: "Erro ao deletar o livro",
                message: error
            });
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const {nome, autor, ano, estoque } = request.body;
        try {
            await Livro.findByIdAndUpdate(id, {nome: nome,autor: autor,ano: ano,estoque: estoque}, {new: true})
                .then((livro) => {
                    if (livro) {
                        response.status(201).json(livro);
                    }
                    else {
                        response.status(404).json({
                            message: "Livro não encontrado"
                        });
                    }
                });
        } catch (error) {
            response.status(500).json({
                error: "Erro ao atualizar o livro",
                message: error
            });
        }
    }

    async meEmpresta(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const livro = await Livro.findById(id);
            if (livro) {
                if(livro.estoque===0)
                    response.status(409).json({
                        message: "Livro sem estoque no momento"
                    });
                else{
                    await Livro.findByIdAndUpdate(id, {estoque: livro.estoque-1}, {new: true})
                    .then((livro) => {
                        if (livro) {
                            response.status(200).json({
                                message: "Livro alugado com sucesso"
                            });;
                        }
                    });
                }
            }
            else {
                response.status(404).json({
                    message: "Livro não encontrado"
                });
            }

        } catch (error) {
            response.status(500).json({
                error: "Erro ao acessar o livro",
                message: error
            });
        }
    }
}

export default new LivroController();