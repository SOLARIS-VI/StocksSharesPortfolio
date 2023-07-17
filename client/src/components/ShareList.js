// ShareList.js (Updated)
import React from "react";
import ShareItem from "./ShareItem";

const ShareList = ({ stocks }) => {
  const shareList = stocks.map((stock) => (
    <ShareItem key={stock.symbol} share={stock} />
  ));

  return (
    <div>
      <h3>This is ShareList Page</h3>
      <ul>{shareList}</ul>
    </div>
  );
};

export default ShareList;
