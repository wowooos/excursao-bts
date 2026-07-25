import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: var(--color-bg);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NomeSite = styled(Link)`
  font-family: var(--font-display);
  font-size: var(--font-size-heading);
  color: var(--color-ticket);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  color: var(--color-ticket);
`;

export const NavItemInativo = styled.span`
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  color: var(--color-text-muted);
`;