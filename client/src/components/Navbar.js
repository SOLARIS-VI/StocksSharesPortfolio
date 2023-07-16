import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: grey;
  color: #fff;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  position: fixed;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
`;

const NavMenuItem = styled.li`
  margin-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 35px;

  &:hover {
    color: #555;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  transition: all 0.5s;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: #aaa;
    height: 1px;
    transition: width 0.5s;
  }

  &:hover {
    color: black;
  }

  &:hover:after {
    background-color: black;
    width: 100%;
  }
`;

const FilledNavLink = styled(NavLink)`
  transition: all 2s;

  &:after {
    text-align: left;
    content: ".";
    margin: 0;
    opacity: 0;
  }

  &:hover {
    color: #fff;
  }

  &:hover:after {
    background-color: black;
    opacity: 1;
  }
`;


const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavMenuItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavMenuItem>
        <NavMenuItem>
          <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
        </NavMenuItem>
        <NavMenuItem>
          <StyledNavLink to="/">Other</StyledNavLink>
        </NavMenuItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
