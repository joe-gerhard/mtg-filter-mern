import styled, { css } from 'styled-components';

export const StyledDeletePickOrderForm = styled.div(({ theme }) => css`
  background: ${theme.light};
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`);