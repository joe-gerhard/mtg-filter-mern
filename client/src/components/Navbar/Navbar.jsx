import React from 'react'
import { StyledNavbar, StyledLink, StyledLogoutButton } from './styles';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'SET_USER', payload: {} })
  }

  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/filter">Filter</StyledLink>
      <StyledLink to="/publicPickOrders">Public Pick Orders</StyledLink>
      {user.name &&
        <StyledLink to="/profile">Profile</StyledLink>
      }
      {user.name
        ? <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
        : <StyledLink to="/login">Login</StyledLink>
      }

    </StyledNavbar>
  )
}

export default Navbar;
