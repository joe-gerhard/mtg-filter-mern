import styled, { css } from 'styled-components';

export const StyledDeletePickOrderForm = styled.div(({ theme }) => css`
  background: ${theme.light};
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`);

export const ConfirmButton = styled.button(({ theme }) => css`
  font-size: 14px;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 10px;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    background: ${theme.light};
  }
`);