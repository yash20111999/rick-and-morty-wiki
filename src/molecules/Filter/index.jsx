import React, { useState } from 'react';
import styled from 'styled-components';
import { GenderOption, StatusOption } from '../../Enum/FilterEnum';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 30px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 16px;
  margin-right: 10px;

  &:hover {
    background-color: #999;
    cursor: pointer;
  }
`;



const Filter = ({query, setQuery}) => {

  const handleClearFilters = () => {
    setQuery({
      ...query,
      gender: '',
      status:'',
    })
  };

  return (
    <Container>
      <FilterContainer>
        <Label>Gender</Label>
        <Select value={query.gender} onChange={(e) => setQuery({
          ...query,
          gender:e.target.value,
        })}>
          {GenderOption.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FilterContainer>
      <FilterContainer>
        <Label>Status</Label>
        <Select value={query.status} onChange={(e)=> setQuery({
          ...query,
          status:e.target.value,
        })}>
          {StatusOption.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FilterContainer>
      <FilterContainer>
        <Button onClick={handleClearFilters}>Clear All Filters</Button>
      </FilterContainer>
    </Container>
  );
};

export default Filter;
