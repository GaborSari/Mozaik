import { Router } from 'express';
import CountyRoutes from './county.routes';

const routes = Router();

routes.use('/county', CountyRoutes);

export default routes;