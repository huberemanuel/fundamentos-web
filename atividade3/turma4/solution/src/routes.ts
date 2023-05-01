import { Router, Request, Response } from "express";
import UsuarioController from "./controller/UsuarioController";

export const router = Router();

router.post('/usuario', UsuarioController.create);
router.post('/delethanos', UsuarioController.delete);
router.get('/users', UsuarioController.readAll);