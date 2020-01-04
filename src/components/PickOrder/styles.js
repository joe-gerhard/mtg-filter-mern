import styled, { css } from 'styled-components';

export const StyledPickOrder = styled.div(({ theme }) => css`
  background: ${theme.light};
  height: calc(100vh - 88px);
`);