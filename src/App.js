import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { useState, useEffect } from "react";

function App() {
  // Set State to Store Films
  const [films, setFilms] = useState([]);

  // Function to get list of films from  API
  const GetApiData = () => {
    fetch(`http://localhost:3001/films`).then((data) => {
      data.json().then((result) => {
        setFilms(result);
      });
    });
  };

  // Function to Delete the Films
  const DeleteFilm = (id) => {
    fetch(`http://localhost:3001/films/${id}`, { method: "DELETE" }).then(() =>
      GetApiData()
    );
  };
  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <div className="wrapper">
      <Form />
      <Table films={films} DeleteFilm={DeleteFilm} />
    </div>
  );
}

export default App;
