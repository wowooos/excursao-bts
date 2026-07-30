import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

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
  padding: 1.5rem;
  display: flex;
  
  position: sticky;
  top: 0;
  
  border-bottom: 2px solid var(--color-brand-primaria);

  align-items: center;
  justify-content: space-between;
`;

export const NomeSite = styled(Link)`
  font-family: var(--font-display);
  font-size: var(--font-size-heading);
  color: var(--color-text-primario);
`;

/* nav */
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

  &:hover{
    background-color: var(--color-brand-primaria);
    span{
      background-color: #FFFFFF;
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
  gap: 1rem;

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
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);

  color: var(--color-text-secundario);

  @media (max-width: 768px){
    min-height: 45px;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ItemNav = styled.li`
  @media (max-width: 768px){
    border-bottom: 1px solid var(--color-border-default);

    &:last-child{
      border-bottom: none;
    }
  }
`;