import styled, { css } from 'styled-components';

export const StyledMain = styled.main(({ theme }) => css`
  background: ${theme.light};
  color: ${theme.dark};
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  padding: 20px;
`);