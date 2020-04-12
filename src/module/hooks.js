import { useState } from "react";
import { isArray } from "util";

export const usePaginator = () => {
  const itemsForPage = 6;
  const [page, setPage] = useState(0);

  // use disable as a condition to disable pagination function
  const nextPage = (disabled = false) =>
    !disabled && setPage(page + itemsForPage);
  const prevPage = (disabled = false) =>
    !disabled && setPage(page - itemsForPage);

  const currentPage = page / itemsForPage + 1;

  // list param i must be to array with items o the number of total items
  const totalPages = list => {
    const total = (isArray(list) ? list.length : list) / itemsForPage;
    return Math.ceil(total) > 0 ? Math.ceil(total) : 1;
  };
  return {
    page,
    setPage,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    itemsForPage
  };
};
