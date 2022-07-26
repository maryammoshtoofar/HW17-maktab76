import React, { useEffect } from "react";
import {
  DataTable,
  PopupContent,
  PopupText,
  ClosePopup,
} from "./styledcomponents";
import "./index.css";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";

function Table(props) {
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
              <button onClick={() => props.DeleteFilm(film.id)}>حذف</button>
            </td>
            <td>
              <Popup
                trigger={<button className="button"> توضیحات </button>}
                modal
              >
                {(close) => (
                  <PopupContent>
                    <ClosePopup
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      <AiOutlineClose size={24} />
                      بستن
                    </ClosePopup>
                    <PopupText>{film.description}</PopupText>
                  </PopupContent>
                )}
              </Popup>
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
