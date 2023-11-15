import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useState } from "react";
import { getMoviesByName } from "../services/movies-service";
import Table from "../components/Table/Table";
import { Pagination } from "../components/Table/Pagination";

// Movies table's columns
const COLUMNS = [
  { name: "Title", title: "Movie name" },
  { name: "Year", title: "Year" },
];

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
          <Table
            data={results.data}
            columns={COLUMNS}
            keyProp="imdbID"
            numberOfPages={results.total_pages}
            onPageClick={getMoviesByPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
