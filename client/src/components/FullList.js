import React, { useState } from "react";
import FullListItem from "./FullListItem";
import FilterBox from "./FilterBox";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 60px;
  max-height: calc(100vh - 160px); 
  overflow-y: auto;

  @media (max-width: 500px) {
  max-height: calc(100vh - 190px); 
  margin-top: 110px;
  padding-right: 30px;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 82%;
  margin-top: 20px;
  background-color: black;
  height: 30px;
  border-radius: 20px;
  color: white;
  text-align: center;
  left: 200px; /* Set the left property to maintain fixed padding on the left */

  @media (max-width: 500px) {
    display: flex;
    justify-content: start;
    position: fixed;
    margin-top: 70px;
    z-index: 1;
    width: 83%;
    left: 39px; /* Set the left property for smaller screens as well */
  }
`;


const FullList = ({ fullStocks, setStocks, stocks, setFullStocks }) => {

  const [filteredStocks, setFilteredStocks] = useState(stocks)

  const fullListItems = filteredStocks.map((stock) => (
    <FullListItem key={stock.ticker} share={stock} />
  ));

  const handleFilter = (filterText) => {
    const filteredTemp = fullStocks.filter((stock) => {
      return stock.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setFilteredStocks(filteredTemp);
  };

  return (
    <>
    <Label></Label>
        <FilterBox onFilter={handleFilter} />
      <ListContainer>
        <ul>{fullListItems}</ul>
      </ListContainer>
    </>
  );
};

export default FullList;