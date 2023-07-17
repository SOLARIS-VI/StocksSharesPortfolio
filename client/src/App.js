import React, { useState, useEffect } from "react";
import api_auth from "./components/api_auth";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShareList from "./components/ShareList";
import PortfolioList from "./components/PortfolioList";
import ExampleTickers from "./components/ExampleTickers";
import ShareService from "./services/ShareService";
import ShareDetails from "./components/ShareDetails";
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
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    ShareService.getStocks()
      .then((stocks) => setStocks(stocks));
      setTimeNow(Math.floor(Date.now() / 1000));
  }, [])

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
              path="/"
              element={<ShareList ExampleTickers={ExampleTickers} />}
            />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route
              path="/sharedetails"
              element={
                <ShareDetails setTimeFrom={setTimeFrom} timeNow={timeNow} handleGetCandles={handleGetCandles} />
              }
            />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
