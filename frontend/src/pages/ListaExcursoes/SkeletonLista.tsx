import { TicketCardSkeleton } from "./TicketCardSkeleton";

import {
    Container,
    Lista
} from './ListaExcursoes.styles'

export function SkeletonLista(){
    return (
        <Container role="status" aria-live="polite" aria-label="Carregando excursões">
            <Lista>
                <TicketCardSkeleton/>
                <TicketCardSkeleton/>
                <TicketCardSkeleton/>
            </Lista>
        </Container>
    );
}