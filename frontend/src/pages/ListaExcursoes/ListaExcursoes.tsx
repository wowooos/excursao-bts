import { useEffect, useState } from 'react';
import { excursoesService } from '../../services/excursoes.service';
import { Excursao } from '../../types';

import { TicketCard } from './TicketCard';
import { SkeletonLista } from './SkeletonLista';
import { ErroLista } from './ErroLista';

import {
    Container,
        Lista,
} from './ListaExcursoes.styles';

export function ListaExcursoes(){
    const [excursoes, setExcursoes] = useState<Excursao[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>("Failed to fetch!");

    const carregarExcursoes = () => {
        setLoading(true);
        setError(null);

        excursoesService.buscarTodas().then(setExcursoes)
        .catch((e: Error) => {
            console.error(e);
            setError('Não foi possível carregar as excursões agora.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        carregarExcursoes();
    }, []);

    if(loading) return <SkeletonLista />;
    if (error) return <ErroLista mensagem={error} onTentarNovamente={carregarExcursoes} />;
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