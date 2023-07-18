import React, { useState } from "react";
import FullListItem from "./FullListItem";
import FilterBox from "./FilterBox";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 10px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;

  @media (max-width: 500px) {
    max-height: calc(100vh - 140px);
    margin-top: 0px;
    padding-right: 30px;
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: #000;
  border-radius: 40px;
  margin-left: 40px;
  margin-top: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 30px;

  @media (max-width: 500px) {
    max-height: calc(100vh - 140px);
    margin-top: 50px;
    margin-right: 30px;
  }
`;

const FullList = ({ fullStocks, setStocks, stocks, setFullStocks }) => {
  const [filteredStocks, setFilteredStocks] = useState(stocks);

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
      <FilterBox onFilter={handleFilter} />
      <Label></Label>
      <ListContainer>
        <ul>{fullListItems}</ul>
      </ListContainer>
    </>
  );
};

export default FullList;
