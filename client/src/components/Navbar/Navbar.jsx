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
      <StyledLink to="/filter">Home</StyledLink>
      <StyledLink to="/publicPickOrders">Pick Orders</StyledLink>
      {user.name &&
        <StyledLink to="/profile">My Picks</StyledLink>
      }
      {user.name
        ? <StyledLogoutButton onClick={handleLogout} marginleft="auto">Logout</StyledLogoutButton>
        : <StyledLink to="/login" marginleft="auto">Login</StyledLink>
      }

    </StyledNavbar>
  )
}

export default Navbar;
