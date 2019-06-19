import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Searchbar = ({ value, onChange }) => {
  return (
    <Container>
      <input
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        placeholder="Search Gnom"
      />
    </Container>
  );
};

export default Searchbar;
