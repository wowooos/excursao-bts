import { excursoesRepository } from '../repositories/excursoes.repository';

export const excursoesService = {
  async buscarDetalhes(id: string) {
    const excursao = await excursoesRepository.buscarPorId(id);
    if (!excursao) throw new Error('Excursão não encontrada');
    return excursao;
  },

  async listarTodas(){
    const rows = await excursoesRepository.listarTodas();
    // rows = [{},{},{}]
    // data { rows: [{},{},{}]}


    return rows;
  }
};
