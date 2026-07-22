// Mesma forma dos tipos do backend, só o necessário pro frontend consumir.
export interface Excursao {
  id: string;
  nome: string;
  dataEvento: string;
  valorCentavos: number;
  vagasTotais: number;
  vagasDisponiveis: number;
}

export interface CriarReservaInput {
  excursaoId: string;
  parcelas: number;
  cliente: { nomeCompleto: string; cpf: string; email: string; telefone: string };
  contrato: { versao: string; textoSnapshot: string };
}
