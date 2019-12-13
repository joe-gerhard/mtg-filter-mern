import React from 'react'
import { StyledNavbar, StyledLink } from './styles';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/filter">Filter</StyledLink>
    </StyledNavbar>
  )
}

export default Navbar;
