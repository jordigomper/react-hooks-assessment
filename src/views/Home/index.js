import React, { useEffect, useState } from "react";
import { isString, isNumber } from "util";

import { Searchbar, Card, FilterPanel } from "../../components";
import { List, PaginatorPanel, Icon } from "./elements";
import { hasSome } from "../../module/utils";
import { usePaginator } from "../../module/hooks";
import { useAPIContext } from "../../App/context";

const rightArrow = require("../../assets/icons/chevron_right.svg");
const leftArrow = require("../../assets/icons/chevron_left.svg");

export const Home = () => {
  const {
    page,
    setPage,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    itemsForPage,
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
      (hab) =>
        hab.hasOwnProperty("id") && (isNumber(hab.id) || isString(hab.id))
    );

    // filter searchbar
    if (searchTerm.length > 0) {
      cookedData = cookedData.filter(({ name }) =>
        name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
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
        {habitantsCookedData
          .slice(page, page + itemsForPage)
          .map((habitant) => (
            <Card className="list__item" key={habitant.id} {...habitant} />
          ))}
      </List>

      <PaginatorPanel>
        <Icon
          disabled={currentPage === 1}
          onClick={() => prevPage(currentPage === 1)}
          src={leftArrow}
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
          src={rightArrow}
          alt={"next"}
        />
      </PaginatorPanel>
    </>
  );
};
