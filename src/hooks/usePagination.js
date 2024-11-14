const usePagination = ({
  totalCount,
  perPage,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / perPage);

  return {
    totalPages,
  };
};

export default usePagination;
