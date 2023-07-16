import React from "react";
import ShareItem from "./ShareItem";

const ShareList = ({ shares }) => {
  return (
    <div>
      <h3>This is ShareList Page</h3>
      <p>This page will view the share items</p>
      {/* {shares.map((share, index) => (
        <ShareItem key={index} share={share} />
      ))} */}
    </div>
  );
};

export default ShareList;
