import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { APIContext } from "../context";
import Image from "./Image";
import styled from "@emotion/styled";
import { isArray, isObject } from "util";
import { navigate } from "@reach/router";

const IGNORE_PROPS = ["id", "thumbnail", "friends"];

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
      const a = habitants[index];
      console.log("ola");
      index >= 0 ? setHabitant(a) : setHabitant("undefined");

      setIsFeching(false);
    }
  }, [id, habitants]);

  const readAllPropertys = prop => {
    if (typeof prop === "string" || typeof prop === "number") return prop;
    else if (isArray(prop)) return prop.join(", ") + ".";
    else if (isObject(prop))
      return Object.entries(prop).map(item => (
        <p>
          <b>{item[0]}:</b> {readAllPropertys(item[1])}
        </p>
      ));
    return null;
  };

  if (isFeching) return <div>"loading..."</div>;
  if (habitant === "undefined" || typeof habitant !== "object")
    return <div>Not Found :'(</div>;

  return (
    <Content>
      <Image
        src={habitant.thumbnail}
        alt={habitant.name}
        title={habitant.name}
      />
      <Description>
        {Object.entries(habitant).map(prop =>
          IGNORE_PROPS.includes(
            prop[0]
              .toString()
              .trim()
              .toLowerCase()
          ) ? null : (
            <p>
              <b>{prop[0]}:</b> {readAllPropertys(prop[1])}
            </p>
          )
        )}
        {habitant.hasOwnProperty("friends") && isArray(habitant.friends) && (
          <p>
            <b>Friends: </b>
            {habitant.friends.map(friend => (
              // here navigate when clicking item friend
              <p>{friend}</p>
            ))}
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
