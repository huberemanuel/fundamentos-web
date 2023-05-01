import { Router } from "express";
import Controller from "../controllers/client"


const router = Router();

router.get('/clientes', Controller.readAll);
router.post('/cliente', Controller.create);
router.put('/cliente/:id', Controller.update);
router.delete('/cliente/:id', Controller.delete);

export default router;
