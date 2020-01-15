import styled, { css } from 'styled-components';

export const StyledButton = styled.button(({ theme, disabled }) => css`
  font-size: 14px;
  background: ${disabled ? theme.light : 'white'};
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 5px;
  padding: 0 5px;
  color: ${disabled ? 'lightgrey' : theme.dark};

  &:hover {
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    background: ${theme.light};
  }
`);