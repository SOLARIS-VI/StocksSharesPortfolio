
import React from "react";
import PortfolioItem from "./PortfolioItem";
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


const PortfolioList = ({ portfolio, handleDelete }) => {

const BuildingContainer = styled.div`
  position: absolute;
  left: 54.5%;
  transform: translateX(-50%);

  @media (max-width: 500px) {
    left: 41%;
  }
`;

const Stack = styled.div`
  margin-right: 53px;
  @media (max-width: 500px) {
    
  }
`;

const PortfolioListWrapper = styled(ListContainer)``;


  const portfolioNodes = portfolio.map((portfolioItem) => (
    <PortfolioItem
      key={portfolioItem.id}
      share={portfolioItem}
      handleDelete={handleDelete}
    />
  ));

  

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
    </>
  );
};

export default PortfolioList;
