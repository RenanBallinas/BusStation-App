import models from "../models";

export default{

    addUsuarios:async(req, res, next)=>{
        try {
            const {usuario,contrasena}=req.body;
            
            const agregarUsuario=new models.usuarios({
                usuario, contrasena
            });
       
         

            const guardarUsuario=await agregarUsuario.save();
            res.status(200).json(guardarUsuario);
            console.log(req.body);

        } catch (err){
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(err);
        }
    },    
    consultarUsuario:async(req, res, next)=>{
        try{
            const consultarUsuario=await models.usuarios.find();
            res.json(consultarUsuario);
            console.log(consultarUsuario);
        }
        catch (error){
            res.status(500),send({
                message:"Ocurrio un error al conectar"
        });
            next(error);
        }
    },

    deleteUsuario:async(req,res,next)=>{
        try {
            const eliminar=await models.usuarios.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo eliminar el dato"
            });
            next(error);
        }
    },

    consultarOneUsuario:async(req, res, next)=>{
        try {
            const consultarUnUsuario=await models.usuarios.findById(req.params.id);
            if(!consultarUnUsuario){
                res.status(404).send({
                    message:"El registro no existe"
                })
            }else{
                res.status(200).json(consultarUnUsuario);
            }
        } catch (error){
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(error);
        }
    },
}