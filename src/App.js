import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { useState, useEffect } from "react";

function App() {
 
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/films").then((data) => {
      data.json().then((result) => {
        setFilms(result);
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <Form />
      <Table films={films} />
    </div>
  );
}

export default App;
