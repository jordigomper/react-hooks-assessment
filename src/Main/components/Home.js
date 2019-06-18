import React, { useEffect, useContext, useState } from "react";
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

const PaginatorPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  const { habitants } = useContext(APIContext);
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(SKIP_PAGINATION);
  const nextPage = () => setPage(page + SKIP_PAGINATION);
  const prevPage = () => setPage(page - SKIP_PAGINATION);
  const currentPage = page / SKIP_PAGINATION;
  const totalPages = Math.floor(habitants.length / SKIP_PAGINATION);

  useEffect(() => {
    setPage(SKIP_PAGINATION);
  }, [searchTerm]);

  window.pa = page => setPage(page * SKIP_PAGINATION);

  return (
    <>
      <FilterPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Grid>
        {habitants
          .filter(({ professions }) =>
            searchTerm.length > 0
              ? professions.some(profession =>
                  profession
                    .trim()
                    .toLowerCase()
                    .includes(searchTerm)
                )
              : true
          )
          .slice(page, page + SKIP_PAGINATION)
          .map(habitant => (
            <Card key={habitant.id} {...habitant} />
          ))}
      </Grid>

      <PaginatorPanel>
        <button onClick={prevPage} disabled={currentPage === 1}>
          previous
        </button>
        {currentPage}
        <button onClick={nextPage} disabled={currentPage >= totalPages}>
          next
        </button>
      </PaginatorPanel>
    </>
  );
};

export default Home;
