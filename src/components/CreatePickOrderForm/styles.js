import styled, { css } from 'styled-components';

export const StyledCreatePickOrderForm = styled.div(({ theme }) => css`
  background: ${theme.light};
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);

export const Card = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 8px;
`);

export const SubmitButton = styled.button(({ theme, disabled }) => css`
  font-size: 14px;
  background: ${disabled ? theme.light : 'white'};
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 10px;
  padding: 0 5px;
  color: ${disabled ? 'lightgrey' : theme.dark};

  &:hover {
    cursor: pointer;
    background: ${theme.light};
  }
`);

export const Row = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0;

  span {
    width: 50px;
    text-align: right;
  }
`);

export const StyledInput = styled.input(({ theme }) => css`
  border: 1px solid lightgrey;
  border-radius: 5px;
  color: ${theme.dark};
  padding: 2px 5px;
  margin: 5px .25vw;
  transition: opacity .3s;
  font-size: 14px;
`);