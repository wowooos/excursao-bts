import{
    Ticket,
    Conteudo,
    SkeletonBar,
    CorpoTicket,
    Divisoria,
    Canhoto,
    AreaBotao,
} from './ListaExcursoes.styles';

export function TicketCardSkeleton(){
    return (
        <Ticket $esgotado={true}>
            <Conteudo>
                <SkeletonBar $width="100%" $height="15rem" />   {/* no lugar da CapaTicket */}

                <CorpoTicket>
                    <SkeletonBar $width="70%" $height="1.75rem" />  {/* nome da excursão */}
                    <SkeletonBar $width="40%" $height="1rem" />     {/* data */}
                </CorpoTicket>

                <Divisoria/>

                <CorpoTicket>
                    <SkeletonBar $width="90%" $height="0.875rem" />
                    <SkeletonBar $width="75%" $height="0.875rem" />
                    <SkeletonBar $width="60%" $height="0.875rem" />  {/* itens do pacote */}
                </CorpoTicket>

                <Divisoria/>

                <Canhoto>
                    <div>
                        <SkeletonBar $width="3.5rem" $height="0.875rem" />
                        <SkeletonBar $width="5rem" $height="1.25rem" />
                    </div>
                    <div>
                        <SkeletonBar $width="3rem" $height="0.875rem" />
                        <SkeletonBar $width="5.5rem" $height="1.25rem" />
                    </div>
                </Canhoto>

                <AreaBotao>
                    <SkeletonBar $width="100%" $height="44px" />
                </AreaBotao>
            </Conteudo>
        </Ticket>
    );
}