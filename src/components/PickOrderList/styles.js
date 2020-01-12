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

export const Row = styled.div(({ theme, header, footer }) => css`
  padding: 5px;
  display: flex;
  align-items: center;
  background: ${header ? theme.dark : 'white'};
  color: ${header ? theme.light : theme.dark};
  
  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`);

export const Cell = styled.div(({ theme }) => css`
  margin-left: auto;
  width: 33%;
`);

export const StyledLink = styled(Link)(({ theme }) => css`
  color: ${theme.dark};
  text-decoration: none;

  &:hover {
    color: grey;
    cursor: pointer;
  }
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