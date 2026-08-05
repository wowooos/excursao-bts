// DetalhesExcursao.styles.ts
import styled, { css, keyframes } from 'styled-components';

/** KEYFRAMES ------------------------------------------------- */
const slideIn = keyframes`
    from{
        opacity: 0;
        max-height: 0;
        transform: translateY(100%);
        visibility: visible;
    }to{
        opacity: 1;
        max-height: 100%;
        transform: translateX(0);
        visibility: visible;
    }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    max-height: 100px;
    transform: translateY(0);
    visibility: visible;
  }
  to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-100%);
    visibility: hidden; /* Oculta ao final do slideOut */
  }
`;





/** CONTAINER ------------------------------------------------- */
export const Container = styled.div`
    position: relative;
    background: var(--color-bg-preto);
    min-height: 100vh;
    padding: var(--space-lg) 0 0;
    /* padding-bottom maior pra sobrar espaço abaixo da BarraFixa, mesmo expandida */

    display: flex;
    flex-direction: column;
    /* gap: var(--space-lg); */
`;

export const Conteudo = styled.div`
    /* max-width: ; 600px */
    flex: 1;

    width: 90vw;
    margin: 0 auto;
    padding: 0 var(--space-sm);

    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
`;

/** TÍTULO ------------------------------------------------- */
export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  text-align: center;
`;

export const NomeExcursao = styled.h1`
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-heading);
  color: var(--color-text-primario);
`;

export const Duracao = styled.span`
  display: inline-block;
  padding: var(--space-2xs) var(--space-sm);
  border-radius: 999px;

  background: var(--color-bg-elevado);
  border: 1px solid var(--color-border-default);

  font-family: var(--font-mono);
  font-size: var(--font-size-caption);
  color: var(--color-text-secundario);
`;

/** INFORMACOES ------------------------------------------------- */

export const Informacoes = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: start;

    gap: var(--space-sm);
    flex-wrap: wrap;
`;

export const InfosDetalhadas = styled.div`
    display: flex;
    flex-direction: column;

    gap: var(--space-lg);

    min-width: 20rem;
    flex: 3 1 20rem;
    /** grow, shrink, basis */
`;

export const InfosPontuais = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  
    min-width: 20rem;
    flex: 1 1 20rem;

    background: var(--color-bg-elevado);
    border: 1px solid var(--color-border-default);
    border-radius: 0.5rem;
    padding: var(--space-md);
`;

export const DataPrincipal = styled.p`
  font-family: var(--font-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-default);
  color: var(--color-text-primario);
`;

export const Embarque = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);

  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border-default);
`;

export const EmbarqueLabel = styled.p`
  font-family: var(--font-mono);
  font-size: var(--font-size-caption);
  color: var(--color-brand-destaque);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  font-weight: var(--font-weight-semi-bold);
`;

export const EmbarqueLocal = styled.p`
  font-size: var(--font-size-default);
  color: var(--color-text-primario);
  font-weight: var(--font-weight-medium);
`;

export const EmbarqueDetalhe = styled.p`
  font-size: var(--font-size-caption);
  color: var(--color-text-secundario);
`;

/** ACCORDION (compartilhado entre Roteiro e O que inclui) ------------------------------------------------- */
export const Accordion = styled.details`
    outline: none;
    background: var(--color-bg-elevado);
    border: 1px solid var(--color-border-default);
    border-radius: 0.5rem;
    overflow: hidden;

    &[open] summary .seta {
        transform: rotate(180deg);
    }
`;

export const AccordionResumo = styled.summary`
  list-style: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: var(--touch-target-min);
  padding: var(--space-sm) var(--space-md);

  font-family: var(--font-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-default);
  color: var(--color-text-primario);

  &::-webkit-details-marker {
    display: none;
  }
`;

export const Seta = styled.span`
  transition: transform 0.3s ease;
  color: var(--color-brand-destaque);
  font-size: var(--font-size-caption);
`;

export const AccordionConteudo = styled.div`
  padding: 0 var(--space-md) var(--space-md);

  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

/** ROTEIRO (linhas label/valor) ------------------------------------------------- */
export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-sm);

  font-size: var(--font-size-caption);
  border-bottom: 1px solid var(--color-border-default);
  padding-bottom: var(--space-xs);

  &.sublinha{
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`;

export const LinhaLabel = styled.span`
  color: var(--color-text-secundario);
  flex-shrink: 0;

  &.sublinha{
    padding-bottom: var(--space-xs);
    /* border-bottom: 1px solid var(--color-border-default); */
  }

  @media(max-width:768px){
    flex: 1 1 100%;
  }
`;

