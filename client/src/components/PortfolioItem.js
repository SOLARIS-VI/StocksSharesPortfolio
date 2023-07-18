import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


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
  font-size: 12px;
  font-weight: bold;
  position: relative;
  text-align: center;
  flex-grow: 1;
`;

const SymbolText = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  position: relative;

  &:hover {
    color: grey;
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
    background-color: grey;
    width: 100%;
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

const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  background-color: grey;
  height: 50px;
  font-size: 12px;
  border-radius: 40px;
`;

const PortfolioItem = ({ share }) => {
  const { name, symbol, numberOfShares } = share; 
  return (
    <ListItem>
      <SymbolWrapper>
        <SymbolText to={`/${symbol}`}>{symbol}</SymbolText>
      </SymbolWrapper>
      <ShareName to={`/${symbol}`}>{name}</ShareName>
      <ShareWrapper>
        <p>No. of Shares: {numberOfShares}</p>
      </ShareWrapper>
    </ListItem>
  );
};

export default PortfolioItem;

