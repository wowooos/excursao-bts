import { Request, Response } from 'express';
import { excursoesService } from '../services/excursoes.service';

export const excursoesController = {
  async detalhes(req: Request, res: Response) {
    const excursao = await excursoesService.buscarDetalhes(req.params.id);
    res.json(excursao);
  },
};
