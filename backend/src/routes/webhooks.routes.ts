import { Router } from 'express';
import { webhooksController } from '../controllers/webhooks.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

export const webhooksRoutes = Router();

webhooksRoutes.post('/mercado-pago', asyncHandler(webhooksController.mercadoPago));
