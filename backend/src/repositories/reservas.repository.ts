import { pool } from '../config/database';
import { Reserva } from '../types';

export const reservasRepository = {
  async criar(dados: { clienteId: string; excursaoId: string; parcelas: number; expiraEm: Date }): Promise<Reserva> {
    const { rows } = await pool.query(
      `INSERT INTO reservas (cliente_id, excursao_id, parcelas, expira_em)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [dados.clienteId, dados.excursaoId, dados.parcelas, dados.expiraEm]
    );
    return rows[0];
  },

  async buscarPorId(id: string): Promise<Reserva | null> {
    const { rows } = await pool.query('SELECT * FROM reservas WHERE id = $1', [id]);
    return rows[0] ?? null;
  },

  async atualizarStatus(id: string, status: string): Promise<void> {
    await pool.query('UPDATE reservas SET status = $1, updated_at = now() WHERE id = $2', [status, id]);
  },

  // Usado pela regra de retry: mantém a reserva "pendente" mas empurra o prazo
  async estenderExpiracao(id: string, novaExpiracao: Date): Promise<void> {
    await pool.query('UPDATE reservas SET expira_em = $1, updated_at = now() WHERE id = $2', [novaExpiracao, id]);
  },

  // Usado pelo job que libera vagas de reservas que estouraram o prazo
  async buscarExpiradas(): Promise<Reserva[]> {
    const { rows } = await pool.query(
      `SELECT * FROM reservas WHERE status = 'pendente' AND expira_em < now()`
    );
    return rows;
  },
};
