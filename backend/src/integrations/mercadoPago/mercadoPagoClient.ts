// Instância única do SDK do Mercado Pago, usada pelos outros arquivos desta pasta.
import { MercadoPagoConfig } from 'mercadopago';
import { env } from '../../config/env';

export const mercadoPagoClient = new MercadoPagoConfig({
  accessToken: env.mercadoPago.accessToken,
});
