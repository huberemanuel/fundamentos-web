import { Router } from "express";
import Controller from "../controllers/hamb";

const router = Router();

router.get("/pedir/:id", Controller.requestHamb);

router.get("/hamburgueres", Controller.readAll);
router.post("/hamburguer", Controller.create);
router.put("/hamburguer/:id", Controller.update);
router.delete("/hamburguer/:id", Controller.delete);

export default router;