export const LinhaValor = styled.span`
  color: var(--color-text-primario);
  text-align: right;
`;

export const SubLinhas = styled.div`
  display: flex;
  flex-direction: column;

  gap: var(--space-2xs);
  padding-left: var(--space-2xl);

  @media(max-width:768px){
    padding-left: var(--space-2xs);
  }
`;

export const SubLinha = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-xs);
`;

export const SubLinhaLabel = styled.span`
    color: rgba(220,20,60,0.75);
    font-weight: var(--font-weight-semi-bold);
`;

export const SubLinhaValor = styled.span`
    color: rgba(255,68,68,0.7);
    /* text-align: right; */
    align-self: flex-end;
`;

export const ImportanteBox = styled.div`
  border-left: 3px solid var(--color-brand-destaque);
  background: var(--color-bg-preto);
  border-radius: 0 0.25rem 0.25rem 0;

  padding: var(--space-sm);

  font-size: var(--font-size-caption);
  color: var(--color-text-secundario);
  line-height: 1.5;
`;

export const ImportanteLabel = styled.strong`
  display: block;
  color: var(--color-brand-destaque);
  font-family: var(--font-display);
  margin-bottom: var(--space-2xs);
`;

/** O QUE INCLUI ------------------------------------------------- */
export const IncluiLista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

export const IncluiItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-xs);

  font-size: var(--font-size-caption);
  color: var(--color-text-secundario);
`;

export const IncluiIcone = styled.span`
  color: var(--color-text-secundario);
  flex-shrink: 0;
`;

export const AvisoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-xs);

  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-brand-destaque);
`;

export const AvisoIcone = styled.span`
  flex-shrink: 0;
`;

export const NotaEmpresas = styled.p`
  font-size: var(--font-size-caption);
  color: var(--color-text-secundario);
  font-style: italic;
`;

/** BARRA FIXA ------------------------------------------------- */
export const BarraFixaWrapper = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  background: var(--color-bg-elevado);
  border-top: 1px solid var(--color-border-default);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.4);

  padding: 0 var(--space-sm) var(--space-xs);
  padding-bottom: max(var(--space-xs), env(safe-area-inset-bottom));
`;

export const Puxador = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: var(--space-2xs) 0;
`;

export const PuxadorTraco = styled.span`
  display: block;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 999px;
  background: var(--color-border-default);
`;

export const PrecoBloco = styled.div<{ $expandido: boolean }>`
    transition: grid-template-rows 0.5s ease, opacity 0.4s ease;

    display: grid;
    grid-template-rows: ${({ $expandido }) => ($expandido ? '1fr' : '0fr')};
    opacity: ${({$expandido}) => ($expandido? 1:0)};

    overflow: hidden;
`;

export const PrecoConteudo = styled.div`
    min-height: 0;
    overflow: hidden;

    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding-bottom: var(--space-sm);
`;

export const PrecoIcone = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: color-mix(in srgb, var(--color-brand-destaque) 15%, transparent);
  color: var(--color-brand-destaque);
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body);
`;

export const PrecoLabelValor = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrecoLabel = styled.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-secundario);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

export const PrecoValor = styled.span`
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-heading);
  color: var(--color-brand-destaque);

  span {
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-regular);
    color: var(--color-text-secundario);
  }
`;

/** CTA (atualizado pra aceitar $esgotado) ------------------------------------------------- */
export const BotaoReservar = styled.button<{ $esgotado?: boolean }>`
  min-height: var(--touch-target-min);
  width: 100%;
  border-radius: 0.5rem;
  cursor: ${({ $esgotado }) => ($esgotado ? 'not-allowed' : 'pointer')};

  background-color: ${({ $esgotado }) =>
    $esgotado ? 'transparent' : 'var(--color-brand-destaque)'};
  border: ${({ $esgotado }) =>
    $esgotado ? '2px solid var(--color-border-default)' : 'none'};
  color: ${({ $esgotado }) =>
    $esgotado ? 'var(--color-border-default)' : 'var(--color-text-primario)'};

  font-family: var(--font-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-default);

  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  @media (hover: hover) and (pointer: fine) {
    transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
    ${({ $esgotado }) =>
      !$esgotado &&
      css`
        &:hover {
          background-color: var(--color-brand-secundaria);
        }
      `}
  }

  @media (hover: none) and (pointer: coarse) {
    ${({ $esgotado }) =>
      !$esgotado &&
      css`
        &:active {
          transition: background-color 0s;
          background-color: var(--color-brand-secundaria);
        }
      `}
  }
`;