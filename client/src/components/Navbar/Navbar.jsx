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
      <StyledLink to="/publicPickOrders">Public Pick Orders</StyledLink>
      {user.name &&
        <StyledLink to="/profile">My Pick Orders</StyledLink>
      }
      {user.name
        ? <StyledLogoutButton onClick={handleLogout} marginLeft="auto">Logout</StyledLogoutButton>
        : <StyledLink to="/login" marginLeft="auto">Login</StyledLink>
      }

    </StyledNavbar>
  )
}

export default Navbar;
