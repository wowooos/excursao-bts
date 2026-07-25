// ListaExcursoes.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
  padding: 1.5rem 1rem;
`;

export const Titulo = styled.h1`
  font-family: var(--font-display);
  font-size: var(--font-size-display);
  color: var(--color-ticket);
  margin-bottom: 1.5rem;
`;

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TicketCard = styled.article`
  display: flex;
  background: var(--color-ticket);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const CorpoTicket = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const NomeExcursao = styled.h2`
  font-family: var(--font-display);
  font-size: var(--font-size-heading);
  color: var(--color-bg);
  margin-bottom: 0.5rem;
`;

export const InfoSecundaria = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`;

export const Divisoria = styled.div`
  position: relative;
  border-left: 3px dashed #D9D2C4;
`;

export const Canhoto = styled.div`
  width: 6rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
`;

export const LabelCanhoto = styled.span`
  font-family: var(--font-mono);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`;

export const ValorVagas = styled.span`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-accent);
`;

export const Preco = styled.span`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--font-size-body);
  color: var(--color-bg);
`;