import styled, { css } from 'styled-components';

export const StyledCardDisplay = styled.div(({ theme }) => css`
  min-height: calc(100vh - 88px);
  background: ${theme.light};
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`);

export const Card = styled.img`
  filter: drop-shadow(.3vw .3vw .2vw rgba(17, 25, 58, 0.8));
  margin: .5vw;
  height: 20.952381vw;
  width: 15vw;
  object-fit: fill;
`;