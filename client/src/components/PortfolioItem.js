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
  transition: all 0.5s;

  &:hover {
    color: grey;
    transform: scale(1.5);
  }
`;

const SymbolText = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  transition: all 0.5s;

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

const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  background-color: darkgrey;
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
        <b>No. of Shares: {numberOfShares}</b>
      </ShareWrapper>
    </ListItem>
  );
};

export default PortfolioItem;
