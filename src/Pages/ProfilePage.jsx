import React from 'react'
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage = () => {

  const { user } = useSelector(state => state);

  return (
    <>
      <UserProfile />
    </>
  )
}

export default ProfilePage;
