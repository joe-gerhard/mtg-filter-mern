import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav(({ theme }) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${theme.dark};
  color: ${theme.light};
  height: 44px;
  padding: 0 10vw;
  font-size: 14px;
`);

export const StyledLink = styled(Link)(({ theme, marginLeft }) => css`
  color: ${theme.light};
  text-decoration: none;
  margin: 0 20px;
  margin-left: ${marginLeft ? marginLeft : '20px'};
`);

export const StyledLogoutButton = styled.button(({ theme, marginLeft }) => css`
  border: none;
  background: none;
  color: ${theme.light};
  margin: 0 20px;
  margin-left: ${marginLeft ? marginLeft : '20px'};
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`);