import mongoose, { Schema } from "mongoose";

const Hamburguer = new Schema({
  nome: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true },
});

export default mongoose.model("Hamburguer", Hamburguer);