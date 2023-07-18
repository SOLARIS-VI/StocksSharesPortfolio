use shares
db.dropDatabase();

db.shares.insertMany([
    {
        "symbol": "AAPL",
        "name": "Apple Inc.",

      },
      {
        "symbol": "MSFT",
        "name": "Microsoft Corporation"
      }, 
      {
        "symbol": "GOOGL",
        "name": "Alphabet Inc."
      }, 
      {
        "symbol": "GOOG",
        "name": "Alphabet Inc."
      }, 
      {
        "symbol": "NVDA",
        "name": "NVIDIA Corp"
      }, 
      {
        "symbol": "TSLA",
        "name": "Tesla Inc."
      }, 
      {
        "symbol": "AMZN",
        "name": "Amazon.com Inc."
      }, 
      {
        "symbol": "META",
        "name": "Meta Platforms Inc."
      }, 
      {
        "symbol": "AVCO",
        "name": "Broadcom Inc."
      }, 
      {
        "symbol": "PEP",
        "name": "PepsiCo Inc."
      }, 
      {
        "symbol": "COST",
        "name": "Costco Wholesale Corp"
      }, 
      {
        "symbol": "ADBE",
        "name": "Adobe Inc."
      }, 
      {
        "symbol": "CSCO",
        "name": "Cisco Systems Inc."
      }, 
      {
        "symbol": "NFLX",
        "name": "Netflix Inc."
      }, 
      {
        "symbol": "AMD",
        "name": "Advance Micro Devices Inc."
      }, 
      {
        "symbol": "CMCSA",
        "name": "Comcast Corp."
      }, 
      {
        "symbol": "TMUS",
        "name": "T-Mobile US Inc."
      }, 
      {
        "symbol": "TXN",
        "name": "Texas Instruments Inc."
      }, 
      {
        "symbol": "INTC",
        "name": "Intel Corp."
      }, 
      {
        "symbol": "HON",
        "name": "Honeywell International Inc."
      }, 
    ]);

use portfolio
db.dropDatabase();

db.portfolio.insertMany([
    {
        "symbol": "PEP",
        "name": "PepsiCo Inc.",
        "numberOfShares": "20"
      }, 
      {
        "symbol": "COST",
        "name": "Costco Wholesale Corp",
        "numberOfShares": "10"
      }, 
      {
        "symbol": "ADBE",
        "name": "Adobe Inc.",
        "numberOfShares": "20"
      }
])