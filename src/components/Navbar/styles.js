import styled, {css} from 'styled-components';

export const StyledNavbar = styled.nav(({theme}) => css`
  background: ${theme.dark};
  color: ${theme.light};
  height: 40px;
`);