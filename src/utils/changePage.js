import { DEFAULT_PAGE } from "."

export const changePage = (direction, page, setPage, pageCount) => {
  if (direction === 'next' && page < pageCount) {
    return setPage(page + 1);
  }

  if (direction === 'prev' && page > DEFAULT_PAGE) {
    return setPage(page - 1);
  }

  return null;
};
