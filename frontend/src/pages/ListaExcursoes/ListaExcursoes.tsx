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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
    if(!excursoes) return <ErroLista mensagem='Excursão não encontrada.' onTentarNovamente={carregarExcursoes}/>;

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