// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/services/ShareService.js
const ShareService = {
  getStocks() {
    return fetch("https://dumbstockapi.com/stock?exchanges=NASDAQ").then((res) => res.json());
  },

  getTopStocks() {
    return fetch("http://localhost:9000/api/share").then((res) => res.json());
  },

  getPortfolioStocks() {
    return fetch("http://localhost:9000/api/portfolio").then((res) => res.json());
  }
};

export default ShareService;
