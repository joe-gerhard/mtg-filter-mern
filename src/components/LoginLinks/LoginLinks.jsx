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

  console.log(process.env.REACT_APP_TEST || 'env variables not loading')

  return (
    <StyledLoginLinks>
      {user.name 
        ? <Redirect to="/profile" /> 
        : <ButtonContainer >
            <GoogleLogin 
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={(err) => {console.log(err)}}
            />
          </ButtonContainer>
      }   
    </StyledLoginLinks>
  )
}

export default LoginLinks;
