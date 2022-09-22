import mongoose, {Schema} from "mongoose";

const horariost = new Schema({

    terminalesb:{type: Schema.Types.ObjectId, ref:'terminales'},
    nombre:             String,
    filename:           String,
    path:               String,
    crearAc:{type: Date, default: Date. now}
});

const Horariosc=mongoose.model('horarios', horariost);
export default Horariosc;