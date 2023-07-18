import React from 'react'
import { Link } from "react-router-dom";

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

  export default PortfolioItem;