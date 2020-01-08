import styled, { css } from 'styled-components';

export const StyledLoginLinks = styled.div(({ theme }) => css`
  min-height: calc(100vh - 88px);
  background: ${theme.light};
  display: flex;
  justify-content: center;
  padding: 20px;
`);

export const ButtonContainer = styled.div(({ theme }) => css`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
`);
