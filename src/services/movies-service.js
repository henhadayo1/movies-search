import axios from "axios";

export async function getMoviesByName(name, page = 1) {
  let result = { data: {}, error: "" };
  try {
    const response = await axios.get(
      "https://jsonmock.hackerrank.com/api/movies/search",
      {
        params: {
          Title: name,
          page,
        },
      }
    );
    result.data = response.data;
  } catch (error) {
    result.error = error.message;
  }

  return result;
}
