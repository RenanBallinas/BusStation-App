import routerx from 'express-promise-router';
import asientocontrollers from '../controllers/asiento.controllers';


const router=routerx();

router.post('/addAsientos',asientocontrollers.addAsientos);
router.get('/consultarAsiento',asientocontrollers.consultarAsiento);
router.get('/consultarOneAsiento/:id',asientocontrollers.consultarOneAsiento);


export default router;