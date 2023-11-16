import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useState } from "react";
import { getMoviesByName } from "../services/movies-service";
import Table from "../components/Table/Table";

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
  const [prevInputValue, setPrevInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  async function searchMovies() {
    if (inputValue === "" || prevInputValue === inputValue) {
      return;
    }
    setIsLoading(true);
    const response = await getMoviesByName(inputValue);
    if (response.data) {
      setResults(response.data);
    } else {
      setErrorMessage(response.error);
    }

    setIsLoading(false);
    setCurrentPage(1);
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
    setCurrentPage(page);
  }

  async function keyDownEventHandler(event) {
    if (event.key === "Enter") {
      await searchMovies();
      setPrevInputValue(inputValue);
    }
  }

  async function clickEventHandler() {
    await searchMovies();
    setPrevInputValue(inputValue);
  }

  async function pageClickEventHandler(page) {
    await getMoviesByPage(page);
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
        <Button onClick={clickEventHandler}>Search</Button>
      </div>
      <h2>Results</h2>
      {isLoading && "Searching movies..."}
      {errorMessage && errorMessage}
      {results.data && (
        <>
          <Table
            data={results.data}
            columns={COLUMNS}
            keyProp="imdbID"
            totalPages={results.total_pages}
            currentPage={currentPage}
            onPageClick={pageClickEventHandler}
          />
        </>
      )}
    </div>
  );
};

export default Home;
