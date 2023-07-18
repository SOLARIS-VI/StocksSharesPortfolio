import React from 'react'
import { Link } from "react-router-dom";

  // PortfolioItem component
  const PortfolioItem = ({ share }) => {
    const { name, symbol, numberOfShares } = share; 
    return (
      <li>
        <Link to={`/${symbol}`}>{name}</Link>
        <p>Symbol: {symbol}</p>
        <p>Number of Shares: {parseInt(numberOfShares)}</p> {/* Displaying 'shares' */}
      </li>
    );
  };

  export default PortfolioItem;