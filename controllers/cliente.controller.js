/*import models from "../models";

export default{

    addCliente: async(req, res, next) =>{
        try {
            const {nombre, filename, telefono, licenciadeconducir, direccion, path}=req.body;

            const agregarCliente=new models.Clientes({
                nombre, filename, telefono, licenciadeconducir, direccion, path
            });
            agregarCliente.filename=req.file.filename;
            agregarCliente.path='public/imagenes' + req.file.filename;

            const guardarCliente=await agregarCliente.save();
            res.status(200).json(guardarCliente);
            console.log(req.body);

        } catch (err) {
            res.status(500).send({
                message: "Error al guardar"
            });
            next(err);
        }


},
    consultarCliente: async(req, res, next) =>{
        try{
            const consultaCliente=await models.Clientes.find();
            res.json(consultaCliente);
            console.log(consultaCliente);
        
        }catch(err){
            res.status(500).send({
                message: "Ocurrio un error al conectar"
            });
            next(err);
        
                    }
    },
    consultarUnCliente:async(req, res, next) =>{

        try {
            const consultarOneCliente=await models.Clientes.findById(req.params.id);
            if (!consultarOneCliente) {
                res.status(404).send({
                    message:"El registro no existe"
                });

            }else{
                res.status(200).json(consultarOneCliente);
            }
        } catch (err) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(err);
        }


    },    
    updateCliente: async(req, res, next) =>{

        try {
            const {nombre, filename, telefono, licenciadeconducir, direccion, path}=req.body;

            const updateUnCliente={
                nombre, filename, telefono, licenciadeconducir, direccion, path
            }
            const update=await models.Clientes.findByIdAndUpdate(req.params.id, updateUnCliente);
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
}*/