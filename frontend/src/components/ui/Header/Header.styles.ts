import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

/** KEYFRAMES */

const slideInMenu = keyframes`
  from{
    opacity: 0;
    top: 70%;
  }to{
    opacity: 1;
    top: 100%;
  }
`;

const slideOutMenu = keyframes`
  from{
    opacity: 1;
  }to{
    opacity: 0;
  }
`;
/*--------------------------------------------------------- */

export const HeaderWrapper = styled.header`
  background: var(--color-bg-elevado);
  padding: 0 var(--space-sm);
  display: flex;
  
  position: sticky;
  top: 0;
  z-index: 1000;

  border-bottom: 2px solid var(--color-brand-primaria);

  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);

  svg{
    opacity: 70%;
  }
`;

export const LogoImg = styled(Link)`
  display: flex;
`;
  export const IconLogo = styled.img`
    height: 6.25rem;
    width: auto;

    @media(max-width:768px){
      height: 4rem;
    }
  `;

  export const TextoLogo = styled.img`
    height: 6.25rem;
    width: auto;

    @media(max-width:768px){
      height: 4rem;
    }
  `;

/* NAV */
export const Nav = styled.nav`
  position: relative;

  display: flex;
  gap: 1.5rem;
`;

export const ButtonMenu = styled.button`
  display: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);

  position: relative;
  background-color: rgba(139, 0, 0, 0.5); /* brand-primaria com 50% de alpha, só no background */
  border-radius: 4px;

  transition: background-color 0.3s;

  @media(hover:hover) and (pointer:fine){
    &:hover{
      background-color: var(--color-brand-primaria);
      span{
        background-color: #FFFFFF;
      }
    }
  }

  @media (max-width: 768px){
    display: inline-block;
    width: 44px;
    height: 44px;
  }
`;

export const ButtonLine = styled.span<{$aberto:boolean}>`
  position: absolute;
  display: block;
  width: 25px;
  height: 3px;

  border-radius: 50px;
  transition: 0.3s ease;
  background-color: ${({$aberto}) => {
    if($aberto===true) return '#FFFFFF';
    else return 'rgba(255, 255, 255, 0.7)';
  }};

  &:nth-child(1){
    top: 12px;
    transform: ${({$aberto}) => {
      if($aberto===true) return 'rotate(45deg) translate(5px, 5px)';
    }};
  }

  &:nth-child(2){
    top: 20px;
    opacity: ${({$aberto}) => {
      if($aberto===true) return '0';
    }};
  }

  &:nth-child(3){
    top: 28px;
    transform: ${({$aberto}) => {
      if($aberto===true) return 'rotate(-45deg) translate(7px, -6px)';
    }};
  }
`;

export const NavPages = styled.ul<{$aberto:boolean}>`
  list-style: none;

  padding: 0.5rem;
  display:flex;
  /* flex-direction: column; */

  gap: 0.5rem;

  @media (max-width: 768px){
    transition: visibility 0.3s;

    visibility: ${({$aberto}) => {
      if($aberto===true) return 'visible';
      else return 'hidden';
    }};

    animation: ${({$aberto}) => {
      if($aberto) return css`${slideInMenu} 0.5s ease`;
      if(!$aberto) return css`${slideOutMenu} 0.3s ease`;
    }};

    gap: 0;

    width: clamp(7.5rem, 40vw, 40vw);
    flex-direction: column;

    position: absolute;
    top: 100%;
    right: 0;

    background-color: var(--color-bg-elevado);
    border-bottom: 2px solid var(--color-brand-primaria);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
    border-radius: 2px;
  }
    
  li:last-child{
      border-bottom: none;
  }

`;

export const NavLink = styled(Link)`
  padding: var(--space-xs);

  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);

  color: var(--color-text-secundario);

  border-bottom: 2px solid transparent;
  transition: color 0.5s ease, border-bottom-color 0.5s ease; /** a transition se aplica tanto ao hover padrão quanto ao hover mobile */
  
  @media(hover:hover) and (pointer:fine){
    &:hover{
      color: var(--color-brand-secundaria);
      border-bottom-color: #DC143C;
    }
  }

  @media (max-width: 768px){
    padding: 0;
    min-height: 45px;
  
    display: flex;
    justify-content: center;
    align-items: center;

    &:active{
      color: var(--color-brand-secundaria);
      border-bottom-color: transparent;
    }
  }
`;

export const ItemNav = styled.li`
  /* display: flex;
  align-items: center;
  gap: 0.5rem; */

  @media (max-width: 768px){
    border-bottom: 2px solid var(--color-border-default);
    
    &:last-child{
      border-bottom: 2px solid transparent;
    }
  }
`;