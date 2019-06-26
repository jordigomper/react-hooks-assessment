import React from "react";
import PropTypes from "prop-types";
import Chip from "./Chip";
import styled from "@emotion/styled";

const Panel = styled.div`
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterPanel = ({ buttons, ...rest }) => (
  <Panel>
    {buttons.map(
      item =>
        typeof item === "string" && (
          <Chip key={item} {...rest}>
            {item}
          </Chip>
        )
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
