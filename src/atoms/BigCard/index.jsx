import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 600px;
  margin: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const CardFooter = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h2`
  font-size: 3rem;
  margin: 10px;
`;

const CardDescription = styled.p`
  font-size: 2rem;
  margin: 10px;
`;

const BigCard = () => {

  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setData(response.data);
    };
    fetchData();
  }, []);
  const { image, name, status, location, gender, species, origin } = data;
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Status: {status}</CardDescription>
        <CardDescription>Location: {location?.name}</CardDescription>
        <CardDescription>Gender: {gender}</CardDescription>
        <CardDescription>Origin: {origin?.name}</CardDescription>
        <CardDescription>Species: {species}</CardDescription>
      </CardFooter>
    </CardContainer>
  );
}

export default BigCard;
