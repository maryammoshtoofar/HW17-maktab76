import React, { useEffect } from "react";
import {
  DataTable,
  PopupContent,
  PopupText,
  ClosePopup,
  Button,
} from "./styledcomponents";
import "./index.css";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";

function Table(props) {
  return (
    <DataTable>
      <thead>
        <tr>
          <th>حذف</th>
          <th>توضیحات</th>
          <th>ژانر فیلم</th>
          <th>سال ساخت</th>
          <th>کارگردان</th>
          <th>نام فیلم</th>
          <th>ردیف</th>
        </tr>
      </thead>
      <tbody>
        {props.films.map((film) => (
          <tr key={film.id}>
            <td>
              <Button className="del" onClick={() => props.DeleteFilm(film.id)}>
                حذف
              </Button>
            </td>
            <td>
              <Popup
                trigger={<Button className="popup"> توضیحات </Button>}
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
            <td>{film.year}</td>
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
