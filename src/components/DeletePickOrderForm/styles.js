import styled, { css } from 'styled-components';

export const StyledDeletePickOrderForm = styled.div(({ theme }) => css`
  background: ${theme.light};
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`);

export const Card = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px 20px;
  border-radius: 8px;
`);