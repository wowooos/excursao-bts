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
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC', // <-- Adicione esta linha!
  }).formatToParts(data);

  const dia = partes.find((p) => p.type === 'day')?.value;
  const mes = partes.find((p) => p.type === 'month')?.value.replace('.', '');
  const ano = partes.find((p) => p.type === 'year')?.value;
  const diaSemanaBruto = partes.find((p) => p.type === 'weekday')?.value.replace('.', '') || '';

  const diaSemana = diaSemanaBruto?.charAt(0).toUpperCase() + diaSemanaBruto?.slice(1);

  return `${dia} ${mes} ${ano} — ${diaSemana}`;
}