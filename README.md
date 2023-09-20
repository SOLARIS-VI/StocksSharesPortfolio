# Stocks & Shares Portfolio

**Brief:**

A local trader has approached our team with a portfolio of shares. They want to be able to analyze it more effectively. They have a small sample dataset to give you and would like you to build a Minimum Viable Product that uses the data to display their portfolio so that they can make better decisions when choosing stocks and shares.

**MVP**

The user should be able to:

1. View total current value.
2. View individual and total performance trends.
3. Retrieve a list of share prices from an external API and allow the user to add shares to her portfolio.
4. View a chart of the current values in her portfolio.

**Extensions:**

1. Speculation based on trends and further financial modeling using projections.
2. Include add and delete buttons for shares.
3. Add a pie chart to one of the webpages.
4. Add a candle chart to one of the webpages.

**Technologies Used**

- JavaScript
- React
- Node.js
- Google Charts

**How to Run the Project:**

To run the project locally, follow these steps:

Dependencies:

API
In terminal:
- npm i finnhub
- npm i querystring-es3

Then:

1. Open client > node_modules > react-scripts > config > webpack.config.js
2. Command-F and search for "fallback"
3. In "resolve" object, add: fallback:

{
"querystring": require.resolve("querystring-es3"),
},

Node Modules
In terminal:
- npm install

Run Client & Server
Open two terminals within VScode or chosen IDE:

- cd into the project, then cd into client then run npm start
- cd into the project, then cd into server then run npm start 





