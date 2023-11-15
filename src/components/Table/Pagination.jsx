import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { StyledPagination } from "./Pagination.styled";
import { arrayFromNumber } from "../utils/utils";

const PAGINATION_LIMIT = 10;

export const Pagination = ({ totalPages, onClick, page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    if (totalPages > PAGINATION_LIMIT) {
      setPagination(arrayFromNumber(PAGINATION_LIMIT));
    } else {
      setPagination(arrayFromNumber(totalPages));
    }
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  function paginate(page) {
    if (page === currentPage) {
      return;
    }
    setCurrentPage(page);
    onClick(page);
  }

  function clickEventHandler(page) {
    paginate(page);
  }

  function changeEventHandler(event) {
    paginate(Number(event.target.value));
  }

  return (
    <>
      <StyledPagination>
        {pagination.map((pageNo) => (
          <Button
            key={pageNo}
            onClick={() => {
              clickEventHandler(pageNo);
            }}
            style={{ backgroundColor: currentPage === pageNo && "black" }}
          >
            {pageNo}
          </Button>
        ))}

        <label htmlFor="jumpToPage">Jump to page:</label>
        <select
          name="pagination"
          id="jumpToPage"
          onChange={changeEventHandler}
          value={currentPage}
        >
          {arrayFromNumber(totalPages).map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </StyledPagination>
      {totalPages} Total pages
    </>
  );
};

export default Pagination;
