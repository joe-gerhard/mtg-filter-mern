import styled, { css } from 'styled-components';

export const StyledSelect = styled.select(({ theme }) => css`
  background: transparent;
  border: 1px solid ${theme.light};
  border-radius: 5px;
  color: ${theme.light};
  padding: 0;
  margin: 5px .25vw;
  height: 18px;
`);