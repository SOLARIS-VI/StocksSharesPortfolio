// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/components/ShareItem.js
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

const SymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px; 
  background-color: black;
  height: 50px;
  border-radius: 40px;
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

const ShareItem = ({ share }) => {
  const { name, symbol } = share;

  return (
    <ListItem>
      <SymbolWrapper>
      <SymbolText to ={`/${share.symbol}`}>{symbol}</SymbolText>
      </SymbolWrapper>
      <ShareName to ={`/${share.symbol}`}>{name}</ShareName>
    </ListItem>
  );
};

export default ShareItem;
