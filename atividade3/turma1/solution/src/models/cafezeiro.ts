import mongoose, {Schema} from "mongoose";

const Cafezeiro = new Schema({
    nome:{type:String,required:true},
    cafe_id:{type:String,required:true}
});

export default mongoose.model('Cafezeiro',Cafezeiro);