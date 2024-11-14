import usePagination from "../../hooks/usePagination";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 25px auto 0;
`;

const PaginationBlock = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.$current === "true" ? props.theme.primary : props.theme.dark};
`;

const Pagination = ({
  totalCount,
  currentPage = 1,
  perPage = 10,
  onPageChange,
}) => {
  const { totalPages } = usePagination({
    totalCount,
    currentPage,
    perPage,
    onPageChange,
  });

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationBlock
          $current={(index === currentPage).toString()}
          key={index}
          onClick={() => onPageChange(index)}
          disabled={index === currentPage}
        >
          {index + 1}
        </PaginationBlock>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
