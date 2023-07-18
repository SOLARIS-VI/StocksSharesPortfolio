import React from "react";
import { Link } from "react-router-dom";

const PortfolioList = ({ portfolio }) => {

  // PortfolioItem component
  const PortfolioItem = ({ share }) => {
    const { name, symbol, shares } = share; 
    return (
      <li>
        <Link to={`/${symbol}`}>{name}</Link>
        <p>Symbol: {symbol}</p>
        <p>Number of Shares: {shares}</p> {/* Displaying 'shares' */}
      </li>
    );
  };

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