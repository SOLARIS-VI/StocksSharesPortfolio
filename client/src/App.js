import React from "react";
import api_auth from "./components/api_auth";
import "./App.css";
import ShareList from "./components/ShareList";


function App() {


  // const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  // api_key.apiKey = api_auth 
  // const finnhubClient = new finnhub.DefaultApi();
  
  // finnhubClient.stockSymbols("US", (error, data, response) => {
  //   response.status(200)
  //   .then(response => response.json());
  //   console.log(data);
  // });

  console.log(api_auth)

  return (

    
    <>
      <h1>This is App</h1>
      <ShareList />
    </>
  );
}

export default App;
