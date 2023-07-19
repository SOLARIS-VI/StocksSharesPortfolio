import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
  font-family: "Courier New", Courier, monospace;

  &:hover {
    color: grey;
    transform: scale(1.5);
  }
`;

const SymbolText = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  transition: all 0.5s;
  font-family: "Courier New", Courier, monospace;

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
  justify-content: space-between;
  width: 160px;
  background-color: darkgrey;
  height: 50px;
  font-size: 12px;
  border-radius: 40px;
`;

const DeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 0px 40px 40px 0px; 
  padding: 18px 10px;
  height: 50px;
  font-size: 12px;
  cursor: pointer;
`;


const Icon = styled.div`
transition: all 0.5s;
margin-right: 2px;

&:hover {
  color: grey;
  transform: scale(2);
}
`

const Text = styled.p`
margin-left: 15px;
font-weight: bold;
`

const PortfolioItem = ({ share, handleDelete }) => {
  const handleClick = () => {
    handleDelete(share);
    console.log(share);
  };

  return (
    <ListItem>
      <SymbolWrapper>
        <SymbolText to={`/${share.symbol}`}>{share.symbol}</SymbolText>
      </SymbolWrapper>
      <ShareName to={`/${share.symbol}`}>{share.name}</ShareName>
      <ShareWrapper>
        <Text>No. of Shares: {share.numberOfShares}</Text>
      <DeleteButton onClick={handleClick}>
        <Icon>
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }} />
        </Icon>
      </DeleteButton>
      </ShareWrapper>
    </ListItem>
  );
};

export default PortfolioItem;
