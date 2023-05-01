import { Router,Request,Response } from "express";
import CafeController from "./controller/CafeController";
import CafezeiroController from "./controller/CafezeiroController"

export const router = Router();

router.post('/cafe',CafeController.create);
router.get('/cafes',CafeController.getAll);
router.delete('/cafe/:id',CafeController.delete);
router.put('/cafe/:id',CafeController.update);

router.post('/cafezeiro',CafezeiroController.create);
router.get('/cafezeiros',CafezeiroController.getAll);
router.delete('/cafezeiro/:id',CafezeiroController.delete);
router.put('/cafezeiro/:id',CafezeiroController.update);

