import React, { useEffect } from "react";
import { DataTable } from "./styledcomponents";
import "./index.css";
function Table(props) {
  // Generate Row Numbers using rowIndex
  useEffect(() => {});

  return (
    <DataTable>
      <thead>
        <tr>
          <th>حذف</th>
          <th>توضیحات</th>
          <th>ژانر فیلم</th>
          <th>کارگردان</th>
          <th>نام فیلم</th>
          <th>ردیف</th>
        </tr>
      </thead>
      <tbody>
        {props.films.map((film) => (
          <tr key={film.id}>
            <td>
              <button>حذف</button>
            </td>
            <td>
              <button>توضیحات</button>
            </td>
            <td>{film.genre}</td>
            <td>{film.director}</td>
            <td>{film.title}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  );
}

export default Table;
