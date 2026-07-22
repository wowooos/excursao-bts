import { Router } from 'express';
import { reservasController } from '../controllers/reservas.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

export const reservasRoutes = Router();

reservasRoutes.post('/', asyncHandler(reservasController.criar));
reservasRoutes.post('/:id/tentar-novamente', asyncHandler(reservasController.tentarNovamente));
