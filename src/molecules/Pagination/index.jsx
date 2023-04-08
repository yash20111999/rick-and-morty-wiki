import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const PaginationButton = styled.button`
  background-color: ${props => props.isActive ? "#6f6b6b" : "#fff"};
  border: 1px solid #ccc;
  color: #333;
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          isActive={page === currentPage}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
