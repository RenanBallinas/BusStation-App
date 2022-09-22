import routerx from 'express-promise-router';
import terminalesController from '../controllers/terminales.controller';


const router=routerx();

router.post('/guardarTerminal', terminalesController.addTerminal);
router.get('/consultarTerminal', terminalesController.consultarTerminal);
router.get('/consultarUnaTerminal/:id', terminalesController.consultarUnaTerminal);
router.put('/updateTerminal/:id', terminalesController.updateTerminal);

export default router;