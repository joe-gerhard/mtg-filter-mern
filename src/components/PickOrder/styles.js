import styled, { css } from 'styled-components';

export const StyledPickOrder = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background: ${theme.light};
  min-height: calc(100vh - 88px);
`);

export const StyledInput = styled.input(({ theme }) => css`
  border-radius: 4px;
  width: 50px;
  margin: 0 7px 0 3px;
  padding-left: 3px;
  border: 1px solid lightgrey;
  font-size: 14px;
`);

export const StyledTable = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 5px; 
  background: white;
  margin: 10px 0;
`);

export const StyledRow = styled.div(({ theme, ...props }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props.even ? 'white' : '#f7f7f7'};
  height: 27px;
  border-radius: 5px;
  padding: 0 10px;

  &:hover {
    background: #fffead;
  }
`);

export const StyledCell = styled.div(({ theme, ...props }) => css`
  &:nth-child(2) {
    margin-left: auto;
  }
  cursor: default;
`);

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameInput = styled.input`
  font-size: 24px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  border: 1px solid lightgrey;
`;

export const ApplyButton = styled.button(({ theme }) => css`
  font-size: 14px;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 0 5px;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    background: ${theme.light};
  }
`);

export const SaveButton = styled.input(({ theme }) => css`
  font-size: 14px;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 0 5px;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    background: ${theme.light};
  }
`);

export const StyledImage = styled.img`
  position: fixed;
  left: 5vw;
  top: 15vh;
  width: 25vw;
`;