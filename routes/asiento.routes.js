import routerx from 'express-promise-router';
import asientocontrollers from '../controllers/asiento.controllers';


const router=routerx();

router.post('/guardarAsientos',asientocontrollers.addAsientos);
router.get('/consultarAsiento',asientocontrollers.consultarAsiento);
router.get('/consultarOneAsiento/:id',asientocontrollers.consultarOneAsiento);
router.delete('/eliminarAsiento/:id',asientocontrollers.deleteAsiento);

export default router;