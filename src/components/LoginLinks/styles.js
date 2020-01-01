import styled, { css } from 'styled-components';

export const StyledLoginLinks = styled.div(({ theme }) => css`
  min-height: calc(100vh - 88px);
  background: ${theme.light};
`);
