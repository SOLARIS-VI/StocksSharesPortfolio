import React, { useState, useEffect } from 'react';

const ShareItem = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Fetch share prices from an external API and update the portfolio state
    fetchSharePrices();
  }, []);

  const fetchSharePrices = async () => {
    try {
      // Fetch share prices from the API
      const response = await fetch('https://api.example.com/share-prices');
      const data = await response.json();

      // Update the portfolio state with the fetched share prices
      setPortfolio(data);

      // Calculate the total current value
      const totalValue = calculateTotalValue(data);
      setTotalValue(totalValue);
    } catch (error) {
      console.log('Error fetching share prices:', error);
    }
  };

  const calculateTotalValue = (portfolio) => {
    let totalValue = 0;

    // Iterate over each share in the portfolio and calculate its current value
    portfolio.forEach((share) => {
      const { quantity, price } = share;
      totalValue += quantity * price;
    });

    return totalValue;
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <h2>Total Current Value: {totalValue}</h2>

      {portfolio.length > 0 ? (
        <div>
          <h3>Shares:</h3>
          <ul> 
            {portfolio.map((share) => (
              <li key={share.id}>
                {share.name} - {share.quantity} shares
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading portfolio...</p>
      )}
    </div>
  );
};

export default ShareItem;
