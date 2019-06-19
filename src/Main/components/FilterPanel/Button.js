import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ButtonStyle = styled.div`
  margin: 0 5px 5px 0;
  background-color: ${({ isActive }) => (isActive ? "red" : "transparent")};
`;

const Button = ({ children, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    onClick(children);
    setIsActive(!isActive);
  };
  return (
    <ButtonStyle onClick={handleClick} isActive={isActive}>
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
