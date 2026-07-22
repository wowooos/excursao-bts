// Pool de conexão com o Postgres, compartilhado por todos os repositories.
import { Pool } from 'pg';
import { env } from './env';

export const pool = new Pool({
  connectionString: env.databaseUrl,
});
