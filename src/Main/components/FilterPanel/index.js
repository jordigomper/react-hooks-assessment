import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import styled from "@emotion/styled";

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin: 0 5px 5px 0;
  }
`;

const FilterPanel = ({ buttons, ...rest }) => (
  <Panel>
    {buttons.map(
      item => typeof item === "string" && <Button {...rest}>{item}</Button>
    )}
  </Panel>
);

FilterPanel.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired
};

FilterPanel.defaultProps = {
  buttons: []
};

export default FilterPanel;
