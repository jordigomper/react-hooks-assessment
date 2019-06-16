import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const CardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
`;

const Card = ({ id, thumbnail, name, age, friends, professions }) => {
  return (
    <CardStyle>
      <Img src={thumbnail} alt={thumbnail} title={thumbnail} />
      {name}
    </CardStyle>
  );
};

Card.propTypes = {
  age: PropTypes.number.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  professions: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default Card;
