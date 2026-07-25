// Corresponde ao frame "Landing - Excursão BTS" no Figma.
// Busca a excursão pelo id e mostra o resumo antes de partir pro fluxo de reserva.
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Excursao } from '../../types';
import { excursoesService } from '../../services/excursoes.service';
import { Button } from '../../components/ui/Button';

export function Landing({ excursaoId }: { excursaoId: string }) {
  const [excursao, setExcursao] = useState<Excursao | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    excursoesService.buscarDetalhes(excursaoId).then(setExcursao)
    .catch((e: Error) => {
      setError(e.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [excursaoId]);

  if(loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
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
