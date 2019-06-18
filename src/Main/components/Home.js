import React, { useContext, useState } from "react";
import { APIContext } from "../context";
import FilterPanel from "./FilterPanel";
import Card from "./Card";
import styled from "@emotion/styled";

const SKIP_PAGINATION = 6;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-column-gap: 20%;
  -webkit-transition: heigth 12s;
  transition: heigth 12s;
`;

const Home = () => {
  const { habitants } = useContext(APIContext);
  const [page, setPage] = useState(SKIP_PAGINATION);

  const nextPage = () => setPage(page + SKIP_PAGINATION);
  const prevPage = () => setPage(page - SKIP_PAGINATION);

  const [filter, setFilter] = useState(SKIP_PAGINATION);

  return (
    <>
      <FilterPanel onChange={setFilter} />
      <Grid>
        {habitants.slice(page, page + SKIP_PAGINATION).map(habitant => (
          <Card key={habitant.id} {...habitant} />
        ))}
      </Grid>
      {page / SKIP_PAGINATION} /{" "}
      {Math.round(habitants.length / SKIP_PAGINATION)}
      <button onClick={prevPage} disabled={page === SKIP_PAGINATION}>
        ant
      </button>
      <button onClick={nextPage}>sig</button>
    </>
  );
};

export default Home;
