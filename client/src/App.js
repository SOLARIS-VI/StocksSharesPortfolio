import React from "react";
import api_auth from "./components/api_auth";
import "./App.css";
import ShareList from "./components/ShareList";


function App() {

  const finnhub = require("finnhub");




  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "cioj89hr01qhd71btpi0cioj89hr01qhd71btpig";
  const finnhubClient = new finnhub.DefaultApi();
  
  finnhubClient.stockSymbols("US", (error, data, response) => {
    response.status(200);
    console.log(data);
  });

  return (
    <>
      <h1>This is App</h1>
      <ShareList />
    </>
  );
}

export default App;
