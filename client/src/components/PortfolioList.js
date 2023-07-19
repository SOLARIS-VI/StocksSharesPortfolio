// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/components/PortfolioList.js
import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

const ListContainer = styled.div`
  margin-top: 10px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;

  @media (max-width: 500px) {
    max-height: calc(100vh - 140px);
    margin-top: 10px;
    padding-right: 30px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: #000;
  border-radius: 40px;
  margin-left: 40px;
  margin-top: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 30px;

  @media (max-width: 500px) {
    max-height: calc(100vh - 140px);
    margin-top: 10px;
    margin-right: 30px;
  }
`;

const BuildingColumns = styled.div`
  margin-left: 34px;
`;

const BuildingContainer = styled.div`
  position: absolute;
  left: 54.5%;
  transform: translateX(-50%);

  @media (max-width: 500px) {
    left: 44%;
  }
`;

const Stack = styled.div`
  margin-right: 80px;
  @media (max-width: 500px) {
  }
`;

const Piechart = styled.div`
justify-content: center;
display: flex;
z-index: -1;
`
const PortfolioListWrapper = styled(ListContainer)``;

const PortfolioList = ({ portfolio }) => {
  const [chartData, setChartData] = useState([]);

  const portfolioNodes = portfolio.map((portfolioItem) => (
    <PortfolioItem key={portfolioItem.id} share={portfolioItem} />
  ));

  useEffect(() => {
    if (portfolio.length > 0) {
      const chartTemp = portfolio.map((x) => [
        x.name,
        parseInt(x.numberOfShares),
      ]);
      chartTemp.unshift(["Stock", "Number of Shares"]);
      console.log(chartTemp);
      setChartData(chartTemp);
    }
  }, [portfolio]);

  const options = {
    title: "Ratio of Shares Held",
  };

  return (
    <>
      <Label>
        <BuildingColumns>
          <FontAwesomeIcon
            icon={faBuildingColumns}
            style={{ color: "#ffffff" }}
          />
        </BuildingColumns>
        <BuildingContainer>
          <FontAwesomeIcon icon={faBuilding} style={{ color: "#ffffff" }} />
        </BuildingContainer>
        <Stack>
          <FontAwesomeIcon icon={faCubesStacked} style={{ color: "#ffffff" }} />{" "}
        </Stack>
      </Label>
      <PortfolioListWrapper>
        <ul>{portfolioNodes}</ul>
      </PortfolioListWrapper>

      <Piechart>
        <Chart
          chartType="PieChart"
          width="600px"
          height="600px"
          data={chartData}
          options={options}
        />
      </Piechart>
    </>
  );
};

export default PortfolioList;
