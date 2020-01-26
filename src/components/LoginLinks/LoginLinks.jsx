import React from 'react'
import { StyledLoginLinks, ButtonContainer } from './styles';
import { GoogleLogin } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const LoginLinks = () => {

  const { user } = useSelector(state => state)
  const dispatch = useDispatch();

  const responseGoogle = (response) => {

    axios.post('/user/google', {
      profile: response.profileObj
    })
    .then((axiosResponse) => {
      
      dispatch({type: 'SET_USER', payload: axiosResponse.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <StyledLoginLinks>
      {user.name 
        ? <Redirect to="/profile" /> 
        : <ButtonContainer >
            <GoogleLogin 
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || 'test'}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={() => {console.log('Google Failed')}}
            />
          </ButtonContainer>
      }   
    </StyledLoginLinks>
  )
}

export default LoginLinks;
