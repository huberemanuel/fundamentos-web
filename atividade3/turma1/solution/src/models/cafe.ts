import mongoose, {Schema} from "mongoose";

const Cafe = new Schema({
    nome:{type:String,required:true}
});

export default mongoose.model('Cafe',Cafe);