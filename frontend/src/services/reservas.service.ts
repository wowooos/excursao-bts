import { api } from './api';
import { CriarReservaInput } from '../types';

export const reservasService = {
  criar: (dados: CriarReservaInput) =>
    api<{ reserva: { id: string }; initPoint: string }>('/reservas', {
      method: 'POST',
      body: JSON.stringify(dados),
    }),

  tentarNovamente: (reservaId: string) =>
    api<{ initPoint: string }>(`/reservas/${reservaId}/tentar-novamente`, { method: 'POST' }),
};
