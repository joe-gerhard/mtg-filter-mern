import React, { useEffect } from 'react'
import { StyledUserProfile } from './styles';

const UserProfile = () => {

  useEffect(() => {
    fetch('/user')
  }, [])
  
  return (
    <StyledUserProfile>
      This is the profile page!
    </StyledUserProfile>
  )
}

export default UserProfile;
