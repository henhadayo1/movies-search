import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div>
      App
      <Input />
      <Button onClick={() => alert("ss")}>Search</Button>
    </div>
  );
}

export default App;
