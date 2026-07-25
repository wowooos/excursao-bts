
import { useEffect, useState } from 'react';
import { excursoesService } from '../../services/excursoes.service';
import { Excursao } from '../../types';
import {
    Container,
    Titulo,
    Lista,
    TicketCard,
    CorpoTicket,
    NomeExcursao,
    InfoSecundaria,
    Divisoria,
    Canhoto,
    LabelCanhoto,
    ValorVagas,
    Preco,
} from './ListaExcursoes.styles';
import { formatarValorEmReais, formatarData } from '../../utils/formatters';

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
        <Titulo>Escolha sua data</Titulo>
        <Lista>
            {excursoes.map((excursao) => (
                <TicketCard key={excursao.id}>
                    <CorpoTicket>
                        <NomeExcursao>{excursao.nome}</NomeExcursao>
                        <InfoSecundaria>{formatarData(excursao.dataEvento)}</InfoSecundaria>
                    </CorpoTicket>

                    <Divisoria>
                    </Divisoria>

                    <Canhoto>
                        <LabelCanhoto>vagas</LabelCanhoto>
                        <ValorVagas>{excursao.vagasDisponiveis}</ValorVagas>
                        <LabelCanhoto>de {excursao.vagasTotais}</LabelCanhoto>
                        <Preco>{formatarValorEmReais(excursao.valorCentavos)}</Preco>
                    </Canhoto>
                </TicketCard>
            ))}
        </Lista>
    </Container>
    );
}