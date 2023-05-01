import mongoose, { Schema, Document } from "mongoose";

const Livro = new Schema( {
    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano:{
        type: Number,
        required:true
    },
    estoque:{
        type: Number,
        required:true
    }
});

export default mongoose.model('Livro', Livro);
