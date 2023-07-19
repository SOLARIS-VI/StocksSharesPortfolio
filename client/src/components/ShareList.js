import React from "react";
import ShareItem from "./ShareItem";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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
  left: 49%;
  transform: translateX(-50%);

  @media (max-width: 500px) {
    left: 59%;
  }
`;

const Info = styled.div`
  margin-right: 47px;
@media (max-width: 500px) {
    display: none;
}
`;

const ShareList = ({ stocks }) => {
  const shareList = stocks.map((stock) => (
    <ShareItem key={stock.symbol} share={stock} />
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
        <Info>
        <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}} />
        </Info>
      </Label>
      <ListContainer>
        <ul>{shareList}</ul>
      </ListContainer>
    </>
  );
};

export default ShareList;
