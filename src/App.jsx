import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import { useState } from "react";
import { getMoviesByName } from "./services/movies-service";

function App() {
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function searchMovies() {
    setIsLoading(true);
    const response = await getMoviesByName(inputValue);
    if (response.data) {
      setResult(response.data);
    } else {
      setErrorMessage(response.error);
    }

    setIsLoading(false);
  }

  return (
    <div>
      App
      <Input onChange={(event) => setInputValue(event.target.value)} />
      <Button onClick={searchMovies}>Search</Button>
      {inputValue}
      <div>
        <h2>Results</h2>
        {isLoading
          ? "Fetching results..."
          : errorMessage
          ? errorMessage
          : JSON.stringify(result)}
      </div>
    </div>
  );
}

export default App;
