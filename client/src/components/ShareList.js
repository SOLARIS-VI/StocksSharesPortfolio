import React from "react";
import ShareItem from "./ShareItem";

const ShareList = ({ shares }) => {
  return (
    <div>
      <h3>This is ShareList</h3>
      {shares.map((share, index) => (
        <ShareItem key={index} share={share} />
      ))}
    </div>
  );
};

export default ShareList;
