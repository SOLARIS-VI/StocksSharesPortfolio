import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImage from "./copia_logo_06.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: black;
  color: #fff;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  position: fixed;
  height: 90%;
  border-radius: 20px;

  @media (max-width: 500px) {
    position: static;
    height: auto;
    background-color: transparent;
    flex-direction: column;
    padding: 10;
    margin: auto;
    align-content: center;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin-top: 90px;
  padding-left: 0%;

  @media (max-width: 500px) {
    display: ${({ $isopen }) => ($isopen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    background-color: black;
    padding-top: 20px;
    width: 100%;
    margin-top: auto;
  }
`;

const NavMenuItem = styled.li`
  margin-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #555;
  }

  @media (max-width: 500px) {
    margin-inline-end: 0;
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
    color: grey;
  }

  &:hover:after {
    background-color: grey;
    width: 100%;
  }
`;

const OpenButton = styled.span`
  font-size: 30px;
  color: black;
  cursor: pointer;
  top: 0px;
  left: 20px;
  position: relative;

  &:hover {
    color: darkgrey;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: black;
    height: 1px;
    transition: width 0.5s;
  }

  &:hover:after {
    background-color: black;
    width: 100%;
  }
`;

const CloseButton = styled.span`
  font-size: 36px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 30px;

  &:hover {
    color: darkgrey;
  }
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

  &:hover:after {
    background-color: grey;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: white;
  text-align: ${({ $isopen }) => ($isopen ? "left" : "center")};
  font-size: 30px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 500px) {
    display: ${({ $isopen }) => ($isopen ? "none" : "block")};
    position: absolute;
    color: black;
    top: 12px;
    right: 40px;
    margin: 0;
    padding: 0;
  }
`;

const LogoImage = styled.img`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  position: relative;
  transition: all 0.5s;

  &:hover {
    color: grey;
    transform: scale(2);
  }

  &:hover:after {
    background-color: grey;
    width: 100%;
  }
`;

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      {showButton && (
        <>
          {isopen ? (
            <CloseButton className="closebtn" onClick={closeNav}>
              &times;
            </CloseButton>
          ) : (
            <OpenButton className="openbtn" onClick={openNav}>
              &#9776;
            </OpenButton>
          )}
        </>
      )}
      <Title>COPIA</Title>

      <NavMenu $isopen={isopen}>
        <NavMenuItem>
          <Link to="/">
            <IconContainer>
              <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
            </IconContainer>
          </Link>
        </NavMenuItem>
        <NavMenuItem>
          <Link to="/portfolio">
            <IconContainer>
              <FontAwesomeIcon icon={faWallet} style={{ color: "#ffffff" }} />
            </IconContainer>
          </Link>
        </NavMenuItem>
        <NavMenuItem>
          <Link to="/fullList">
            <IconContainer>
              <FontAwesomeIcon icon={faListUl} style={{ color: "#ffffff" }} />
            </IconContainer>
          </Link>
        </NavMenuItem>
        {/* <NavMenuItem>
          <StyledNavLink to="/fullList">Full List</StyledNavLink>
        </NavMenuItem> */}
        <LogoImage src={logoImage} alt="Copia Logo" />
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
