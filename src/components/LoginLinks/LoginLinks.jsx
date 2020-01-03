import React from 'react'
import { StyledLoginLinks } from './styles';
import { GoogleLogin } from 'react-google-login';


const LoginLinks = () => {

  const responseGoogle = (response) => {
     console.log(response);
  }

  return (
    <StyledLoginLinks>
      <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </StyledLoginLinks>
  )
}



export default LoginLinks;
