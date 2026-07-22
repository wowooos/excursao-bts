// Camada de acesso a dados: só sabe conversar com o Postgres, sem regra de negócio.
import { pool } from '../config/database';
import { Excursao } from '../types';

export const excursoesRepository = {
  async buscarPorId(id: string): Promise<Excursao | null> {
    const { rows } = await pool.query('SELECT * FROM excursoes WHERE id = $1', [id]);
    return rows[0] ?? null;
  },

  async decrementarVaga(id: string): Promise<void> {
    // O WHERE vagas_disponiveis > 0 evita condição de corrida deixar o número negativo
    await pool.query(
      'UPDATE excursoes SET vagas_disponiveis = vagas_disponiveis - 1 WHERE id = $1 AND vagas_disponiveis > 0',
      [id]
    );
  },

  async incrementarVaga(id: string): Promise<void> {
    await pool.query(
      'UPDATE excursoes SET vagas_disponiveis = vagas_disponiveis + 1 WHERE id = $1',
      [id]
    );
  },
};
