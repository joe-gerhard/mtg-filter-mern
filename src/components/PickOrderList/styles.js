import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPickOrders = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 200px;
  font-size: 14px;
`);

export const Table = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
`);

export const Row = styled.div(({ theme, header, footer }) => {

  let background = 'white';

  if(header) {
    background = theme.dark;
  } 

  if(footer) {
    background = theme.light;
  }

  return css`
  padding: 5px;
  display: flex;
  align-items: center;
  background: ${background};
  color: ${header ? theme.light : theme.dark};
`});

export const Cell = styled.div(({ theme }) => css`
  margin-left: auto;
  width: 33%;
`);

export const StyledLink = styled(Link)(({ theme }) => css`
  color: ${theme.dark};
  text-decoration: none;
`);

export const ButtonLink = styled(Link)(({ theme }) => css`
  border: 1px solid lightgrey;
  border-radius: 4px;
  background: white;
  color: ${theme.dark};
  text-decoration: none;
  padding: 0 5px;
  margin: 5px;

  &:hover {
    background: ${theme.light};
  }
`);