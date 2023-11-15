import Button from "../Button/Button";
import { StyledPagination } from "./Pagination.styled";

export const Pagination = ({ numberOfPages, onClick }) => {
  return (
    <>
      <StyledPagination>
        {[...Array(numberOfPages)].map((value, index) => (
          <Button
            key={index + 1}
            onClick={() => {
              onClick(index + 1);
            }}
          >
            {index + 1}
          </Button>
        ))}
      </StyledPagination>
      {numberOfPages} Total pages
    </>
  );
};

export default Pagination;
