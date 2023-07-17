// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/components/ShareItem.js
import React from "react";

const ShareItem = ({ share }) => {
  const { name, symbol } = share;

  return (
    <li>
      <h3>{name}</h3>
      <p>Symbol: {symbol}</p>
    </li>
  );
};

export default ShareItem;