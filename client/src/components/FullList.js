import React from "react";
import FullListItem from "./FullListItem";
import FilterBox from "./FilterBox";


const FullList = ({ fullStocks, setStocks, stocks, setFullStocks }) => {
  
  const fullListItems = fullStocks.map((stock) => (
    <FullListItem key={stock.symbol} share={stock} />
  ));

  const handleFilter = (filterText) => {
    const filteredStocks = stocks.filter((stock) => {
      return stock.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setFullStocks(filteredStocks);
  };

  return (
    <div>
      <FilterBox onFilter={handleFilter} />
      <h3>This is FullList Page</h3>
      <ul>{fullListItems}</ul>
    </div>
  );
};

export default FullList;
