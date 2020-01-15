import styled, { css } from 'styled-components';

export const StyledButton = styled.button(({ theme, disabled }) => css`
  font-size: 14px;
  background: ${disabled ? theme.light : 'white'};
  border-radius: 4px;
  margin: 5px;
  padding: 0 5px;
  color: ${disabled ? 'lightgrey' : theme.dark};
  box-shadow: 0 2px 1px lightgrey;

  &:hover {
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  }

  &:focus {
    background: ${theme.light};
    border: 1px solid transparent;
  }
`);