import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { APIContext } from "../context";
import { isArray, isString, isNumber } from "util";
import Image from "./Image";
import styled from "@emotion/styled";

const Content = styled.div`
  margin: 5% 0 0 0;
  display: flex;
  flex-wrap: wrap;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    margin: 2% 5%;
    display: inline;
  }
`;

const Profile = ({ id }) => {
  const { habitants } = useContext(APIContext);
  const [habitant, setHabitant] = useState(null);
  const [isFeching, setIsFeching] = useState(true);

  useEffect(() => {
    if (id && habitants.length > 0) {
      setIsFeching(true);

      const index = habitants.findIndex(
        habitant =>
          habitant.hasOwnProperty("id") &&
          (typeof habitant.id === "string" ||
            typeof habitant.id === "number") &&
          habitant.id.toString().trim() === id.toString().trim()
      );
      index >= 0 ? setHabitant(habitants[index]) : setHabitant("undefined");

      setIsFeching(false);
    }
  }, [id, habitants]);

  if (isFeching) return <div>"loading..."</div>;
  if (habitant === "undefined" || typeof habitant !== "object")
    return <div>Not Found :'(</div>;

  const {
    thumbnail,
    name,
    age,
    friends,
    professions,
    hair_color,
    height,
    weight
  } = habitant;

  return (
    <Content>
      <Image src={thumbnail} alt={name} title={name} />
      <Description>
        {name && isString(name) && (
          <p>
            <b>Name: </b>
            {name}
          </p>
        )}
        {age && isNumber(age) && (
          <p>
            <b>Age: </b>
            {age}
          </p>
        )}
        {height && isNumber(height) && (
          <p>
            <b>Height: </b>
            {height}
          </p>
        )}
        {weight && isNumber(weight) && (
          <p>
            <b>Weight: </b>
            {weight}
          </p>
        )}

        {hair_color && isString(hair_color) && (
          <p>
            <b>Hair color: </b>
            {hair_color}
          </p>
        )}
        {professions && isArray(professions) && (
          <p>
            <b>Professions: </b>
            {professions.join(", ")}.
          </p>
        )}
        {friends && isArray(friends) && (
          <p>
            <b>Friends: </b>
            {friends.join(", ")}.
          </p>
        )}
      </Description>
    </Content>
  );
};

Profile.propTypes = {
  id: PropTypes.string
};

Profile.defaultProps = {
  id: null
};

export default Profile;
