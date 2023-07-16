import React, { useState } from "react";
import api_auth from "./components/api_auth";
import "./App.css";
// import ShareList from "./components/ShareList";


function App() {

  const [symbols, setSymbols] = useState([])



  console.log(api_auth)

  return (

    
    <>
      <h1>This is App</h1>
      {/* <ShareList /> */}
    </>
  );
}

export default App;
