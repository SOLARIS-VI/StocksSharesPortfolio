// ShareList.js
import React from "react";
import ShareItem from "./ShareItem";

const ShareList = ({ shares }) => {
  const shareList = shares.map((share) => (
    <ShareItem key={share.symbol} share={share} />
  ));

  return (
    <div>
      <h3>This is ShareList Page</h3>
      <ul>{shareList}</ul>
    </div>
  );
};

export default ShareList;
