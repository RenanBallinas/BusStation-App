import routerx from 'express-promise-router';
//import clienteRoutes from './cliente.routes';
import terminalesRoutes from './terminales.routes';
import horariosRoutes from './horarios.routes';
import usuariosRoutes from "./usuarios.routes"

const router=routerx();

//router.use('/cliente', clienteRoutes);
router.use('/terminales', terminalesRoutes);
router.use('/horarios', horariosRoutes);
router.use('/usuario',usuariosRoutes);
export default router;