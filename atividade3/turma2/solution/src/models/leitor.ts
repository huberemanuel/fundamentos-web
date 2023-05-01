import mongoose, { Schema, Document } from "mongoose";

const Leitor = new Schema( {
    nome: {
        type: String,
        required: true
    },
    livro_id:{
        type: String,
        required:true
    }
});

export default mongoose.model('Leitor', Leitor);
