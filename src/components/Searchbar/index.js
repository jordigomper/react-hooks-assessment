import React from "react";
import PropTypes from "prop-types";

import { Container } from "./elements";

export const Searchbar = ({ value, onChange }) => {
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

Searchbar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
  value: "",
};
