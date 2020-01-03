import React from 'react'
import { StyledLoginLinks } from './styles';
import { GoogleLogin } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const LoginLinks = () => {

  const { user } = useSelector(state => state)
  const dispatch = useDispatch();

  const responseGoogle = (response) => {

    console.log(response);

    axios.post('/user/google', {
      profile: response.profileObj
    }).then((postResponse) => {
      dispatch({type: 'SET_USER', payload: postResponse.data })
    }).catch(err => {
      console.log(err);
    })
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
          />
      }   
    </StyledLoginLinks>
  )
}



export default LoginLinks;
