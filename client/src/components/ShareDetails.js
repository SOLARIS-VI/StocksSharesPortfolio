import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "./api_auth";
const finnhub = require("finnhub");

const ShareDetails = () => {
  const api_auth = finnhub.ApiClient.instance.authentications["api_key"];
  api_auth.apiKey = key;
  const finnhubClient = new finnhub.DefaultApi();

  const [timeFrom, setTimeFrom] = useState(0);
  const [stockDetails, setStockDetails] = useState([]);
  const [symbol, setSymbol] = useState("");

  const { id } = useParams();
  const timeNow = parseInt((new Date.now().getTime() / 1000).toFixed(0))

  

  const handleSelect = (event) => {
    if (event.target.value === "week") {
      console.log(symbol);
      finnhubClient.stockCandles(
        id,
        "D",
        (timeNow - 604800),
        timeNow,
        (error, data, response) => {
          console.log(data);
        }
      );
    }
    if (event.target.value === "month") {
      setTimeFrom(timeNow - 2628000);
    } else if (event.target.value === "3month") {
      setTimeFrom(timeNow - 7884000);
    } else if (event.target.value === "6month") {
      setTimeFrom(timeNow - 15768000);
    } else if (event.target.value === "year") {
      setTimeFrom(timeNow - 31536000);
    }
  };

  return (
    <>
      <p>ShareDetails</p>
      <select onChange={handleSelect}>
        <option value="week">1 Week</option>
        <option value="month">1 Month </option>
        <option value="3month">3 Months</option>
        <option value="6month">6 Months</option>
        <option value="year">1 Year</option>
      </select>
    </>
  );
};

export default ShareDetails;
