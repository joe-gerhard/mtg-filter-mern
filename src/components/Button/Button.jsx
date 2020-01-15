import React from 'react'
import { StyledButton } from './styles'
import { useHistory } from 'react-router-dom'

const Button = ({ value, onClick, disabled, back }) => {

  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return (
    <StyledButton onClick={back ? handleBack : onClick} disabled={disabled}>
      { value ? value : 'Button'} 
    </StyledButton>
  )
}

export default Button;
