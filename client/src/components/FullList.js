import React from "react";
import FullListItem from "./FullListItem";
import FilterBox from "./FilterBox";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 70px;
  max-height: calc(100vh - 110px); 
  overflow-y: auto;
`;

const FullList = ({ fullStocks, setStocks, stocks, setFullStocks }) => {
  const fullListItems = fullStocks.map((stock) => (
    <FullListItem key={stock.ticker} share={stock} />
  ));

  const handleFilter = (filterText) => {
    const filteredStocks = fullStocks.filter((stock) => {
      return stock.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setFullStocks(filteredStocks);
  };

  return (
    <>
      <div>
        <FilterBox onFilter={handleFilter} />
      </div>
      <ListContainer>
        <ul>{fullListItems}</ul>
      </ListContainer>
    </>
  );
};

export default FullList;