import Pagination from "./Pagination";
import { StyledTable } from "./Table.styled";

export const Table = ({
  data,
  columns,
  keyProp,
  numberOfPages,
  onPageClick,
}) => {
  return (
    <>
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
      <Pagination numberOfPages={numberOfPages} onClick={onPageClick} />
    </>
  );
};

export default Table;
