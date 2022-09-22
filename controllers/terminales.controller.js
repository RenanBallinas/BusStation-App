import models from "../models";

export default{

    addTerminal: async(req, res, next) =>{
        try {
            const {nombre, telefono, direccion}=req.body;

            const agregarTerminal=new models.Terminalesb({
                nombre, telefono, direccion
            });
            agregarTerminal.filename=req.file.filename;
            agregarTerminal.path='public/imagenes' + req.file.filename;


            const guardarTerminal=await agregarTerminal.save();
            res.status(200).json(guardarTerminal);
            console.log(req.body);

        } catch (err) {
            res.status(500).send({
                message: "Error al guardar"
            });
            next(err);
        }


},
    consultarTerminal: async(req, res, next) =>{
        try{
            const consultaTerminal=await models.Terminalesb.find();
            res.json(consultaTerminal);
            console.log(consultaTerminal);
        
        }catch(err){
            res.status(500).send({
                message: "Ocurrio un error al conectar"
            });
            next(err);
        
                    }
    },
    consultarUnaTerminal:async(req, res, next) =>{

        try {
            const consultarOneTerminal=await models.Terminalesb.findById(req.params.id);
            if (!consultarOneTerminal) {
                res.status(404).send({
                    message:"El registro no existe"
                });

            }else{
                res.status(200).json(consultarOneTerminal);
            }
        } catch (err) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(err);
        }


    },    
    updateTerminal: async(req, res, next) =>{

        try {
            const {nombre, telefono, direccion}=req.body;

            const updateUnaTerminal={
                nombre, telefono, direccion,
            }
            const update=await models.Terminalesb.findByIdAndUpdate(req.params.id, updateUnaTerminal);
            res.json({
                message:"Datos actualizados correctamente"
            });
                console.log(update);
        } catch (err) {
            res.status(500).send({

                message:"No se pudo actualizar la información"

            });
            next(err);
        }

    }
}