// Recebe a notificação do MP, busca o pagamento real na API (nunca confiar
// só no payload do webhook) e devolve os dados prontos pro service tratar.
import { Payment } from 'mercadopago';
import { mercadoPagoClient } from './mercadoPagoClient';

export async function processarWebhook(paymentId: string) {
  const payment = new Payment(mercadoPagoClient);
  const dados = await payment.get({ id: paymentId });

  return {
    mpPaymentId: String(dados.id),
    status: dados.status, // 'approved' | 'rejected' | 'pending' | ...
    metodo: dados.payment_type_id ?? null,
    reservaId: dados.external_reference ?? null,
  };
}
