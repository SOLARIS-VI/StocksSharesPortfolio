import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Styled container for the filter box
const FilterBoxContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;
// Styled input field for the filter
const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
// Styled button for filtering
const FilterButton = styled.button`
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
  // Handle input change and update the search term state
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // Trigger the filter callback when the search term changes
  useEffect(() => {
    onFilter(searchTerm);
  }, [searchTerm, onFilter]);
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <FilterBoxContainer>
      <form onSubmit={handleSubmit}>
        {/* Input field for the filter */}
        <FilterInput
          type="text"
          placeholder="Enter a filter..."
          value={searchTerm}
          onChange={handleChange}
        />
        {/* Button for triggering the filter */}
        <FilterButton type="submit">Filter</FilterButton>
      </form>
    </FilterBoxContainer>
  );
};
export default FilterBox;

