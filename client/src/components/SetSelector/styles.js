import styled, { css } from 'styled-components';

export const StyledSelect = styled.select(({ theme, light }) => css`
  background: transparent;
  border: 1px solid ${light ? 'lightgrey' : theme.light};
  border-radius: 5px;
  color: ${light ? theme.dark : theme.light};
  padding: 0;
  margin: 5px .25vw;
  height: 18px;
`);