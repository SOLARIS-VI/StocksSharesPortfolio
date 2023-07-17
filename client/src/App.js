// App.js (Updated)
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShareList from "./components/ShareList";
import PortfolioList from "./components/PortfolioList";
import FilterBox from "./components/FilterBox";

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

  const handleFilter = (filterText) => {
    const filteredStocks = stocks.filter((stock) => {
      return stock.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setStocks(filteredStocks);
  };

  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ContentContainer>
          <FilterBox onFilter={handleFilter} />
          <Routes>
            <Route path="/" element={<ShareList stocks={stocks} />} />
            <Route path="/portfolio" element={<PortfolioList />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
