import mongoose, {Schema} from "mongoose";

const terminalesb = new Schema({
        
    nombre:             String,
    telefono:           Number,
    direccion:          String,
    filename:           String,
    path:               String,
    crearAc:{type: Date, default: Date. now}
});

const Terminalesb=mongoose.model('terminales', terminalesb);
export default Terminalesb;