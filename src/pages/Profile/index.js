import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import { isArray, isString, isNumber } from "util";

import { ImageCache } from "../../components";
import { Content, Description, ButtonBack } from "./elements";

import { useAPIContext } from "../../App/context";

const determineGenre = /(?:^|(?:\.))(\w+).([aeiou]\s)/i;

export const Profile = ({ id }) => {
  const { habitants } = useAPIContext();
  const [profile, setProfile] = useState(null);
  const [isFeching, setIsFeching] = useState(true);

  useEffect(() => {
    if (id && habitants.length > 0) {
      setIsFeching(true);

      const index = habitants.findIndex(
        (habitant) =>
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
    weight,
  } = profile;

  return (
    <Content>
      <ImageCache src={thumbnail} alt={name} title={name} />
      <Description>
        <p>
          <b>Name: </b>
          {name && isString(name) ? name : "Not found..."}
        </p>
        <p>
          <b>Age: </b>
          {age && (isNumber(age) || isString(age)) && Number.parseInt(age)
            ? age
            : "Not Found..."}
        </p>
        <p>
          <b>Sexe: </b>
          {name && isString(name)
            ? determineGenre.test(name)
              ? "Female"
              : "Male"
            : "Undefined."}
        </p>
        <p>
          <b>Height: </b>
          {height &&
          (isNumber(height) || isString(height)) &&
          Number.parseInt(height)
            ? Number(height).toFixed(2)
            : "Not Found..."}
        </p>
        <p>
          <b>Weight: </b>
          {weight &&
          (isNumber(weight) || isString(weight)) &&
          Number.parseInt(weight)
            ? Number(weight).toFixed(2)
            : "Not Found..."}
        </p>
        <p>
          <b>Hair color: </b>
          {hair_color && isString(hair_color) ? hair_color : "Not Found..."}
        </p>
        <p>
          <b>Professions: </b>
          {isArray(professions) && professions.length > 0
            ? professions.join(", ")
            : "Unemployed"}
          .
        </p>
        <p>
          <b>Friends: </b>
          {isArray(friends) && friends.length > 0
            ? friends.join(", ")
            : "He/She not have, He/She is a lone ranger"}
          .
        </p>
      </Description>
      <ButtonBack onClick={() => navigate("/")}>BACK</ButtonBack>
    </Content>
  );
};

Profile.propTypes = {
  id: PropTypes.string,
};

Profile.defaultProps = {
  id: null,
};

export default Profile;
