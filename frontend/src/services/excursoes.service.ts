import { api } from './api';
import { Excursao } from '../types';

export const excursoesService = {
  buscarDetalhes: (id: string) => api<Excursao>(`/excursoes/${id}`),
};

// objeto que tem uma propriedade cujo valor é uma função 
// arrow function