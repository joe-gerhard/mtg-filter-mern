import React from 'react'
import { StyledButton } from './styles'
import { useHistory } from 'react-router-dom'

const Button = ({ value, onClick, disabled, back, to, submit }) => {

  const history = useHistory();
  const handleClick = setHandleClick(history, { back, to })

  return (
    <>
    { submit 
      ?
      <StyledButton as="input" type="submit" value={value ? value : 'Submit'} />
      :
      <StyledButton onClick={onClick ? onClick : handleClick} disabled={disabled}>
        { value ? value : 'Button'} 
      </StyledButton>
    }
    </>
  )
}

function setHandleClick(history, props) {
  if(props.back) return () => {
    history.goBack()
  };
  if(props.to) return () => {
    history.push(props.to)
  };
  return null;
}

export default Button;
