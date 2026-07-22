import { app } from './app';
import { env } from './config/env';
import { iniciarJobExpirarReservas } from './jobs/expirarReservas.job';

app.listen(env.port, () => {
  console.log(`servidor rodando na porta ${env.port}`);
  iniciarJobExpirarReservas();
});
