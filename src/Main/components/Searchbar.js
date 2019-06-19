import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Searchbar = ({ value, onChange }) => {
  return (
    <Container>
      <label>
        <b>Search by name: </b>
        <input
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
          placeholder="Search Gnom"
        />
      </label>
    </Container>
  );
};

export default Searchbar;
