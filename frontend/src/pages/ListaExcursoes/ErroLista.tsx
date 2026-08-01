import {
    Container,
    ErroWrapper,
    ErroIcone,
    ErroMensagem,
    BotaoTentarNovamente,
} from './ListaExcursoes.styles';

type ErroListaProps = {
    mensagem: string;
    onTentarNovamente: () => void;
};

export function ErroLista({ mensagem, onTentarNovamente }: ErroListaProps){
    return (
        <Container role="alert">
            <ErroWrapper>
                <ErroIcone aria-hidden="true">!</ErroIcone>
                <ErroMensagem>{mensagem}</ErroMensagem>
                <BotaoTentarNovamente onClick={onTentarNovamente}>
                    tentar novamente
                </BotaoTentarNovamente>
            </ErroWrapper>
        </Container>
    );
}