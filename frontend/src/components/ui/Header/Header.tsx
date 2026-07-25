import { HeaderWrapper, NomeSite, Nav, NavLink, NavItemInativo } from './Header.styles';

export function Header() {
  return (
    <HeaderWrapper>
      <NomeSite to="/">Vampi Excursões</NomeSite>
      <Nav>
        <NavLink to="/">Destinos</NavLink>
        <NavItemInativo>Contato</NavItemInativo>
      </Nav>
    </HeaderWrapper>
  );
}