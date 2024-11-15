import usePagination from "../../hooks/usePagination";
import styled from "styled-components";
import { ChevronRight, ChevronLeft } from "react-feather";
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
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Pagination = ({
  totalPages,
  currentPage = 0,
  perPage = 10,
  onPageChange,
}) => {

  return (
    <PaginationContainer>
      <PaginationBlock
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={12} />
      </PaginationBlock>
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
      <PaginationBlock
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight size={12} />
      </PaginationBlock>
    </PaginationContainer>
  );
};

export default Pagination;
