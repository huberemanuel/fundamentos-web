import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/client";
import hambRoutes from "./routes/hamb";

mongoose.connect("mongodb://127.0.0.1:27017/210421_210331");

// Constantes
const app = express();
const port = 3000;

app.use(express.json());

// Rotas para o controle de clientes
app.use(userRoutes);
// Rotas para o controle de hamburgueres
app.use(hambRoutes);

app.listen(port, () => {
  console.log(`server runnig on http://localhost:${port}`);
});
