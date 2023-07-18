import React, { useEffect, useState } from "react";
import ShareItem from "./ShareItem";

const PortfolioList = ({ portfolio }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [performanceTrend, setPerformanceTrend] = useState(0);
  const [sharePrices, setSharePrices] = useState([]);

  // Calculate total current value
  useEffect(() => {
    const calculateTotalValue = () => {
      let total = 0;
      portfolio.forEach((portfolioItem) => {
        const sharePrice = sharePrices.find(
          (item) => item.symbol === portfolioItem.symbol
        );
        if (sharePrice) {
          total += sharePrice.price * portfolioItem.quantity;
        }
      });
      setTotalValue(total);
    };
    calculateTotalValue();
  }, [portfolio, sharePrices]);

  // Calculate overall performance trend
  useEffect(() => {
    const calculatePerformanceTrend = () => {
      // Logic to calculate performance trend based on historical data
      // We can use existing data or fetch historical data from the API
      // and calculate the trend based on the share prices and timestamps
      const trend = 0; // Placeholder value, replace with actual calculation
      setPerformanceTrend(trend);
    };
    calculatePerformanceTrend();
  }, []);

  // Fetch share prices from external API
  useEffect(() => {
    const fetchSharePrices = async () => {
      try {
        const response = await fetch("API_ENDPOINT_URL"); // Replace with the actual API endpoint URL
        const data = await response.json();
        setSharePrices(data);
      } catch (error) {
        console.log("Error fetching share prices:", error);
      }
    };
    fetchSharePrices();
  }, []);

  const portfolioNodes = portfolio.map((portfolioItem) => (
    <ShareItem key={portfolioItem.symbol} share={portfolioItem} />
  ));

  return (
    <>
      <h1>Portfolio Page</h1>
      <p>Total Current Value: {totalValue}</p>
      <p>Performance Trend: {performanceTrend}</p>
      <ul>{portfolioNodes}</ul>
    </>
  );
};

export default PortfolioList;
