// Cria a "preference" no MP a partir de uma reserva — é isso que gera a URL
// (init_point) para onde o cliente é redirecionado no Checkout Pro.
import { Preference } from 'mercadopago';
import { mercadoPagoClient } from './mercadoPagoClient';
import { env } from '../../config/env';
import { Excursao, Cliente, Reserva } from '../../types';

export async function criarPreference(excursao: Excursao, cliente: Cliente, reserva: Reserva) {
  const preference = new Preference(mercadoPagoClient);

  const resultado = await preference.create({
    body: {
      items: [
        {
          id: excursao.id,
          title: excursao.nome,
          quantity: 1,
          unit_price: excursao.valorCentavos / 100,
        },
      ],
      payer: {
        name: cliente.nomeCompleto,
        email: cliente.email,
      },
      external_reference: reserva.id, // é assim que o webhook sabe a qual reserva o pagamento pertence
      back_urls: {
        success: `${env.frontendUrl}/confirmacao/${reserva.id}`,
        failure: `${env.frontendUrl}/checkout/${reserva.id}`,
        pending: `${env.frontendUrl}/checkout/${reserva.id}`,
      },
      auto_return: 'approved',
    },
  });

  return resultado; // resultado.init_point é a URL pra redirecionar o cliente
}
