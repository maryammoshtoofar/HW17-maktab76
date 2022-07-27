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

  const AddFilm = (newFilm) => {
    // POST request using fetch inside useEffect React hook
    let UpdatedFilms = [];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFilm),
    };
    fetch("http://localhost:3001/films", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        UpdatedFilms = [...films, data];
        setFilms(UpdatedFilms);
      });
  };
  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <div className="wrapper">
      <Form AddFilm={AddFilm} />
      <Table films={films} DeleteFilm={DeleteFilm} />
    </div>
  );
}

export default App;
