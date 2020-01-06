import styled, { css } from 'styled-components';

export const StyledCardDisplay = styled.div(({ theme }) => css`
  min-height: calc(100vh - 88px);
  background: ${theme.light};
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;

  h1 {
    text-align: center;
    background: ${theme.dark + '22'};
    border-radius: 8px;
  }
`);

export const Card = styled.img`
  filter: drop-shadow(.3vw .3vw .2vw rgba(17, 25, 58, 0.8));
  margin: .5vw;
  height: 20.952381vw;
  width: 15vw;
  object-fit: fill;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardDetails = styled.div(({ theme }) => css`
  display: flex;
  font-size: 10px;
  justify-content: space-around;
  background: ${theme.dark + '22'};
  border-radius: 8px;
  width: 12vw;
`);

export const StyledTier = styled.div(({ theme, color }) => css`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  background: ${color + '22'};
  border-radius: 8px;
`);