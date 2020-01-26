import styled, { css } from 'styled-components';

export const StyledMain = styled.main(({ theme }) => css`
  color: ${theme.dark};
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 14px;
`);