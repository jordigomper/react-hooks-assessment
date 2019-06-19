import React, { useEffect, useContext, useState } from "react";
import { APIContext } from "../context";
import FilterPanel from "./FilterPanel";
import Card from "./Card";
import styled from "@emotion/styled";
import { hasSome } from "../../module/utils";
import { usePaginator } from "../../module/hooks";

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
  const {
    page,
    setPage,
    nextPage,
    prevPage,
    currentPage,
    totalPages
  } = usePaginator();
  const { habitants } = useContext(APIContext);
  const [habitantsDataCooked, setHabitantsDataCooked] = useState(habitants);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const cookedData =
      searchTerm.length > 0
        ? habitants.filter(({ professions }) =>
            hasSome(professions, searchTerm)
          )
        : habitants;
    setPage(SKIP_PAGINATION);
    setHabitantsDataCooked(cookedData);
  }, [habitants, searchTerm]);

  window.pa = page => setPage(page * SKIP_PAGINATION);

  return (
    <>
      <FilterPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Grid>
        {habitantsDataCooked
          .slice(page, page + SKIP_PAGINATION)
          .map(habitant => (
            <Card key={habitant.id} {...habitant} />
          ))}
      </Grid>

      <PaginatorPanel>
        <button onClick={prevPage} disabled={currentPage === 1}>
          previous
        </button>
        {currentPage} / {totalPages(habitantsDataCooked)}
        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages(habitantsDataCooked)}
        >
          next
        </button>
      </PaginatorPanel>
    </>
  );
};

export default Home;
