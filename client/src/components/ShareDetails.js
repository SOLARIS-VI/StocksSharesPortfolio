import React from "react";

const ShareDetails = ({ timeNow, setTimeFrom, handleGetCandles }) => {
    // const timeYear = timeNow - 31536000;
    // const timeSixMonth = timeNow - 15768000;
    // const timeThreeMonth = timeNow - 7884000;
    // const timeMonth = timeNow - 2628000;
    // const timeWeek = timeNow - 604800;
    // const timeDay = timeNow - 86400;

    // setTimeFrom(timeWeek);

  const handleSelect = event => 
    // if (from === "week") {
      handleGetCandles(event.target.value);
    // }
  ;

  return (
    <>
      <p>ShareDetails</p>
      <select>
            <option onSelect={handleSelect} value="week">1 week</option>

      </select>
    </>
  );
};

export default ShareDetails;
