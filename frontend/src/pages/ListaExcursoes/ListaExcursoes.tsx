import { useEffect, useState } from 'react';
import { excursoesService } from '../../services/excursoes.service';
import { Excursao } from '../../types';
import { TicketCard } from './TicketCard';
import {
    Container,
        Lista,
} from './ListaExcursoes.styles';

export function ListaExcursoes(){
    const [excursoes, setExcursoes] = useState<Excursao[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        excursoesService.buscarTodas().then(setExcursoes)
        .catch((e: Error) => {
            setError(e.message);
        })
        .finally(() => {
            setLoading(false);
        });

    }, []);

    if(loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;
    if(!excursoes) return <div>Excursão não encontrada.</div>;

    return(
    <Container>
        <Lista>
            {excursoes.map((excursao) => (
                <TicketCard excursao={excursao} key={excursao.id}></TicketCard>
            ))}
        </Lista>
    </Container>
    );
}