const ShareService = {
  getStocks() {
    return fetch("https://dumbstockapi.com/stock").then((res) => res.json());
  },
};

export default ShareService;
