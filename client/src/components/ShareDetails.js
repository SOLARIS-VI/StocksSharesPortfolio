import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "./api_auth";
import styled from "styled-components";
import { Chart } from "react-google-charts";
const finnhub = require("finnhub");

const ContentContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin-left: 30px;
  /* width: 100%; */

  @media (max-width: 500px) {
    margin-left: 0;
    align-items: center;
    justify-content: center;
  }
`;

const TopRowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  h1 {
    margin-right: 10px;
    font-family: "Courier New", Courier, monospace;

    @media (max-width: 500px) {
      font-size: 22px;
    }
  }

  h4 {
    margin-right: 10px;
    font-family: "Courier New", Courier, monospace;
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    display: contents;
  }
`;

const Logo = styled.div`
  margin-left: 50px;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 500px) {
    width: 100%;
    display: contents;
  }

  select {
    margin-right: 10px;
    width: 300px;
    border-radius: 50px;
    border-width: 2px;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 500px) {
      margin-top: 10px;
      width: 360px;
    }
  }
`;

const Label = styled.input`
  width: 130px;
  border-radius: 50px;
  text-align: center;
  margin-right: 10px;
  border-width: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 500px) {
    margin-top: 10px;
    width: 170px;
  }
`;

const Button = styled.input`
  border-radius: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #cfcfcf;
  color: black;

  @media (max-width: 500px) {
    width: 170px;
  }
`;

const CompanyLogo = styled.img`
  max-width: 100px;
`;

const ShareDetails = ({ handlePortfolioSubmit }) => {
  const api_auth = finnhub.ApiClient.instance.authentications["api_key"];
  api_auth.apiKey = key;
  const finnhubClient = new finnhub.DefaultApi();

  const [timeFrom, setTimeFrom] = useState(0);
  const [stockDetails, setStockDetails] = useState({});
  const [symbol, setSymbol] = useState("");
  const [companyProfile, setCompanyProfile] = useState([]);
  const [numberOfShares, setNumberOfShares] = useState(0);
  const [chartData, setChartData] = useState([]);

  const { id } = useParams();
  const timeNow = Math.floor(new Date().getTime() / 1000).toFixed(0);

  useEffect(() => {
    getCandles(timeNow - 604800);
  }, []);

  useEffect(() => {
    finnhubClient.companyProfile2({ symbol: id }, (error, data, response) => {
      console.log(data);
      setCompanyProfile(data);
    });
  }, []);

  const getCandles = (timeFrom) =>
    finnhubClient.stockCandles(
      id,
      "D",
      timeFrom,
      timeNow,
      (error, data, response) => {
        console.log(data);
        const days = data.t;
        const daysFormatted = days.map((day) => {
          const dayFormatted = new Date(day * 1000);
          return dayFormatted.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
        });
        const highs = data.h;
        const lows = data.l;
        let chartTemp = daysFormatted.map((x, index) => [
          x,
          highs[index],
          lows[index],
        ]);
        chartTemp.unshift(["Date", "High", "Low"]);
        console.log(chartTemp);
        setChartData(chartTemp);
      }
    );

  const handleSelect = (event) => {
    if (event.target.value === "week") {
      getCandles(timeNow - 604800);
    }
    if (event.target.value === "month") {
      getCandles(timeNow - 2628000);
    } else if (event.target.value === "3month") {
      getCandles(timeNow - 7884000);
    } else if (event.target.value === "6month") {
      getCandles(timeNow - 15768000);
    } else if (event.target.value === "year") {
      getCandles(timeNow - 31536000);
    }
  };

  useEffect(() => {
    if (stockDetails.length > 0) {
      let chartTemp = stockDetails.t.map((x, index) => [
        x,
        stockDetails.h[index],
      ]);
      console.log(chartTemp);
    }
  }, [stockDetails]);

  const date = new Date(companyProfile.ipo);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleChange = (event) => {
    const numberOfShares = event.target.value;
    console.log(numberOfShares);
    setNumberOfShares(numberOfShares);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePortfolioSubmit({
      symbol: id,
      name: companyProfile.name,
      numberOfShares: numberOfShares,
    });
    window.location.replace("http://localhost:3000/portfolio");
  };

  const options = { hAxis: { ticks: [30, 60, 90, 120, 150] } };

  return (
    <ContentContainer>
      <TopRowContainer>
        <h1>{companyProfile.name}</h1>
        <h4>({companyProfile.ticker})</h4>
        <Logo>
          <CompanyLogo src={companyProfile.logo} alt="Company Logo" />
        </Logo>
      </TopRowContainer>

      <RowContainer>
        <select onChange={handleSelect} defaultValue="week">
          <option value="week">1 Week</option>
          <option value="month">1 Month</option>
          <option value="3month">3 Months</option>
          <option value="6month">6 Months</option>
          <option value="year">1 Year</option>
        </select>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <Label type="number" placeholder="No. of Shares" />
          <Button type="submit" value="Buy" />
        </form>
      </RowContainer>

      <div>
        {chartData.length > 0 ? (
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            options={options}
            data={chartData}
          />
        ) : null}
      </div>

      <p>IPO: {formattedDate}</p>
      <p>Market Capitalisation: {companyProfile.marketCapitalization}</p>
      <p>Outstanding share: {companyProfile.shareOutstanding}</p>
    </ContentContainer>
  );
};

export default ShareDetails;
