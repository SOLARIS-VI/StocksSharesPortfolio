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
  margin-left: 150px;
  @media (max-width: 500px) {
    margin: 0;
    padding-right: 10px;
    padding-left: 0;
    align-items: flex-start;
  }
`;
function App() {
  const [timeNow, setTimeNow] = useState(0);
  // const [timeFrom, setTimeFrom] = useState(0);
  const [symbol, setSymbol] = useState("APPL");
  const [stocks, setStocks] = useState([]);
  const [fullStocks, setFullStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [stock, setStock] = useState("");

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

  useEffect(() => {
    ShareService.getPortfolioStocks()
      .then((data) => {
        console.log(data);
        setPortfolio(data);
      })
      .catch((error) => {
        console.error("Error fetching portfolio:", error);
      });
  }, []);

  const handlePortfolioSubmit = newItem => {
    fetch('http://localhost:9000/api/portfolio', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => ShareService.getPortfolioStocks())
  }

  const handleDelete = (removedItem) => {
    ShareService.deletePortfolioStock(removedItem);
    const updatedPortfolio = portfolio.filter((item) => {
      return item.symbol != removedItem.symbol 
    });
    setPortfolio(updatedPortfolio);
  }

  // const handleGetCandles = (symbol, timeFrom ) => {
  //   const newCandles = api_auth.getStockCandles(symbol, "D", timeFrom, timeNow);
  //   setCandles(newCandles);
  //   console.log(newCandles);
  // };

  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ContentContainer>
          <Routes>
            <Route
              path="/:id"
              element={
                <ShareDetails
                  timeNow={timeNow} handlePortfolioSubmit={handlePortfolioSubmit}
                />
              }
            />
            <Route path="/" element={<ShareList stocks={stocks} />} />
            <Route path="/portfolio" element={<PortfolioList portfolio={portfolio} handleDelete={handleDelete} />} />
            <Route
              path="/fullList"
              element={
                <FullList
                  fullStocks={fullStocks}
                  stocks={stocks}
                  setFullStocks={setFullStocks}
                />
              }
            />

          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}
export default App;
