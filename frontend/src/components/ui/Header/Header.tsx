import { useState } from 'react';
import { HeaderWrapper, LogoImg, IconLogo, TextoLogo, Nav, NavLink, ButtonMenu, ButtonLine, NavPages, ItemNav } from './Header.styles';

import iconLogo from '../../../assets/logo/icon.jpg';
import textoLogo from '../../../assets/logo/texto.jpg';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderWrapper>
        <LogoImg to="/">
          <IconLogo src={iconLogo} alt="Vampi Excursões"/>
          <TextoLogo src={textoLogo} alt='Vampi Excursões'/>
        </LogoImg>

        <Nav>
          <NavPages $aberto={menuAberto}>
            {/* {menuAberto && (
              <>
                <ItemNav>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8.66667C9.1046 8.66667 10 7.77127 10 6.66667C10 5.56211 9.1046 4.66667 8 4.66667C6.8954 4.66667 6 5.56211 6 6.66667C6 7.77127 6.8954 8.66667 8 8.66667Z" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00008 14.6667C10.6667 12 13.3334 9.61219 13.3334 6.66666C13.3334 3.72114 10.9456 1.33333 8.00008 1.33333C5.05456 1.33333 2.66675 3.72114 2.66675 6.66666C2.66675 9.61219 5.33341 12 8.00008 14.6667Z" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <NavLink to="/">Destinos</NavLink>
                </ItemNav>

                <ItemNav>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_82_12)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4 3.83281L8 9.45439L1.6 3.8248V3.6H14.4V3.83281ZM1.6 12.4V5.95601L8 11.584L14.4 5.9624V12.4H1.6ZM0 14H16V2H0V14Z" fill="#CCCCCC"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_82_12">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <NavLink to="#contato">Contato</NavLink>
                </ItemNav>
              </>
            )}
            {!menuAberto && (
              <> */}
                <ItemNav><NavLink to="/">Destinos</NavLink></ItemNav>
                <ItemNav><NavLink to="#contato">Contato</NavLink></ItemNav>
              {/* </>
            )} */}
          </NavPages>

          <ButtonMenu onClick={() => setMenuAberto(!menuAberto)}>
            <ButtonLine $aberto={menuAberto}></ButtonLine>
            <ButtonLine $aberto={menuAberto}></ButtonLine>
            <ButtonLine $aberto={menuAberto}></ButtonLine>
          </ButtonMenu>

        </Nav>
    </HeaderWrapper>
  );
}

// GPS PIN



// CONTATO PIN

