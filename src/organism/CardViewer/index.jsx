import React, { useContext } from 'react';
import { DataContext } from '../../DataContext';
import { Card } from '../../atoms';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const CardViewer = ({second}) => {

  const results = useContext(DataContext);
  
  return (
    <Container>
      {results && results.map((card) => {
        if (second) {
          let { data } = card;
          let { id, image, name, status, gender } = data;
          return <Card id={id} image={image} name={name} status={status} gender={gender} />
        }
        let { id, image, name, status, gender } = card;
        return <Card id={id} image={image} name={name} status={status} gender={gender} />
      })}
    </Container>
  )
}

export default CardViewer
