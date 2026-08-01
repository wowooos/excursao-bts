// ListaExcursoes.styles.ts
import styled, { keyframes, css } from 'styled-components';

/** KEYFRAMES ------------------------------------------------- */
const slideInItens = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutItens = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const fadeInButtonPacote = keyframes`
  from {
    opacity: 0;
    /* transform: translateY(10px); */
  }
  to {
    opacity: 1;
    /* transform: translateY(0px); */
  }
`;

const fadeInButtonPacoteVisible = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

const fadeOutButtonPacote = keyframes`
  from {
    opacity: 1;
    /* transform: translateY(0); */
  }
  to {
    opacity: 0;
    /* transform: translateY(-5px); */
  }
`;
/**------------------------------------------------- */
export const Container = styled.div`
  background: var(--color-bg-preto);
  min-height: 100vh;
  padding: 1.5rem 1rem;

  svg{
    width: 18px;
    height: 18px;
  }
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 435px));
  gap: 3rem;

  padding: 0 2rem;
  justify-content: center;
  align-items: start;
`;
/**------------------------------------------------- */
export const Ticket = styled.article<{$esgotado:boolean}>`
  display: flex;
  overflow: hidden;

  border-radius: 0.5rem;
  
  background: var(--color-bg-elevado);
  border: 2px solid var(--color-border-default);
  box-shadow: ${({$esgotado}) => {
    return $esgotado ?
      '0 4px 20px rgba(51, 51, 51, 0.1)':
      '0 4px 20px rgba(139, 0, 0, 0.4)';
  }};  

  transition: 0.5s ease;
  @media (hover:hover) and (pointer:fine){ 
    /** hover:hover -> o dispositivo consegue manter o cursor parado sobre um elemento sem "clicar" (mouse consegue, dedo não) 
    pointer:fine -> o dispositivo tem um ponteiro preciso (mouse/trackpad)
    */
    ${({$esgotado}) => 
      !$esgotado &&

      css`
          &:hover{
            transform: scale(1.05);
            border-color: var(--color-brand-primaria);
          }
      `
    }

  }

  @media(max-width:768px){
    border: 1px solid var(--color-border-default);
    &:active{
      border-color: var(--color-brand-primaria);
    }
  }
`;
    export const AccentBorda = styled.span`
      width: 4px;
      flex-shrink: 0;

      background-color: var(--color-brand-primaria);
    `;
    export const Conteudo = styled.div` 
      flex-grow: 1;

      display: flex;
      flex-direction: column;
    `;
        export const CapaTicket = styled.img`
          height: 15rem;
          width: 100%;
          object-fit: cover;
        `;

        export const CorpoTicket = styled.div`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          padding: 1rem 1.5rem;
        `;
            export const NomeExcursao = styled.h3`
              font-family: var(--font-display);
              font-weight: var(--font-weight-bold);
              font-size: 1.25rem;

              @media(max-width:768px){

              }
            `;
            export const DataExcursao = styled.p`
              color: var(--color-text-secundario);
              font-size: var(--font-size-caption);

            `;
        export const PacoteExcursao = styled.div`
          padding: 1.5rem;

          font-size: 0.75rem;
          color: var(--color-text-secundario);

          ul{
            list-style: none;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          li{
            display: flex;
            gap: 0.5rem;
          }
        `;
            export const ItemExtra = styled.li<{$index:number, $state:'hidden' | 'visible' | 'hiding'}>`
              animation: ${({$state})=>{
              if($state==='visible') return css`${slideInItens} 0.3s ease both`;
              if($state==='hiding') return css`${slideOutItens} 0.3s ease both`;
              }};

              animation-delay: ${({$index}) => $index*0.1}s;
            `;
            export const ButtonPacote = styled.button<{$state:'hidden' | 'visible' | 'hiding'}>`
              outline: none;
              cursor: pointer;
              border: none;
              min-height: 45px;
              background-color: var(--color-bg-elevado);

              /* color: #40a9ff; */
              color: rgba(255, 68, 68, 0.7);
              font-family: var(--font-display);
              font-weight: var(--font-weight-regular);

              animation: ${({$state}) => {
                if($state==='hidden') return css`${fadeInButtonPacote} 0.5s ease`;
                if($state==='visible') return css`${fadeInButtonPacoteVisible} 0.5s ease`;
                if($state==='hiding') return css`${fadeOutButtonPacote} 0.5s ease`;
              }};
              
            `;
        export const Divisoria = styled.div`
          border-bottom: 2px dashed var(--color-border-default);
        `;

        export const Canhoto = styled.div`
          padding: 1.5rem;
          display: flex;

          justify-content: space-between;
          gap: 2rem;

          div{
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }
        `;
          export const LabelCanhoto = styled.span`
            font-size: var(--font-size-caption);
            color: var(--color-text-secundario);
          `;
          export const ValorCanhoto = styled.span<{$esgotado:boolean}>`
            font-family: var(--font-mono);
            font-weight: var(--font-weight-semi-bold);

            color: ${({$esgotado}) => {
              return $esgotado ?
                'rgba(255, 255, 255, 0.4)':
                'var(--color-text-primario)'
            }}

          `;

      export const AreaBotao = styled.div`
        padding: 0 1.5rem 1.5rem 1.5rem;
      `;

        export const BotaoReserva = styled.button<{$esgotado:boolean}>`
          transition: background-color 0.3s ease, color 0.3s ease;

          background-color: var(--color-bg-elevado);
          min-height: 45px;
          width: 100%;

          border: ${({$esgotado}) => {
            return $esgotado ? 
            '2px solid var(--color-border-default)': 
            '2px solid var(--color-brand-destaque)';
          }};
          color: ${({$esgotado}) => {
            return $esgotado ?
              'var(--color-border-default)': 
              'var(--color-brand-destaque)';
          }};

          border-radius: 8px;
          
          @media(hover:hover) and (pointer:fine){
            transition: background-color 0.5s ease, color 0.5s ease;
            ${({$esgotado}) => 
              !$esgotado &&

              css`
                &:hover{
                  background-color: var(--color-brand-destaque);
                  color: var(--color-text-primario);
                }             
              `
            };

            cursor: ${({$esgotado})=> {
              if(!$esgotado) return 'pointer';
            }};
          }
          
          @media(max-width:768px){
            &:active{
              transition: background-color 0s, color 0s;
              background-color: var(--color-brand-destaque);
              color: var(--color-text-primario);
            }
          }
        `;

/**------------------------------------------------- */






