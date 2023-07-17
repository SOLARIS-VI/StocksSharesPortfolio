// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/components/FullListItem.js
import React from "react";
import { Link } from "react-router-dom";


const FullListItem = ({ share }) => {
  const { name, symbol } = share;

  return (
    <li>
      <Link to ={`/${share.symbol}`}>{name}</Link>
      <p>Symbol: {symbol}</p>
    </li>
  );
};

export default FullListItem;