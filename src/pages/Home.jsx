import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useState } from "react";
import { getMoviesByName } from "../services/movies-service";

export const Home = () => {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function searchMovies() {
    setIsLoading(true);
    const response = await getMoviesByName(inputValue);
    if (response.data) {
      setResults(response.data);
    } else {
      setErrorMessage(response.error);
    }

    setIsLoading(false);
  }

  function keyDownEventHandler(event) {
    if (event.key === "Enter") {
      searchMovies();
    }
  }

  async function getMoviesByPage(page) {
    setIsLoading(true);
    const response = await getMoviesByName(inputValue, page);
    if (response.data) {
      setResults(response.data);
    } else {
      setErrorMessage(response.error);
    }

    setIsLoading(false);
  }

  return (
    <div>
      <h1>Movies search</h1>
      <div>
        <h3>Search for any movie you like:</h3>
        <Input
          placeholder="Type movie name..."
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={keyDownEventHandler}
        ></Input>
        <Button onClick={searchMovies}>Search</Button>
      </div>
      <h2>Results</h2>
      {isLoading
        ? "Fetching results..."
        : errorMessage
        ? errorMessage
        : JSON.stringify(results)}

      {results.data && (
        <>
          <table style={{ textAlign: "left" }}>
            <thead>
              <tr>
                <th className="clickable">Movie name</th>
                <th className="clickable">Year</th>
              </tr>
            </thead>
            <tbody>
              {results.data.map((movie) => (
                <tr key={movie.imdbID}>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {[...Array(results.total_pages)].map((value, index) => (
              <Button
                key={index + 1}
                onClick={() => {
                  getMoviesByPage(index + 1);
                }}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
