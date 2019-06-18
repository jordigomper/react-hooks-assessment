import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { APIContext } from "../context";
import Card from "./Card";

const SKIP_PAGINATION = 6;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-column-gap: 20%;
  -webkit-transition: heigth 12s;
  transition: heigth 12s;
  ${a => console.log(a)}
`;

const Home = () => {
  const habitants = useContext(APIContext);

  const [loadMore, setLoadMore] = useState(SKIP_PAGINATION);

  return (
    <>
      <Grid>
        {habitants.slice(0, loadMore).map(habitant => (
          <Card key={habitant.id} {...habitant} />
        ))}
      </Grid>
      <button
        onClick={() => setLoadMore(prevState => prevState + SKIP_PAGINATION)}
      >
        Load more
      </button>
    </>
  );
};

export default Home;
