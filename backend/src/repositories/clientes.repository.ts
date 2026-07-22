import { pool } from '../config/database';
import { Cliente } from '../types';

export const clientesRepository = {
  async buscarPorId(id: string): Promise<Cliente | null> {
    const { rows } = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    return rows[0] ?? null;
  },

  async buscarPorCpf(cpf: string): Promise<Cliente | null> {
    const { rows } = await pool.query('SELECT * FROM clientes WHERE cpf = $1', [cpf]);
    return rows[0] ?? null;
  },

  async criar(dados: Omit<Cliente, 'id'>): Promise<Cliente> {
    const { rows } = await pool.query(
      `INSERT INTO clientes (nome_completo, cpf, email, telefone)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [dados.nomeCompleto, dados.cpf, dados.email, dados.telefone]
    );
    return rows[0];
  },
};
