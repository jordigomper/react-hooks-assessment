import React, { useContext } from "react";
import styled from "@emotion/styled";
import { APIContext } from "../context";
import Card from "./Card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-column-gap: 20%;
`;

const Home = () => {
  const habitants = useContext(APIContext);

  return (
    <Grid>
      {habitants.map(habitant => (
        <Card key={habitant.id} {...habitant} />
      ))}
    </Grid>
  );
};

export default Home;
