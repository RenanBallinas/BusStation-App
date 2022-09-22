import mongoose, {Schema} from "mongoose";

const usuario = new Schema({

    usuario : String,
    contrasena : String,
    
    crearAc : {type:Date, default: Date.now}

});

const Usuario = mongoose.model('usuarios' , usuario);
export default Usuario;