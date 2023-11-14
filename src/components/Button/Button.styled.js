import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid transparent;
  padding: 0.8em 1.4em;
  font-size: 1em;
  font-weight: 400;
  font-family: inherit;
  background-color: #4472c4;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #31538f;
  }
`;
