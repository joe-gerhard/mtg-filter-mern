import styled, { css } from 'styled-components';

export const StyledPickOrder = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background: ${theme.light};
  min-height: calc(100vh - 88px);
`);

export const StyledInput = styled.input(({ theme }) => css`
  border-radius: 4px;
  width: 50px;
  margin: 0 7px 0 3px;
  padding-left: 3px;
  border: 1px solid lightgrey;
`);

export const StyledTable = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 5px; 
  background: white;
  margin: 10px 0;
`);

export const StyledRow = styled.div(({ theme, ...props }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props.even ? 'white' : '#f7f7f7'};
  height: 27px;
  border-radius: 5px;
  padding: 0 10px;

  &:hover {
    background: #fffead;
  }
`);

export const StyledCell = styled.div(({ theme, ...props }) => css`
  &:nth-child(2) {
    margin-left: auto;
  }
`);