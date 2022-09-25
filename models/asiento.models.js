import mongoose, {Schema} from "mongoose";


const asiento=new Schema({
    terminal:String,
    nombre:String,
    destino: String,
    fecha:String,
    hora:String,
    crearAc:{type: Date, default: Date. now}
 });

const Asiento=mongoose.model('asientos',asiento);
export default Asiento;