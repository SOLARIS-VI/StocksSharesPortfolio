import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 8px;
  background-color: #f0f0f0;
  padding: 10px 0px;
  border-radius: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 30px;
`;

const ShareName = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  text-align: center;
  flex-grow: 1;
  transition: all 0.5s;
  font-family: 'Courier New', Courier, monospace;

  &:hover {
    color: grey;
    transform: scale(1.5);
  }
`;

const SymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  background-color: black;
  height: 50px;
  border-radius: 40px;
`;

const SymbolText = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  transition: all 0.5s;
  font-family: Tahoma;
  font-family: 'Courier New', Courier, monospace;


  &:hover {
    color: grey;
    transform: scale(1.5);
  }
`;

const WatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  background-color: darkgrey;
  height: 50px;
  border-radius: 40px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  position: relative;
  transition: all 0.5s;

  &:hover {
    color: black;
    transform: scale(1.5);
  }
`;

const FullListItem = ({ share }) => {
  const { name, ticker } = share;

  return (
    <ListItem>
      <SymbolWrapper>
        <SymbolText to={`/${share.ticker}`}>{ticker}</SymbolText>
      </SymbolWrapper>
      <ShareName to={`/${share.ticker}`}>{name}</ShareName>
      <Link to={`/${share.ticker}`}>
        <WatchWrapper>
          <IconContainer>
            <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff" }} />
          </IconContainer>
        </WatchWrapper>
      </Link>
    </ListItem>
  );
};

export default FullListItem;
