const ShareService = {
  getStocks() {
    return fetch("https://dumbstockapi.com/stock?exchanges=NASDAQ").then((res) => res.json());
  },

  getTopStocks() {
    return fetch("http://localhost:9000/api/share").then((res) => res.json());
  },

  getPortfolioStocks() {
    return fetch("http://localhost:9000/api/portfolio").then((res) => res.json());
  },

  deletePortfolioStock(stock) {
    return fetch(`http://localhost:9000/api/portfolio/${stock.symbol}`, {
      method: "DELETE",
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json)
  },
  
  updatePortfolioStock(stock) {
    return fetch(`http://localhost:9000/api/portfolio/${stock.symbol}` , {
      method: 'PUT',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
     .then(res => res.json)
  }

};

export default ShareService;
