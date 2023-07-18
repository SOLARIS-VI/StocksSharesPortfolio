import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilterBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 39px;
  position: fixed;
  margin-top: 560px;
  z-index: 1;

  @media (max-width: 500px) {
    display: flex;
    justify-content: start;
    position: fixed;
    margin-top: 0px;
    z-index: 1;
    width: 100%;
  }
`;

const FilterInput = styled.input`
  padding: 10px;
  width: 800px;
  border: 2px solid #ccc;
  border-radius: 30px;

  @media (max-width: 500px) {
    padding: 10px;
    width: 190px;
    border: 2px solid #ccc;
    border-radius: 30px;
  }
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: bottom;
  justify-content: space-between;
  /* margin-bottom: 8px; */
  border-radius: 40px;
`;

const FilterBox = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    onFilter(searchTerm);
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <Container>
      <FilterBoxContainer>
        <FilterInput
          type="text"
          placeholder="Search for stock..."
          value={searchTerm}
          onChange={handleChange}
        />
        <ClearButton type="button" onClick={clearSearch}>
          Clear Filter
        </ClearButton>
      </FilterBoxContainer>
    </Container>
  );
};

export default FilterBox;
