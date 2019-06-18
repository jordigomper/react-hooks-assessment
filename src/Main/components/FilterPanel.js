import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterPanel = ({ searchTerm, setSearchTerm }) => {
  return (
    <Container>
      <input
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />
    </Container>
  );
};

export default FilterPanel;
