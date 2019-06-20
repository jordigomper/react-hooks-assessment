import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;

  label {
    margin-right: 15px;
  }

  ${({ theme: { breakPoints } }) => `
    @media (min-width: ${breakPoints.tablet}px) {
      font-size: 20px;
      input {
        font-size: 15px;
      }
    }
  `}
`;

const Searchbar = ({ value, onChange }) => {
  return (
    <Container>
      <label>
        <b>Search by name: </b>
      </label>
      <input
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        placeholder="Search Gnom"
      />
    </Container>
  );
};

export default Searchbar;
