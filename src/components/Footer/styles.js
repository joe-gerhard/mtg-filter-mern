import styled, {css} from 'styled-components';

export const StyledFooter = styled.footer(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.dark};
  color: ${theme.light};
  height: 44px;
  padding: 0 10vw;
  font-size: 14px;
`);