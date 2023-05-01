import { Request, Response } from "express";
import User from "../models/client";

class UserController {
  // Cria usuario
  async create(req: Request, res: Response) {
    const { nome, hamb_id } = req.body;
    try {
      const user = await User.create({ nome, hamb_id }); // Cria no banco
      res.status(201).json(user); // Retorna status sucesso com o usuario
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error when try to create user", message: error });
    }
  }

  // Deleta usuario
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (user) {
        await User.findByIdAndDelete(id);
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({
        error: "Error when try to remove a user",
        message: error,
      });
    }
  }

  // Atualiza usuarios
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, hamb_id } = req.body;
    try {
      await User.findByIdAndUpdate(
        id,
        { nome: nome, hamb_id: hamb_id },
        { new: true }
      ).then((user) => {
        if (user) {
          res.status(201).json(user);
        } else {
          res.sendStatus(404);
        }
      });
    } catch (error) {
      res.status(500).json({
        error: "Error when try to update an user",
        message: error,
      });
    }
  }

  // Mostra todos os usuarios
  async readAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({
        error: "Error when try to list all users",
        message: error,
      });
    }
  }
}

export default new UserController();
