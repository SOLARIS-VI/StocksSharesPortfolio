// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/components/FullListItem.js
import React from "react";

const FullListItem = ({ share }) => {
  const { name, ticker } = share;

  return (
    <li>
      <h3>{name}</h3>
      <p>Symbol: {ticker}</p>
    </li>
  );
};

export default FullListItem;