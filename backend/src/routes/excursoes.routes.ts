import { Router } from 'express';
import { excursoesController } from '../controllers/excursoes.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

export const excursoesRoutes = Router();

excursoesRoutes.get('', asyncHandler(excursoesController.listar));
excursoesRoutes.get('/:id', asyncHandler(excursoesController.detalhes));
