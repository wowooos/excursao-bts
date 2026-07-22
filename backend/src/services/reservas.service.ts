// Onde mora a regra de negócio de reserva: criar reserva + aceite de contrato
// juntos, controlar vaga, e a lógica de expiração/retry que definimos.
import { clientesRepository } from '../repositories/clientes.repository';
import { reservasRepository } from '../repositories/reservas.repository';
import { excursoesRepository } from '../repositories/excursoes.repository';
import { contratoAceitesRepository } from '../repositories/contratoAceites.repository';
import { pagamentosRepository } from '../repositories/pagamentos.repository';
import { criarPreference } from '../integrations/mercadoPago/criarPreference';
import { env } from '../config/env';

interface CriarReservaInput {
  excursaoId: string;
  parcelas: number;
  cliente: { nomeCompleto: string; cpf: string; email: string; telefone: string };
  contrato: { versao: string; textoSnapshot: string };
  ip: string;
}

export const reservasService = {
  async criarReserva(input: CriarReservaInput) {
    const excursao = await excursoesRepository.buscarPorId(input.excursaoId);
    if (!excursao || excursao.vagasDisponiveis <= 0) {
      throw new Error('Não há mais vagas disponíveis');
    }

    let cliente = await clientesRepository.buscarPorCpf(input.cliente.cpf);
    if (!cliente) {
      cliente = await clientesRepository.criar(input.cliente);
    }

    const expiraEm = new Date(Date.now() + env.reservaExpiracaoMinutos * 60_000);
    const reserva = await reservasRepository.criar({
      clienteId: cliente.id,
      excursaoId: excursao.id,
      parcelas: input.parcelas,
      expiraEm,
    });

    await contratoAceitesRepository.criar({
      reservaId: reserva.id,
      versaoContrato: input.contrato.versao,
      textoSnapshot: input.contrato.textoSnapshot,
      ipAceite: input.ip,
    });

    // Segura a vaga imediatamente — ela só volta se a reserva expirar (ver jobs/expirarReservas.job.ts)
    await excursoesRepository.decrementarVaga(excursao.id);

    await pagamentosRepository.criar({ reservaId: reserva.id, valorCentavos: excursao.valorCentavos });

    const preference = await criarPreference(excursao, cliente, reserva);

    return { reserva, initPoint: preference.init_point };
  },

  // Chamado quando o cliente clica "tentar pagamento novamente" após uma rejeição
  async tentarPagamentoNovamente(reservaId: string) {
    const reserva = await reservasRepository.buscarPorId(reservaId);
    if (!reserva || reserva.status !== 'pendente') {
      throw new Error('Essa reserva não pode mais tentar pagamento');
    }

    const novaExpiracao = new Date(Date.now() + env.reservaExpiracaoMinutos * 60_000);
    await reservasRepository.estenderExpiracao(reservaId, novaExpiracao);

    const excursao = await excursoesRepository.buscarPorId(reserva.excursaoId);
    const cliente = await clientesRepository.buscarPorId(reserva.clienteId);
    if (!excursao || !cliente) throw new Error('Dados da reserva inconsistentes');

    const preference = await criarPreference(excursao, cliente, reserva);
    return { initPoint: preference.init_point };
  },
};
