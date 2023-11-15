import Pagination from "./Pagination";
import { StyledTable } from "./Table.styled";
import { StyleTableWrapper } from "./TableWrapper.styled";

export const Table = ({
  data,
  columns,
  keyProp,
  totalPages,
  currentPage,
  onPageClick,
}) => {
  return (
    <StyleTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.title} className="clickable">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => (
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
