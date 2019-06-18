import React from "react";
import styled from "@emotion/styled";

const FilterPanel = ({ professions }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <Container>
      {professions.map(name => {
        return <button>{name}</button>;
      })}
    </Container>
  );
};

export default FilterPanel;
