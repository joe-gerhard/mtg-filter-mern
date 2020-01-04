import styled, { css } from 'styled-components';

export const StyledPickOrder = styled.div(({ theme }) => css`
  background: ${theme.light};
  min-height: calc(100vh - 88px);
`);