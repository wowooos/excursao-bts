// Tipos compartilhados entre as camadas, espelhando o schema do banco.

export type StatusReserva = 'pendente' | 'confirmada' | 'cancelada';
export type StatusPagamento = 'pendente' | 'aprovado' | 'rejeitado';

export interface Cliente {
  id: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
}

export interface Excursao {
  id: string;
  nome: string;
  dataEvento: string;
  localEmbarque: string;
  horarioEmbarque: string;
  destino: string;
  valorCentavos: number;
  vagasTotais: number;
  vagasDisponiveis: number;
}

export interface Reserva {
  id: string;
  clienteId: string;
  excursaoId: string;
  status: StatusReserva;
  parcelas: number;
  expiraEm: string;
}

export interface ContratoAceite {
  id: string;
  reservaId: string;
  versaoContrato: string;
  textoSnapshot: string;
  aceitoEm: string;
  ipAceite: string;
}

export interface Pagamento {
  id: string;
  reservaId: string;
  mpPaymentId: string | null;
  valorCentavos: number;
  status: StatusPagamento;
  metodo: string | null;
}
