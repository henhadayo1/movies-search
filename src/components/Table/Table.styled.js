import styled from "styled-components";

export const StyledTable = styled.table`
  text-align: left;
  border-collapse: collapse;
  width: 100%;
  & > thead > tr {
    background-color: #a5a5a5;
    & > th {
      color: white;
      min-width: 100px;
    }
  }
  & tr {
    border: 1px solid #a5a5a5;
  }
  & td,
  th {
    padding: 0.3em;
  }
`;
