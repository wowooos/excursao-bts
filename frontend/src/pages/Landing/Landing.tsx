// Corresponde ao frame "Landing - Excursão BTS" no Figma.
// Busca a excursão pelo id e mostra o resumo antes de partir pro fluxo de reserva.
import { useEffect, useState } from 'react';
import { Excursao } from '../../types';
import { excursoesService } from '../../services/excursoes.service';
import { Button } from '../../components/ui/Button';

export function Landing({ excursaoId }: { excursaoId: string }) {
  const [excursao, setExcursao] = useState<Excursao | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setErro(null);

    excursoesService.buscarDetalhes(excursaoId).then(setExcursao)
    .catch((e: Error) => {
      setErro(e.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [excursaoId]);

  if(loading) return <div>Carregando...</div>;
  if (erro) return <div>Erro: {erro}</div>;
  if(!excursao) return <div>Excursão não encontrada.</div>;

  return (
    <div>
      <h1>{excursao.nome}</h1>
      <p>{excursao.vagasDisponiveis} de {excursao.vagasTotais} vagas restantes</p>
      <Button onClick={() => { /* navegar para /aceite-contrato */ }}>
        reservar minha vaga
      </Button>
    </div>
  );
}
