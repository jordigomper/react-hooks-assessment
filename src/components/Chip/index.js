import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./elements";

export const Chip = ({ children, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    onClick(children);
    setIsActive(!isActive);
  };
  return (
    <Container onClick={handleClick} isActive={isActive}>
      {children}
    </Container>
  );
};

Chip.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Chip.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
