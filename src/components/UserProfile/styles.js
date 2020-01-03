import styled, { css } from 'styled-components';

export const StyledUserProfile = styled.div(({ theme }) => css`
  background: ${theme.light};
  height: calc(100vh - 88px);
`);