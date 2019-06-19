import React, { useEffect, useContext, useState } from "react";
import { APIContext } from "../context";
import Searchbar from "./Searchbar";
import Card from "./Card";
import styled from "@emotion/styled";
import { hasSome } from "../../module/utils";
import { usePaginator } from "../../module/hooks";
import FilterPanel from "./FilterPanel";
import { arrayExpression } from "@babel/types";

// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
//   /* Styles */
//   }
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
//   /* Styles */
//   }

const SKIP_PAGINATION = 6;

const List = styled.div`
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

  const { habitants, professions } = useContext(APIContext);
  const [habitantsDataCooked, setHabitantsDataCooked] = useState(habitants);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);

  const toggleFilter = element => {
    const hasIndexArray = filter.indexOf(element);
    const newFilterState = filter;

    hasIndexArray > -1
      ? newFilterState.pop(hasIndexArray)
      : newFilterState.push(element);

    setFilter([...newFilterState]);
  };

  useEffect(() => {
    let cookedData = habitants;
    if (searchTerm.length > 0) {
      cookedData = cookedData.filter(({ name }) =>
        name
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      );
    }

    if (filter.length > 0) {
      cookedData = cookedData.filter(({ professions }) =>
        hasSome(filter, professions)
      );
    }
    setPage(0);
    setHabitantsDataCooked(cookedData);
  }, [habitants, searchTerm, filter]);

  window.pa = page => setPage(page * SKIP_PAGINATION);

  return (
    <>
      <Searchbar value={searchTerm} onChange={setSearchTerm} />

      <FilterPanel buttons={professions} onClick={toggleFilter} />

      <List>
        {habitantsDataCooked
          .slice(page, page + SKIP_PAGINATION)
          .map(habitant => (
            <Card key={habitant.id} {...habitant} />
          ))}
      </List>

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
