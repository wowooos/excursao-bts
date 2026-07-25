export function formatarValorEmReais(valorCentavos: number): string {
  const valorEmReais = valorCentavos / 100;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valorEmReais);
}

export function formatarData(dataISO: string): string {
  const data = new Date(dataISO);
  const partes = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).formatToParts(data);

  const dia = partes.find((p) => p.type === 'day')?.value;
  const mes = partes.find((p) => p.type === 'month')?.value.replace('.', '');
  const ano = partes.find((p) => p.type === 'year')?.value;

  return `${dia} ${mes} ${ano}`;
}