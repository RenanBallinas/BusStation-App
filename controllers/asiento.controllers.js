import models from "../models";

export default{
    addAsientos:async(req, res, next)=>{
        try {
            const {nombre,destino,fecha,hora}=req.body;
            
            const agregarAsiento=new models.Asiento({
                nombre,destino,fecha,hora
            });
         

            const guardarAsiento=await agregarAsiento.save();
            res.status(200).json(guardarAsiento);
            console.log(req.body);

        } catch (err){
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(err);
        }
    },    
    consultarAsiento:async(req, res, next)=>{
        try{
            const consultarAsiento=await models.Asiento.find();
            res.json(consultarAsiento);
            console.log(consultarAsiento);
        }
        catch (error){
            res.status(500),send({
                message:"Ocurrio un error al conectar"
        });
            next(error);
        }
    },
    consultarOneAsiento:async(req, res, next)=>{
        try {
            const consultarUnAsiento=await models.Asiento.findById(req.params.id);
            if(!consultarUnAsiento){
                res.status(404).send({
                    message:"El registro no existe"
                })
            }else{
                res.status(200).json(consultarUnAsiento);
            }
        } catch (error){
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(error);
        }
    },
}