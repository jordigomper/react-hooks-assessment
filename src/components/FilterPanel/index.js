import React from "react";
import PropTypes from "prop-types";

import { Chip } from "../";
import { Container } from "./elements";

export const FilterPanel = ({ buttons, ...rest }) => (
  <Container>
    {buttons.map(
      (item) =>
        typeof item === "string" && (
          <Chip className="filter-panel__chip" key={item} {...rest}>
            {item}
          </Chip>
        )
    )}
  </Container>
);

FilterPanel.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FilterPanel.defaultProps = {
  buttons: [],
};
