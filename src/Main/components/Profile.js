import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { APIContext } from "../context";
import { isArray, isString, isNumber } from "util";
import Image from "./Image";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

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

const ButtonBack = styled.div`
  cursor: pointer;
  margin: 15px;
  padding: 5px 10px;
  border-radius: 25px;
  background-color: red;
  font-weight: bold;
  ${({ theme: { breakPoints } }) => `
    @media (min-width: ${breakPoints.tablet}px) {
      left: 150px;
    }
  `}
`;

const Profile = ({ id }) => {
  const { habitants } = useContext(APIContext);
  const [profile, setProfile] = useState(null);
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
      index >= 0 ? setProfile(habitants[index]) : setProfile("undefined");

      setIsFeching(false);
    }
  }, [id, habitants]);

  if (isFeching) return <div>"loading..."</div>;
  if (profile === "undefined" || typeof profile !== "object")
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
  } = profile;

  return (
    <Content>
      <Image src={thumbnail} alt={name} title={name} />
      <Description>
        {name && isString(name) && (
          <p>
            <b>Name: </b>
            {name ? name : "Not found..."}
          </p>
        )}
        {age && isNumber(age) && (
          <p>
            <b>Age: </b>
            {age ? age : "Not Found..."}
          </p>
        )}
        {height && isNumber(height) && (
          <p>
            <b>Height: </b>
            {height ? height : "Not Found..."}
          </p>
        )}
        {weight && isNumber(weight) && (
          <p>
            <b>Weight: </b>
            {weight ? weight : "Not Found..."}
          </p>
        )}

        {hair_color && isString(hair_color) && (
          <p>
            <b>Hair color: </b>
            {hair_color ? hair_color : "Not Found..."}
          </p>
        )}
        {professions && isArray(professions) && (
          <p>
            <b>Professions: </b>
            {professions.length > 0 ? professions.join(", ") : "Unemployed"}.
          </p>
        )}
        {friends && isArray(friends) && (
          <p>
            <b>Friends: </b>
            {friends.length > 0
              ? friends.join(", ")
              : "He/She not have, He/She is a lone ranger"}
            .
          </p>
        )}
      </Description>
      <ButtonBack onClick={() => navigate("/")}>BACK</ButtonBack>
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
