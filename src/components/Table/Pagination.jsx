import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { StyledPagination } from "./Pagination.styled";
import { arrayFromNumber } from "../utils/utils";
import Dropdown from "../Dropdown/Dropdown";
import useMobile from "../../hooks/useMobile";

const PAGINATION_LIMIT = 10;
const PAGINATION_LIMIT_MOBILE = 3;

export const Pagination = ({ totalPages, onClick, page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [pagination, setPagination] = useState([]);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile && totalPages > PAGINATION_LIMIT_MOBILE) {
      setPagination(arrayFromNumber(PAGINATION_LIMIT_MOBILE));
    } else if (totalPages > PAGINATION_LIMIT) {
      setPagination(arrayFromNumber(PAGINATION_LIMIT));
    } else {
      setPagination(arrayFromNumber(totalPages));
    }
  }, [totalPages, isMobile]);

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
        <Dropdown
          items={arrayFromNumber(totalPages)}
          value={currentPage}
          title="Jump to page"
          id="jumpToPage"
          name="pagination"
          onChange={changeEventHandler}
        />
      </StyledPagination>
      {totalPages} Total pages
    </>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  isMobile: PropTypes.bool,
};
