import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { useState, useEffect } from "react";

function App() {
  const addNumberRows = () => {
    let rows = document.querySelectorAll("tr");

    rows.forEach((row) => {
      if (row.rowIndex !== 0 && !numberRowsAdded) {
        let num = document.createElement("td");
        num.textContent = `${row.rowIndex}`;
        num.className = "RowNumber";
        setnumberRowsAdded(true);
      }
    });
  };
  const [numberRowsAdded, setnumberRowsAdded] = useState(false);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/films").then((data) => {
      data.json().then((result) => {
        setFilms(result);
        addNumberRows();
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
