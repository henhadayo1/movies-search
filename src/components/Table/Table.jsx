import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { StyledTable } from "./Table.styled";
import { StyleTableWrapper } from "./TableWrapper.styled";
import { SORTING_ORDER, sortArrayOfObjectsByKey } from "../utils/utils";

export const Table = ({
  data,
  columns,
  keyProp,
  totalPages,
  currentPage,
  onPageClick,
}) => {
  const [rowsData, setRowsData] = useState(data);
  const [columnToSort, setColumnToSort] = useState(undefined);
  const [sortingOrder, setSortingOrder] = useState(undefined);

  useEffect(() => {
    setRowsData(data);
  }, [data]);

  function headClickEventHandler(columnName) {
    let _sortingOrder =
      sortingOrder === SORTING_ORDER.DESC || columnName !== columnToSort //columnToSort is the previous column to sort, before I set this state
        ? SORTING_ORDER.ASC
        : SORTING_ORDER.DESC;

    sortArrayOfObjectsByKey(rowsData, columnName, _sortingOrder);
    setRowsData(rowsData);
    setSortingOrder(_sortingOrder);
    setColumnToSort(columnName);
  }

  return (
    <StyleTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                className="clickable"
                onClick={() => headClickEventHandler(column.name)}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsData.map((movie) => (
            <tr key={movie[keyProp]}>
              {columns.map((column) => (
                <td key={column.title}>{movie[column.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Pagination
        totalPages={totalPages}
        onClick={onPageClick}
        page={currentPage}
      />
    </StyleTableWrapper>
  );
};

export default Table;
