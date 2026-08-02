import styled from "styled-components";

export const FooterWrap = styled.footer`
    display: flex;
    flex-direction: column;

    p{
        text-align: center;
        font-weight: var(--font-weight-light);
    }

    svg{
        width: 1rem;
        height: 1rem;
    }

    @media(max-width:768px){
        p{
            font-size: 0.85rem;
        }
    }
`;

export const FooterMessage = styled.div`
    width: 100%;
    padding: 2rem 1rem;

    background-color: var(--color-bg-elevado);
    border-top: 2px solid var(--color-brand-primaria);

    p{
        color: var(--color-text-primario);
        font-family: var(--font-display);
    }
`;

export const Contato = styled.div`
    width: 100%;
    padding: 2rem 0.5rem;
    background-color: rgba(26,26, 26, 0.2);

    box-shadow: 0px 4px 20px rgb(51, 51, 51);

    p{
        color: var(--color-text-secundario);
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const ContatoItem = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p{
        cursor: text;
        user-select: text; /* reabilita seleção só onde o usuário PRECISA editar texto */
        -webkit-user-select: text; 
        -webkit-touch-callout: default;
    }
`;
