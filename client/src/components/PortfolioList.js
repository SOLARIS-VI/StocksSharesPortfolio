import React from "react";

import PortfolioItem from "./PortfolioItem";

const PortfolioList = ({ portfolio }) => {


  // Mapping portfolio items to PortfolioItem components
  const portfolioNodes = portfolio.map((portfolioItem) => (
    <PortfolioItem key={portfolioItem.id} share={portfolioItem} /> // Use 'id' as the key
  ));

  // Rendered JSX
  return (
    <>
      <h1>Portfolio Page</h1>
      <ul>{portfolioNodes}</ul>
    </>
  );
};

export default PortfolioList;