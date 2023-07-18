import React, { useState, useEffect } from "react";
import FullListItem from "./FullListItem";
import FilterBox from "./FilterBox";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const ListContainer = styled.div`
  margin-top: 10px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;

  @media (max-width: 500px) {
    max-height: calc(100vh - 140px);
    margin-top: 0px;
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
  position: relative;

  @media (max-width: 500px) {
    max-height: calc(100vh - 140px);
    margin-right: 30px;
  }
`;

const BuildingColumns = styled.div`
  margin-left: 34px;
`;

const BuildingContainer = styled.div`
  position: absolute;
  left: 54%;
  transform: translateX(-50%);

  @media (max-width: 500px) {
    left: 59%;
  }
`;

const FullList = ({ fullStocks, setStocks, stocks, setFullStocks }) => {
  const [filteredStocks, setFilteredStocks] = useState(stocks);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const fullListItems = filteredStocks.map((stock) => (
    <FullListItem key={stock.ticker} share={stock} />
  ));

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize(); // Set initial screen width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilter = (filterText) => {
    const filteredTemp = fullStocks.filter((stock) => {
      return stock.name.toLowerCase().includes(filterText.toLowerCase());
    });
    setFilteredStocks(filteredTemp);
  };

  return (
    <>
      <Label>
        <BuildingColumns>
          <FontAwesomeIcon icon={faBuildingColumns} style={{ color: "#ffffff" }} />
        </BuildingColumns>
        <BuildingContainer>
          <FontAwesomeIcon icon={faBuilding} style={{ color: "#ffffff" }} />
        </BuildingContainer>
      </Label>
      {isSmallScreen && <FilterBox onFilter={handleFilter} />} {/* Show FilterBox on small screens */}
      <ListContainer>
        <ul>{fullListItems}</ul>
      </ListContainer>
      {!isSmallScreen && <FilterBox onFilter={handleFilter} />} {/* Show FilterBox on large screens */}
    </>
  );
};

export default FullList;
