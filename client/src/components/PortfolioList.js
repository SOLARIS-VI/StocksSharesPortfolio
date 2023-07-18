// /Users/zuhayrkhan/Documents/CodeClan/shares_project/client/src/components/PortfolioList.js
import React from 'react';
import PortfolioItem from './PortfolioItem';
import styled from 'styled-components';

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

const PortfolioListWrapper = styled(ListContainer)`
  /* Add any additional styles specific to the PortfolioList here */
`;

const PortfolioList = ({ portfolio }) => {
  const portfolioNodes = portfolio.map((portfolioItem) => (
    <PortfolioItem key={portfolioItem.id} share={portfolioItem} />
  ));

  return (
    <>
      <Label></Label>
      <PortfolioListWrapper>
        <ul>{portfolioNodes}</ul>
      </PortfolioListWrapper>
    </>
  );
};

export default PortfolioList;
