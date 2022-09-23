import mongoose, {Schema} from "mongoose";
import { stringify } from "uuid";

const asiento=new Schema({
    nombre:String,
    destino: String,
    fecha:String,
    hora:String
   
 });

const Asiento=mongoose.model('asientos',asiento);
export default Asiento;