import mongoose, { Schema, Document } from "mongoose";

const Usuario = new Schema( {
    nome: {
        type: String,
        required: true
    }
});

export default mongoose.model('Usuario', Usuario);
