import React, { useState } from "react";
import api_auth from "./components/api_auth";
<<<<<<< HEAD
import "./App.css";
// import ShareList from "./components/ShareList";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShareList from "./components/ShareList";
import PortfolioList from "./components/PortfolioList";
>>>>>>> 69882e529b5e2709665ea760eeafce3d2d101fed

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin-left: 160px;
`;

const Title = styled.h1`
  color: #000;
`;

function App() {
<<<<<<< HEAD

  const [symbols, setSymbols] = useState([])



  console.log(api_auth)

  return (

    
    <>
      <h1>This is App</h1>
      {/* <ShareList /> */}
    </>
=======
  console.log(api_auth);

  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<ShareList />} />
            <Route path="/portfolio" element={<PortfolioList/>} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
>>>>>>> 69882e529b5e2709665ea760eeafce3d2d101fed
  );
}

export default App;
