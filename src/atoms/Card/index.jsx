import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin: 20px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardFooter = styled.div`
  display: flex;
  background-color: #f2f2f2;
  padding: 1rem;
  flex-direction: column;
  height: 100%;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const MoreDetail = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: black;
`;

const Card = ({ id, image, name, status, gender }) => {
  
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Status: {status}</CardDescription>
        <CardDescription>Gender: {gender}</CardDescription>
        <Link
          to={`${id}`}
          key={id}
          style={{textDecoration:'none'}}
        >
          <MoreDetail>More Details</MoreDetail>
        </Link>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
