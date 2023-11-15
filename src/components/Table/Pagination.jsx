import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { StyledPagination } from "./Pagination.styled";

export const Pagination = ({ numberOfPages, onClick, page }) => {
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  function clickEventHandler(page) {
    if (page === currentPage) {
      return;
    }
    setCurrentPage(page);
    onClick(page);
  }

  return (
    <>
      <StyledPagination>
        {[...Array(numberOfPages)].map((value, index) => (
          <Button
            key={index + 1}
            onClick={() => {
              clickEventHandler(index + 1);
            }}
            style={{ backgroundColor: currentPage === index + 1 && "black" }}
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
