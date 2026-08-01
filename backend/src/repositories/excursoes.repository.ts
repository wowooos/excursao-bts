// Camada de acesso a dados: só sabe conversar com o Postgres, sem regra de negócio.
import { pool } from '../config/database';
import { Excursao } from '../types';

function mapRowToExcursao(row: any): Excursao{
  return{
    id: row.id,
    nome: row.nome,
    dataEvento: row.data_evento,
    localEmbarque: row.local_embarque,
    horarioEmbarque: row.horario_embarque,
    destino: row.destino,
    valorCentavos: row.valor_centavos,
    vagasTotais: row.vagas_totais,
    vagasDisponiveis: row.vagas_disponiveis,
  };
}

export const excursoesRepository = {
  async listarTodas(){
    const { rows } = await pool.query(`
      SELECT id, nome, data_evento, valor_centavos, vagas_totais, vagas_disponiveis 
      FROM excursoes 
      ORDER BY (vagas_disponiveis = 0) ASC, data_evento ASC
    `);
    return rows.map((r)=>mapRowToExcursao(r));
  },

  async buscarPorId(id: string): Promise<Excursao | null> {
    const { rows } = await pool.query('SELECT * FROM excursoes WHERE id = $1', [id]);
    return rows[0] ? mapRowToExcursao(rows[0]) : null;
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
