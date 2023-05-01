import mongoose, { Schema } from "mongoose";

const User = new Schema({
  nome: { type: String, required: true },
  hamb_id: { type: String, required: true },
});

export default mongoose.model("User", User);
