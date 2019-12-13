import styled, {css} from 'styled-components';

export const StyledFooter = styled.footer(({ theme }) => css`
  background: ${theme.dark};
  color: ${theme.light};
  height: 40px;
`);