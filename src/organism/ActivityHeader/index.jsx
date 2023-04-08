import React from 'react';
import styled from 'styled-components';
import { Filter } from '../../molecules';
import { Search } from '../../atoms';

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const ActivityHeader = ({ query, setQuery }) => {
  return (
    <Container>
      <Search query={query} setQuery={setQuery} />
      <Filter query={query} setQuery={setQuery} />
    </Container>
  )
}

export default ActivityHeader
