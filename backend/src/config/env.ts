// Centraliza a leitura das variáveis de ambiente.
// Nenhum outro arquivo deve chamar process.env diretamente — sempre importar daqui.
import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT ?? 3333),
  databaseUrl: process.env.DATABASE_URL ?? '',
  mercadoPago: {
    accessToken: process.env.MP_ACCESS_TOKEN ?? '',
    webhookSecret: process.env.MP_WEBHOOK_SECRET ?? '',
  },
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:5173',
  reservaExpiracaoMinutos: Number(process.env.RESERVA_EXPIRACAO_MINUTOS ?? 20),
};
