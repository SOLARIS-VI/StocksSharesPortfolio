import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilter(filterText);
  };

  return (
    <FilterBoxContainer>
      <form onSubmit={handleFilterSubmit}>
        <FilterInput
          type="text"
          placeholder="Enter a filter..."
          value={filterText}
          onChange={handleFilterChange}
        />
        <FilterButton type="submit">Filter</FilterButton>
      </form>
    </FilterBoxContainer>
  );
};

export default FilterBox;
