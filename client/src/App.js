// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShareList from "./components/ShareList";
import PortfolioList from "./components/PortfolioList";
import FullList from "./components/FullList";
import ShareService from "./services/ShareService";

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
  const [stocks, setStocks] = useState([]);
  const [fullStocks, setFullStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/shares") // Update the fetch URL here
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


  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ContentContainer>
          <Routes>
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