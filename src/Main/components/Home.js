import React, { useEffect, useState } from "react";
import { hasSome } from "../../module/utils";
import { usePaginator } from "../../module/hooks";
import { useAPIContext } from "../context";
import Searchbar from "./Searchbar";
import Card from "./Card";
import FilterPanel from "./FilterPanel";
import styled from "@emotion/styled";
import { isString, isNumber } from "util";

const arrow_r = require("../../assets/icons/chevron_right.svg");
const arrow_l = require("../../assets/icons/chevron_left.svg");

const List = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 40%;
  grid-column-gap: 8%;
  -webkit-transition: heigth 12s;
  transition: heigth 12s;

  @media (min-width: 950px) {
    margin: 30px 0 60px 0;
    grid-template-columns: 20% 20% 20%;
  }
`;

const PaginatorPanel = styled.div`
  margin: 10px 5%;
  padding: 0 5%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-end;
  p {
    margin: 0 0 11px 0;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  width: 40px;
  background: #4267b273;
  border-radius: 100%;
  ${({ disabled }) =>
    disabled &&
    `
    cursor: initial;
    opacity: 0;
  `};
`;

const Home = () => {
  const {
    page,
    setPage,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    itemsForPage
  } = usePaginator();

  const { habitants, professions } = useAPIContext();
  const [habitantsCookedData, setHabitantsCookedData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);

  // add or remove the selector pushed
  function toggleFilter(element) {
    const hasIndexArray = filter.indexOf(element);
    const newFilterState = JSON.parse(JSON.stringify(filter));

    hasIndexArray > -1
      ? newFilterState.splice(hasIndexArray, 1)
      : newFilterState.push(element);

    setFilter([...newFilterState]);
  }

  useEffect(() => {
    const cookedData = filterData;
    setPage(0);
    setHabitantsCookedData(cookedData);
  }, [habitants, searchTerm, filter]);

  function filterData() {
    let cookedData = habitants;

    // check id format
    cookedData = cookedData.filter(
      hab => hab.hasOwnProperty("id") && (isNumber(hab.id) || isString(hab.id))
    );

    // filter searchbar
    if (searchTerm.length > 0) {
      cookedData = cookedData.filter(({ name }) =>
        name
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      );
    }

    // filter selectors
    if (filter.length > 0) {
      cookedData = cookedData.filter(({ professions }) =>
        hasSome(filter, professions)
      );
    }
    return cookedData;
  }

  return (
    <>
      <Searchbar
        className="searchbar"
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <FilterPanel buttons={professions} onClick={toggleFilter} />

      <List className="list">
        {habitantsCookedData.slice(page, page + itemsForPage).map(habitant => (
          <Card className="list__item" key={habitant.id} {...habitant} />
        ))}
      </List>

      <PaginatorPanel>
        <Icon
          disabled={currentPage === 1}
          onClick={() => prevPage(currentPage === 1)}
          src={arrow_l}
          alt={"previous"}
        />
        <p>
          <b>
            {currentPage} / {totalPages(habitantsCookedData)}
          </b>
        </p>
        <Icon
          disabled={currentPage >= totalPages(habitantsCookedData)}
          onClick={() =>
            nextPage(currentPage >= totalPages(habitantsCookedData))
          }
          src={arrow_r}
          alt={"next"}
        />
      </PaginatorPanel>
    </>
  );
};

export default Home;
