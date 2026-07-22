// Ponto único que junta todas as rotas — o app.ts só importa este arquivo.
import { Router } from 'express';
import { excursoesRoutes } from './excursoes.routes';
import { reservasRoutes } from './reservas.routes';
import { webhooksRoutes } from './webhooks.routes';

export const routes = Router();

routes.use('/excursoes', excursoesRoutes);
routes.use('/reservas', reservasRoutes);
routes.use('/webhooks', webhooksRoutes);
