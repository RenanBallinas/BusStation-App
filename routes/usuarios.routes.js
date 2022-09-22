import routerx from 'express-promise-router';
import usuariosController from '../controllers/usuarios.controller';

const router=routerx();

router.post('/guardarUsuario',usuariosController.addUsuarios);
router.get('/consultarUsuario',usuariosController.consultarUsuario);
router.get('/consultarOneUsuario/:id',usuariosController.consultarOneUsuario);


export default router;