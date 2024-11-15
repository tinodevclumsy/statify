import { useState } from "react";

const usePagination = ({ totalCount, perPage }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(totalCount / perPage);

  const goToPage = (index) => {
    if (index < 0 || index > totalPages) return;

    setPage(index);
  };

  return {
    page,
    setPage,
    totalPages,
    goToPage,
  };
};

export default usePagination;
