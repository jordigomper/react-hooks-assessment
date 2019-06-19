import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import Image from "./Image";
import styled from "@emotion/styled";

const CardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Card = ({ id, thumbnail, name, age, friends, professions }) => {
  return (
    <CardStyle onClick={() => navigate(`/profile/${id}`)}>
      <Image src={thumbnail} alt={name} title={name} />
      <p>{name}</p>
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
