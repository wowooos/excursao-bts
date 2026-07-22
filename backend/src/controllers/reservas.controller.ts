import { Request, Response } from 'express';
import { reservasService } from '../services/reservas.service';

export const reservasController = {
  async criar(req: Request, res: Response) {
    const resultado = await reservasService.criarReserva({
      ...req.body,
      ip: req.ip ?? 'desconhecido',
    });
    res.status(201).json(resultado);
  },

  async tentarNovamente(req: Request, res: Response) {
    const resultado = await reservasService.tentarPagamentoNovamente(req.params.id);
    res.json(resultado);
  },
};
