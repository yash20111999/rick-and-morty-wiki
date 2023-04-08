import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
`;

const Search = ({query, setQuery}) => {
  const [value, setValue] = useState('');

  let timerId;

  const handleInputChange = (e) => {
    const q = e.target.value;
    setValue(q);
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log('Searching for:', q);
      setQuery({
        ...query,
        page: 1,
        searchVal: q,
      })
    }, 500);
  };

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Search Character"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
