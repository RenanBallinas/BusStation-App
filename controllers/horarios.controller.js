import models from "../models";

export default{

    addHorario: async(req, res, next) =>{
        try {
            const {terminalesb, nombre}=req.body;

            const agregarHorario=new models.Horariosc({
                terminalesb, nombre
            });
            agregarHorario.filename=req.file.filename;
            agregarHorario.path='public/imagenes' + req.file.filename;


            const guardarHorario=await agregarHorario.save();
            res.status(200).json(guardarHorario);
            console.log(req.body);

        } catch (err) {
            res.status(500).send({
                message: "Error al guardar"
            });
            next(err);
        }


},
    consultarHorario: async(req, res, next) =>{
        try{
            const consultaHorario=await models.Horariosc.find({terminalesb: req.params.terminalesb}).populate({path: 'terminalesb'});
            res.json(consultaHorario);
            console.log(consultaHorario);
        
        }catch(err){
            res.status(500).send({
                message: "Ocurrio un error al conectar"
            });
            next(err);
        
                    }
    },
    consultarUnHorario:async(req, res, next) =>{

        try {
            const consultarOneHorario=await models.Horariosc.findById(req.params.id);
            if (!consultarOneHorario) {
                res.status(404).send({
                    message:"El registro no existe"
                });

            }else{
                res.status(200).json(consultarOneHorario);
            }
        } catch (err) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(err);
        }


    },    
    updateHorario: async(req, res, next) =>{

        try {
            const {terminalesb, nombre}=req.body;

            const updateUnHorario={
                terminalesb, nombre
            }
            const update=await models.Horariosc.findByIdAndUpdate(req.params.id, updateUnHorario);
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