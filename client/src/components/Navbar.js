import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: grey;
  color: #fff;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  position: fixed;

  @media (max-width: 500px) {
    position: static;
    height: auto;
    background-color: transparent;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;

  @media (max-width: 500px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    background-color: grey;
    padding: 10px;
  }
`;

const NavMenuItem = styled.li`
  margin-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 35px;

  &:hover {
    color: #555;
  }

  @media (max-width: 500px) {
    margin-right: 0;
    margin-bottom: 10px;
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
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Nav>
      {showButton && (
        <button onClick={toggleMenu}>
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      )}
      <NavMenu isOpen={isOpen}>
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

