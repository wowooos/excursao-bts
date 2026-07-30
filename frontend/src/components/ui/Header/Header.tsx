import { useState } from 'react';
import { HeaderWrapper, NomeSite, Nav, NavLink, ButtonMenu, ButtonLine, NavPages, ItemNav } from './Header.styles';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderWrapper>
        <NomeSite to="/">Vampi Excursões</NomeSite>
        <Nav>

          <NavPages>
            <ItemNav><NavLink to="/">Destinos</NavLink></ItemNav>
            <ItemNav><NavLink to="#contato">Contato</NavLink></ItemNav>
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