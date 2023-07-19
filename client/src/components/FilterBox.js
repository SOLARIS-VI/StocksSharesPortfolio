import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilterBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  border-radius: 40px;
  margin-left: 40px;
  width: 100%;
  margin-top: 20px;
  height: 30px;
  position: relative;
  z-index: 1;

  @media (max-width: 500px) {
    margin-right: 30px;
  }
`;

const FilterInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 30px;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: bottom;
  justify-content: space-between;
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
