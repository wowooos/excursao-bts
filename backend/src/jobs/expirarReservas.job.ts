// Roda a cada minuto: libera a vaga de reservas "pendentes" cujo prazo estourou
// e ninguém tentou pagar de novo a tempo. É o outro lado da regra de retry.
import cron from 'node-cron';
import { reservasRepository } from '../repositories/reservas.repository';
import { excursoesRepository } from '../repositories/excursoes.repository';

export function iniciarJobExpirarReservas() {
  cron.schedule('* * * * *', async () => {
    const reservasExpiradas = await reservasRepository.buscarExpiradas();

    for (const reserva of reservasExpiradas) {
      await reservasRepository.atualizarStatus(reserva.id, 'cancelada');
      await excursoesRepository.incrementarVaga(reserva.excursaoId);
    }
  });
}
