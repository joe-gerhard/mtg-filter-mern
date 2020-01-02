import React from 'react'
import { StyledLoginLinks } from './styles';


const LoginLinks = () => {

  return (
    <StyledLoginLinks>
      <button onClick={() => {
          window.open("http://localhost:3001/auth/google")
      }}>Log in with Google</button>
    </StyledLoginLinks>
  )
}



export default LoginLinks;
