import { SORTING_ORDER } from "../utils/utils";

export const SortingIcon = ({ sortingOrder }) => {
  return sortingOrder === SORTING_ORDER.ASC ? (
    <>&uarr;</>
  ) : sortingOrder === SORTING_ORDER.DESC ? (
    <>&darr;</>
  ) : (
    <></>
  );
};

export default SortingIcon;
