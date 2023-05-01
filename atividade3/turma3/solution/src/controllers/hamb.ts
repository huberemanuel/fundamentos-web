import { Request, Response } from "express";
import Hamb from "../models/hamb";

class HambController {
  // Cria hamburguer
  async create(req: Request, res: Response) {
    const { nome, ingredientes, preco, estoque } = req.body;
    try {
      const hamb = await Hamb.create({ nome, ingredientes, preco, estoque }); // Cria no banco
      res.status(201).json(hamb); // Retorna status sucesso com o hamburguer
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error when try to create hamb", message: error });
    }
  }

  // Deleta hamburguer
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const hamb = await Hamb.findById(id);
      if (hamb) {
        await Hamb.findByIdAndDelete(id);
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({
        error: "Error when try to remove a hamb",
        message: error,
      });
    }
  }

  // Atualiza hamburguers
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, ingredientes, preco, estoque } = req.body;
    try {
      await Hamb.findByIdAndUpdate(
        id,
        { nome, ingredientes, preco, estoque },
        { new: true }
      ).then((hamb) => {
        if (hamb) {
          res.status(201).json(hamb);
        } else {
          res.sendStatus(404);
        }
      });
    } catch (error) {
      res.status(500).json({
        error: "Error when try to update an hamb",
        message: error,
      });
    }
  }

  // Mostra todos os hamburguers
  async readAll(req: Request, res: Response) {
    try {
      const hambs = await Hamb.find();
      res.json(hambs);
    } catch (error) {
      res.status(500).json({
        error: "Error when try to list all hambs",
        message: error,
      });
    }
  }

  // Pedir hamburguer
  async requestHamb(req: Request, res: Response) {
    const { dinheiro } = req.body;
    const { id } = req.params;
    try {
      const hamb = await Hamb.findById(id);
      if (hamb) {
        if (hamb.estoque > 0) {
          if (hamb.preco > +dinheiro) {
            res.status(409).json({
              error: "Saldo insuficiente",
            });
          } else {
            await Hamb.findByIdAndUpdate(id, { nome: hamb.nome, ingredientes: hamb.ingredientes, preco: hamb.preco, estoque: hamb.estoque - 1 });
            res.status(200).json({
              dinheiro: dinheiro - hamb.preco,
            });
          }
        } else {
          res.status(409).json({
            error: "Produto indisponivel",
          });
        }
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({error: error});
    }
  }
}

export default new HambController();
