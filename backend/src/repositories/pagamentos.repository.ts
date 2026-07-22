import { pool } from '../config/database';
import { Pagamento } from '../types';

export const pagamentosRepository = {
  async criar(dados: { reservaId: string; valorCentavos: number }): Promise<Pagamento> {
    const { rows } = await pool.query(
      `INSERT INTO pagamentos (reserva_id, valor_centavos) VALUES ($1, $2) RETURNING *`,
      [dados.reservaId, dados.valorCentavos]
    );
    return rows[0];
  },

  async atualizarPorMpPaymentId(mpPaymentId: string, status: string, metodo: string): Promise<void> {
    await pool.query(
      `UPDATE pagamentos SET status = $1, metodo = $2, updated_at = now() WHERE mp_payment_id = $3`,
      [status, metodo, mpPaymentId]
    );
  },

  async listarPorReserva(reservaId: string): Promise<Pagamento[]> {
    const { rows } = await pool.query(
      'SELECT * FROM pagamentos WHERE reserva_id = $1 ORDER BY created_at DESC',
      [reservaId]
    );
    return rows;
  },
};
