import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FilterBoxContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Renamed FilterButton to ClearButton
const ClearButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FilterBox = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    onFilter(searchTerm);
  }, [searchTerm, onFilter]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Added a clearSearch function to clear the input field
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <FilterBoxContainer>
      <form onSubmit={handleSubmit}>
        <FilterInput
          type="text"
          placeholder="Enter a filter..."
          value={searchTerm}
          onChange={handleChange}
        />
        {/* Changed FilterButton to ClearButton with onClick function */}
        <ClearButton type="button" onClick={clearSearch}>Clear</ClearButton>
      </form>
    </FilterBoxContainer>
  );
};

export default FilterBox;
