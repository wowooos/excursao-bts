import { Request, Response } from 'express';
import { pagamentosService } from '../services/pagamentos.service';

export const webhooksController = {
  async mercadoPago(req: Request, res: Response) {
    const paymentId = req.query['data.id'] as string | undefined;
    if (paymentId) {
      await pagamentosService.processarNotificacao(paymentId);
    }
    // O MP espera 200 rapidamente, mesmo que a gente ainda esteja processando por dentro
    res.sendStatus(200);
  },
};
