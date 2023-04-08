import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  margin-top: 20px; 
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-around;
`;

const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
  height: 40px;
`;

const Option = styled.option`
  color: #000;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const Dropdown = ({ name, changeID, total }) => {

  return (
    <SelectContainer>
      <Title>Characters at {name}</Title>
      <Select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <Option value="1">Choose {name}</Option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </Select>
    </SelectContainer>
  );
}

export default Dropdown;
