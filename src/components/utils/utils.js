export const SORTING_ORDER = {
  ASC: "asc",
  DESC: "desc",
};

export function arrayFromNumber(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

export function sortArrayOfObjectsByKey(arr, key, order = SORTING_ORDER.ASC) {
  if (order === SORTING_ORDER.ASC) {
    return arr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }
  return arr.sort((a, b) => {
    if (a[key] < b[key]) {
      return 1;
    }
    if (a[key] > b[key]) {
      return -1;
    }
    return 0;
  });
}
