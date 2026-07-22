// Traduz o resultado vindo do MP em atualização de status de pagamento + reserva.
import { pagamentosRepository } from '../repositories/pagamentos.repository';
import { reservasRepository } from '../repositories/reservas.repository';
import { excursoesRepository } from '../repositories/excursoes.repository';
import { processarWebhook } from '../integrations/mercadoPago/processarWebhook';

const statusMap: Record<string, string> = {
  approved: 'aprovado',
  rejected: 'rejeitado',
  pending: 'pendente',
  in_process: 'pendente',
};

export const pagamentosService = {
  async processarNotificacao(paymentId: string) {
    const dados = await processarWebhook(paymentId);
    const statusInterno = statusMap[dados.status ?? ''] ?? 'pendente';

    await pagamentosRepository.atualizarPorMpPaymentId(dados.mpPaymentId, statusInterno, dados.metodo ?? '');

    if (!dados.reservaId) return;

    if (statusInterno === 'aprovado') {
      await reservasRepository.atualizarStatus(dados.reservaId, 'confirmada');
    }

    if (statusInterno === 'rejeitado') {
      // Regra de retry: reserva continua "pendente" (não libera a vaga aqui).
      // Quem decide liberar a vaga é o job de expiração, se o cliente não tentar de novo a tempo.
    }
  },
};
