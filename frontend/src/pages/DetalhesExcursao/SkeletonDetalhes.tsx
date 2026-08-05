import {
    Container, 
        Conteudo,
            Titulo,
            Informacoes,
                InfosDetalhadas,
                InfosPontuais,
    BarraFixaWrapper,
        PrecoBloco,
    SkeletonBar
} from './DetalhesExcursao.styles';

export function SkeletonDetalhes(){
    return(
        <Container aria-label="Carregando excursão">
            <Conteudo>
                <Titulo>
                    <SkeletonBar $width='70%' $height='1.75rem'></SkeletonBar>
                    <SkeletonBar $width='40%' $height='1rem'></SkeletonBar>
                </Titulo>
                <Informacoes>
                    <InfosDetalhadas>
                        <SkeletonBar $width='100%' $height='10rem'></SkeletonBar>
                        <SkeletonBar $width='100%' $height='10rem'></SkeletonBar>
                    </InfosDetalhadas>
                    <SkeletonBar $width='30%' $height='7rem'></SkeletonBar>
                </Informacoes>
            </Conteudo>

            {/* <BarraFixaWrapper>
                <PrecoBloco $expandido={true}>
                    <SkeletonBar $width='100%' $height='3rem'></SkeletonBar>
                </PrecoBloco>
            </BarraFixaWrapper> */}
        </Container>
    );
}