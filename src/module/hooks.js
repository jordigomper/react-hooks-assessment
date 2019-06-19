import { useState } from "react";
import { isArray } from "util";

const SKIP_PAGINATION = 6;
export const usePaginator = () => {
  const [page, setPage] = useState(0);
  const nextPage = () => setPage(page + SKIP_PAGINATION);
  const prevPage = () => setPage(page - SKIP_PAGINATION);
  const currentPage = page / SKIP_PAGINATION;
  const totalPages = list => {
    const total = (isArray(list) ? list.length : list) / SKIP_PAGINATION;
    return Math.floor(total);
  };
  return { page, setPage, nextPage, prevPage, currentPage, totalPages };
};
