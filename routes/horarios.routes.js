import routerx from 'express-promise-router';
import horariosController from '../controllers/horarios.controller';


const router=routerx();

router.post('/guardarHorario', horariosController.addHorario);
router.get('/consultarHorario/:terminalesb', horariosController.consultarHorario);
router.get('/consultarUnHorario/:id', horariosController.consultarUnHorario);
router.put('/updateHorario/:id', horariosController.updateHorario);

export default router;