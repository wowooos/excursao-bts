import { pool } from '../config/database';
import { ContratoAceite } from '../types';

export const contratoAceitesRepository = {
  async criar(dados: Omit<ContratoAceite, 'id' | 'aceitoEm'>): Promise<ContratoAceite> {
    const { rows } = await pool.query(
      `INSERT INTO contrato_aceites (reserva_id, versao_contrato, texto_snapshot, ip_aceite)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [dados.reservaId, dados.versaoContrato, dados.textoSnapshot, dados.ipAceite]
    );
    return rows[0];
  },
};
