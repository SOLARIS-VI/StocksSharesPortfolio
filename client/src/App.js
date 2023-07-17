// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/App.js
import React, { useState, useEffect } from "react";
import api_auth from "./components/api_auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShareList from "./components/ShareList";
import PortfolioList from "./components/PortfolioList";
import FullList from "./components/FullList";
import ShareService from "./services/ShareService";
import ShareDetails from "./components/ShareDetails";
import FilterBox from "./components/FilterBox";

const finnhub = require("finnhub");

const finnhubClient = new finnhub.DefaultApi();



const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin-left: 160px;

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

function App() {
  const [timeNow, setTimeNow] = useState(0);
  const [timeFrom, setTimeFrom] = useState(0);
  const [symbol, setSymbol] = useState("APPL");
  const [stocks, setStocks] = useState([]);
  const [fullStocks, setFullStocks] = useState([]);
  const [candles, setCandles] = useState([]);

  useEffect(() => {


    fetch("http://localhost:9000/api/shares")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStocks(data);
      })
      .catch((error) => {
        console.error("Error fetching stocks:", error);
      });
  }, []);


  useEffect(() => {
    ShareService.getStocks()
      .then((data) => {
        console.log(data);
        setFullStocks(data);
      })
      .catch((error) => {
        console.error("Error fetching stocks:", error);
      });
  }, []);

  const handleGetCandles = () => {
    const newCandles = api_auth.getStockCandles(symbol, "D", timeFrom, timeNow);
    setCandles(newCandles);
    console.log(candles)
  }


  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ContentContainer>
          <Routes>

            <Route
              path="/sharedetails"
              element={
                <ShareDetails setTimeFrom={setTimeFrom} timeNow={timeNow} handleGetCandles={handleGetCandles} />
              }
            />

            <Route path="/" element={<ShareList stocks={stocks} />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/fullList" element={<FullList fullStocks={fullStocks} stocks={stocks} setStocks={setStocks} />} />

          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;