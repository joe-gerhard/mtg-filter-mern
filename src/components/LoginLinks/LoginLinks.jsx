import React from 'react'
import { StyledLoginLinks } from './styles';
import { GoogleLogin } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


const LoginLinks = ({ history }) => {

  const { user } = useSelector(state => state)
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    if (response.profileObj) {
      dispatch({ type: 'SET_USER', payload: response.profileObj})
      history.push('/profile');
    } else {
      console.log('Error logging in with Google');
    }
  }

  return (
    <StyledLoginLinks>
      {user.name 
        ? <Redirect to="/profile" /> 
        : <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
      }   
    </StyledLoginLinks>
  )
}



export default LoginLinks;
