import React from "react";
import ShareItem from "./ShareItem";

const ShareList = ({ shares, ExampleTickers }) => {

  const shareList = ExampleTickers.map((stock) => {
    return <ShareItem key={stock.symbol} share={stock} />;
  });

  return (
    <div>
      <h3>This is ShareList Page</h3>
      <ul>{shareList}</ul>
      {/* {shares.map((share, index) => (
        <ShareItem key={index} share={share} />
      ))} */}
    </div>
  );
};

export default ShareList;
